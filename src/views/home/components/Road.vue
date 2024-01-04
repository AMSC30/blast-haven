<template>
	<div class="home-road-wrapper">
		<div class="line-wrapper w100">
			<img class="image w100" :src="roadLine" alt="" srcset="" />
			<span class="text font36">Blast Haven Roadmap</span>
		</div>
		<div class="content-wrapper">
			<roadItem v-for="(item, index) of cardList" :key="index" :data="item" />
		</div>
	</div>
</template>

<script setup lang="ts" name="HomeRoad">
import { ref } from 'vue';
import roadLine from '../images/Road_line.png';
import phaseOne from '../images/Phase_one.png';
import phaseTwo from '../images/Phase_two.png';
import phaseThree from '../images/Phase_three.png';
import roadItem from './RoadItem.vue';

const cardList = ref([
	{
		text: 'Establishing a unique NFT marketplace, allowing players to customize their survivor NFTs, engage in buying, selling, and exchanging NFTs, and participate in specific NFT faction interactions.',
		icon: phaseOne,
		direction: 'left',
	},
	{
		text: 'Launching the first multi-genre game, encompassing adventure, cooperative, and competitive gaming, providing increased SDK and API support, and enhancing the overall gaming experience.',
		icon: phaseTwo,
		direction: 'right',
	},
	{
		text: 'Introducing more breathtaking missions and challenges, offering a wealth of additional gaming content.',
		icon: phaseThree,
	},
]);
</script>

<style lang="scss" scoped>
.home-road-wrapper {
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
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
}
</style>
