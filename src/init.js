/* eslint-disable no-console */
/* eslint-disable no-undef */
import { ethers } from 'ethers';

const API_NODE = 'http://43.134.188.188/api/v1';

//钱包地址
let wallet;
//基本参数
let config;
//钱包
let provider;
//钱包签名
let signer;
//三个合约
let citizen, faction, vault;
//当前地址钱包信息
let wallet_info;

//请求API
async function post(path, data) {
	const response = await fetch(API_NODE + path, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	return await response.json();
}
/*
     初始化
 */
window.initialize = function () {
	//0. 检测是否安装Metamask
	if (typeof window.ethereum === 'undefined') {
		console.log('没有安装metamask');
		return;
	}

	//各种事件
	ethereum.on('chainChanged', function () {
		console.log('网络切换');
		window.location.reload();
	});
	ethereum.on('accountsChanged', function () {
		console.log('钱包切换');
		window.location.reload();
	});
	ethereum.on('connect', function () {
		console.log('连接成功');
	});
	ethereum.on('disconnect', function () {
		console.log('断开连接');
	});
	ethereum.on('message', function (msg) {
		console.log('消息');
		console.log(msg);
	});

	//1. 请求API接口/config
	let info = null;
	post('/config')
		.then((data) => {
			info = data;
			//2. 尝试连接钱包
			return ethereum.request({
				method: 'eth_requestAccounts',
				params: [],
			});
		})
		.then((wallets) => {
			wallet = wallets[0];
		})
		.then(() => {
			//3. 获取当前链ID
			return ethereum.request({ method: 'eth_chainId' });
		})
		.then((chainId) => {
			const expected = '0x' + (info.data.chain_id * 1).toString(16);
			if (chainId !== expected) {
				//切换链
				return ethereum.request({
					method: 'wallet_switchEthereumChain',
					params: [{ chainId: expected }],
				});
			}
		})
		.then(() => {
			//钱包连接完成
			config = info.data;
			provider = new ethers.BrowserProvider(window.ethereum);
			return provider.getSigner();
		})
		.then((data) => {
			signer = data;
			// 三份合约
			citizen = new ethers.Contract(config.citizen.address, config.citizen.abi, signer);
			faction = new ethers.Contract(config.faction.address, config.faction.abi, signer);
			vault = new ethers.Contract(config.vault.address, config.vault.abi, signer);
			update_info();
		})
		.catch((e) => {
			console.log('错误', e);
		});
};

window.mint_faction = async function () {
	if (!wallet) {
		console.error('钱包尚未连接');
		return;
	}

	try {
		// 白名单，超过2个token，调用whitelistMint
		if (wallet_info.whitelist && wallet_info.mint_remain <= 3) {
			const encoder = new TextEncoder();
			const msgBytes = encoder.encode(config.sign_message);
			const msgHex = Array.from(msgBytes)
				.map((b) => b.toString(16).padStart(2, '0'))
				.join('');
			const msg = '0x' + msgHex;
			const sign = await ethereum.request({
				method: 'personal_sign',
				params: [msg, wallet],
			});

			const res = await post('/mint_proof', {
				address: wallet,
				sign: sign,
			});

			const tx = await faction.whitelistMint(res.data.proof);
			document.querySelector('#mint_faction').innerHTML = tx.hash;
		} else {
			const tx = await faction.freeMint();
			document.querySelector('#mint_faction').innerHTML = tx.hash;
		}
	} catch (err) {
		console.error(err);
		document.querySelector('#mint_faction').innerHTML = err.message;
	}
};

window.update_info = async function () {
	if (!wallet) {
		console.error('钱包尚未连接');
		return;
	}

	const res = await post('/wallet_info', {
		address: wallet,
	});
	console.log(`钱包状态: ${JSON.stringify(res)}`);
	wallet_info = res.data;
};

window.create_citizen = async function () {
	try {
		const res = await citizen.mint();
		document.querySelector('#create_citizen').innerHTML = res.hash;
	} catch (err) {
		console.error(err);
		document.querySelector('#create_citizen').innerHTML = err.message;
	}
};

window.approve_faction = async function () {
	try {
		const isApproved = await faction.isApprovedForAll(wallet, config.vault.address);
		if (isApproved) {
			document.querySelector('#approve_faction').innerHTML = '已授权';
			return;
		}
		const res = await faction.setApprovalForAll(config.vault.address, true);
		document.querySelector('#approve_faction').innerHTML = res.hash;
	} catch (err) {
		console.error(err);
		document.querySelector('#approve_faction').innerHTML = err.message;
	}
};

window.stack = async function () {
	try {
		const id = document.querySelector('#stack_id').value;
		const res = await vault.stack(id);
		document.querySelector('#stack').innerHTML = res.hash;
	} catch (err) {
		console.error(err);
		document.querySelector('#stack').innerHTML = err.message;
	}
};

window.stack_redeem = async function () {
	try {
		const id = document.querySelector('#stack_redeem_id').value;
		const res = await vault.stackRedeem(id);
		document.querySelector('#stack_redeem').innerHTML = res.hash;
	} catch (err) {
		console.error(err);
		document.querySelector('#stack_redeem').innerHTML = err.message;
	}
};

window.sell = async function () {
	try {
		const id = document.querySelector('#sell_id').value;
		const res = await vault.sell(id, ethers.parseEther('0.1'));
		document.querySelector('#sell').innerHTML = res.hash;
	} catch (err) {
		console.error(err);
		document.querySelector('#sell').innerHTML = err.message;
	}
};

window.buy = async function () {
	try {
		const id = document.querySelector('#buy_id').value;
		const res = await vault.buy(id, { value: ethers.parseEther('0.1') });
		document.querySelector('#buy').innerHTML = res.hash;
	} catch (err) {
		console.error(err);
		document.querySelector('#buy').innerHTML = err.message;
	}
};

window.sale_redeem = async function () {
	try {
		const id = document.querySelector('#sale_redeem_id').value;
		const res = await vault.saleRedeem(id);
		document.querySelector('#sale_redeem').innerHTML = res.hash;
	} catch (err) {
		console.error(err);
		document.querySelector('#sale_redeem').innerHTML = err.message;
	}
};

window.sale_list = async function () {
	const res = await post('/sale_list', {
		// 帮派类型, 0=所有
		token_type: 2,
		// 按价格排序
		ascending: true,
		page_size: 10,
		page_index: 1,
	});
	console.log(`销售列表: ${JSON.stringify(res)}`);
};

window.stack_list = async function () {
	const res = await post('/stack_list', {
		page_size: 10,
		page_index: 1,
	});
	console.log(`质押列表: ${JSON.stringify(res)}`);
};

window.reward_list = async function () {
	const res = await post('/reward_list', {
		page_size: 10,
		page_index: 1,
	});
	console.log(`积分列表: ${JSON.stringify(res)}`);
};

window.nonce_check = async function () {
	// metamask提供的nonce不可靠
	const newProvider = new ethers.JsonRpcProvider('https://l1rpc.katla.taiko.xyz');
	const nonce = await newProvider.getTransactionCount(wallet, 'pending');
	document.querySelector('#nonce_check').innerHTML = nonce.toString();
};

window.onload = initialize;
