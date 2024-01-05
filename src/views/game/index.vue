<template>
	<div class="h100 game-wrapper">
		<img :src="mainBg" class="w100" />
		<div class="content-wrapper">
			<p class="come font36">Come Soon...</p>
			<p class="home mt20" @click="toHome">Home</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import mainBg from '/@/views/home/images/bg_main.png';
import { useRouter } from 'vue-router';
const router = useRouter();

const toHome = () => {
	router.push({ path: '/home' });
};
</script>

<style lang="scss" scoped>
.game-wrapper {
	position: relative;
	color: var(--next-color-white);
	.content-wrapper {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		.come {
			color: var(--next-color-red-1);
		}
		.home {
			padding: 0;
			height: 48px;
			width: 160px;
			text-align: center;
			line-height: 48px;
			background-color: var(--next-color-red-1);
			transition: all 0.2s ease;
			border-radius: 24px;
			cursor: pointer;
			&:hover {
				transform: scale(1.1);
			}
		}
	}
}
</style>
