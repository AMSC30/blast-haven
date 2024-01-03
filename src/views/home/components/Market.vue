<template>
	<div class="home-market-wrapper">
		<div class="line-wrapper w100">
			<img class="image w100" :src="marketLine" alt="" srcset="" />
			<span class="text font36">Market</span>
		</div>
		<div class="content-wrapper">
			<div class="title">
				<span class="dot-left"></span>
				<span class="text">The Blast Haven Market</span>
				<span class="dot-right"></span>
			</div>
			<div class="content font30">
				<p>The Blast Haven Market will serve as a pivotal hub for player interaction and collaboration.</p>
				<p style="margin-top: 30px">Here, you can buy, sell, and trade NFTs, as well as engage in specific NFT faction interactions.</p>
				<p style="margin-top: 50px; text-align: center" class="font36">Join us</p>
			</div>
			<div class="card-wrapper">
				<img class="card" v-for="(item, index) of cardList" :key="index" :src="item.icon" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="HomeCore">
import { ref } from 'vue';
import marketLine from '../images/market_line.png';
import twitter from '../images/twitter.png';
import discord from '../images/discord.png';
import gmail from '../images/gmail.png';

const cardList = ref([
	{
		text: 'Desert Tempest Gang',
		icon: twitter,
	},
	{
		text: 'Oasis Guardians',
		icon: discord,
	},
	{
		text: 'Tech Red Wings',
		icon: gmail,
	},
]);
</script>

<style lang="scss" scoped>
.home-market-wrapper {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;

	.line-wrapper {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 85px;
		.image {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 1;
		}
		.text {
			color: var(--next-color-white);
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 1;
		}
	}
	.content-wrapper {
		width: 60%;
		margin-top: 80px;
		color: var(--next-color-white);
		padding: 80px 160px 65px;
		background-image: url('../images/Market_bg.png');
		background-size: 100% 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		.title {
			color: var(--next-color-white);
			// transform: translateY(-110px);
			margin-top: -110px;
			height: 100px;
			line-height: 100px;
			font-size: 36px;
			text-align: center;
			box-shadow: inset 0px 4px 16px 0px #e75f5a;
			border-radius: 22px;
			opacity: 1;
			border: 1px solid rgba(199, 61, 56, 0.5);
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 5%;
			background: #12121d;
			.text {
				margin: 0 20px;
			}
			.dot-left,
			.dot-right {
				display: inline-block;
				width: 17px;
				height: 17px;
				border-radius: 100%;
				background: var(--next-color-white);
			}
		}
		.content {
			padding: 40px;
		}
		.card-wrapper {
			display: flex;
			align-items: stretch;
			justify-content: center;
			.card {
				&:nth-child(2) {
					margin: 0 40px;
				}
			}
		}
	}
}
</style>
