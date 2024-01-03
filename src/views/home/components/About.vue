<template>
	<div class="home-core-wrapper">
		<div class="inner-left">
			<div class="title">
				<span class="dot-left"></span>
				<span>About Blast Haven</span>
				<span class="dot-right"></span>
			</div>
			<div class="content-1">Welcome to Blast Haven, the groundbreaking Web3 game that offers an unparalleled immersive experience.</div>
			<div class="content-2">In Blast Haven, you'll be transported into a future world consumed by an apocalyptic wave.</div>
			<div class="content-3">
				City ruins, factional conflicts, and fabled research centers will all become your exploration playground in this dystopian landscape.
			</div>
		</div>
		<div class="inner-right">
			<div class="circle-wrapper">
				<img class="circle" :src="circle" />
				<div class="text">more</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="HomeAbout">
import circle from '../images/bg_circle.png';
</script>

<style lang="scss" scoped>
.home-core-wrapper {
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 92px 0;
	.inner-left {
		width: 30%;
		.title {
			color: var(--next-color-white);
			height: 100px;
			line-height: 100px;
			font-size: 36px;
			text-align: center;
			box-shadow: inset 0px 4px 16px 0px #e75f5a;
			border-radius: 22px 22px 22px 22px;
			opacity: 1;
			border: 1px solid rgba(199, 61, 56, 0.5);
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 5%;
			margin-bottom: 40px;
			.dot-left,
			.dot-right {
				display: inline-block;
				width: 17px;
				height: 17px;
				border-radius: 100%;
				background: var(--next-color-white);
			}
		}
		.content-1,
		.content-2,
		.content-3 {
			color: var(--next-color-white);
			margin-top: 30px;
			font-size: 22px;
		}
	}
	.inner-right {
		width: 30%;
		margin-left: 10px;
		.circle-wrapper {
			position: relative;
			.circle {
				width: 100%;
			}
			.text {
				position: absolute;
				bottom: 0;
				left: 50%;
				transform: translateX(-50%);
				color: var(--next-color-main);
				font-size: 26px;
				width: 60%;
				height: 65px;
				line-height: 65px;
				text-align: center;
				background: #13121e;
				box-shadow: inset 7px 4px 22px 0px #e75f5a;
				opacity: 1;
				border: 1px solid rgba(199, 61, 56, 0.1);
			}
		}
	}
}
</style>
