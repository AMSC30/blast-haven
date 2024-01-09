<template>
	<el-dialog
		v-model="show"
		width="815px"
		align-center
		modal-class="login-dialog-mask"
		class="login-dialog"
		:show-close="false"
		destroy-on-close
		@close="handleClose"
		append-to-body
	>
		<div class="content-container">
			<img class="safe" :src="safePng" />
			<p class="font34 mt25">Web3</p>
			<div class="list-wrapper mt30">
				<p class="list-item" v-for="(item, index) of list" :key="index">
					<span class="dot"></span><span class="text font22">{{ item }}</span>
				</p>
			</div>
			<el-divider class="mt30">
				<span class="divider-text font18">Connect with Crypto Wallet</span>
			</el-divider>
			<div class="entry mt30 w100" @click="toLogin">
				<img class="icon" :src="Metamask" alt="" srcset="" />
				<span class="text font24">Continue with Metamask</span>
			</div>
		</div>
	</el-dialog>
	<Mint v-model="mintShow" />
</template>

<script setup lang="ts" name="layoutMain">
import { ref, toRefs } from 'vue';
import safePng from './images/safe.png';
import Metamask from './images/Metamask.png';
import Mint from './mint.vue';

const emit = defineEmits(['update:modelValue']);
const props = defineProps({
	modelValue: Boolean,
});

const { modelValue: show } = toRefs(props);
const handleClose = () => {
	emit('update:modelValue', false);
};
const mintShow = ref(false);
const toLogin = () => {
	mintShow.value = true;
	emit('update:modelValue', false);
};

const list = ref(['Complete gaming experience', 'Become a Tevan', 'NFT, Rep score & Karma benefits', 'Pool play, shops & Teva-dex']);
</script>
<style lang="scss">
.login-dialog {
	border-radius: 60px;
	background-color: #2c2b31;
	.el-dialog__header {
		display: none;
	}
	.el-dialog__body {
		overflow: visible;
		max-height: none !important;
		.content-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 0 25% 30px;
			.safe {
				height: 150px;
				margin-top: -85px;
			}
			.list-wrapper {
				.list-item {
					display: flex;
					align-items: center;
					height: 40px;
					.dot {
						display: inline-block;
						width: 11px;
						height: 11px;
						background: #40cd89;
						opacity: 1;
						border-radius: 50%;
					}
					.text {
						color: var(--next-color-white);
						margin-left: 20px;
					}
				}
			}
			.el-divider {
				.el-divider__text {
					background-color: #2c2b31 !important;
					padding: 0;
					width: 300px;
					text-align: center;
					.divider-text {
						color: #696767;
					}
				}
			}
			.entry {
				display: flex;
				align-items: center;
				background-color: var(--next-color-white);
				border-radius: 60px;
				padding: 5px 20px;
				cursor: pointer;
				.icon {
					width: 50px;
				}
				.text {
					color: var(--next-color-black);
					margin-left: 20px;
				}
			}
		}
	}
}
</style>
