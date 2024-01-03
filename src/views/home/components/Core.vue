<template>
	<div class="home-core-wrapper">
		<img class="w100" :src="divideLine" alt="" srcset="" />
		<div class="content font26">
			<img class="content-icon content-icon-left" :src="contentLeft" />
			At the core of Blast Haven lies the fusion of strategy, cooperation, and survival elements, crafting a truly engaging gaming world while
			maintaining both the fun factor and fairness of the game.
			<img class="content-icon content-icon-right" :src="contentRight" />
		</div>
		<div class="card-wrapper">
			<CoreCardItem class="card" v-for="(item, index) of cardList" :key="index" :data="item"></CoreCardItem>
		</div>
	</div>
</template>

<script setup lang="ts" name="HomeCore">
import divideLine from '../images/dividing_line.png';
import contentLeft from '../images/core_content_left.png';
import contentRight from '../images/core_content_right.png';
import meet from '../images/meet.png';
import connect from '../images/connect.png';
import obtain from '../images/obtain.png';
import CoreCardItem from './CoreCardItem.vue';
import { ref } from 'vue';

const cardList = ref([
	{
		text: 'Meet and compete with fellow survivors of the future',
		icon: meet,
	},
	{
		text: 'Connect with your friends and play together',
		icon: connect,
	},
	{
		text: 'Obtain your survivor ID to begin the journey',
		icon: obtain,
	},
]);
</script>

<style lang="scss" scoped>
.home-core-wrapper {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	.content {
		position: relative;
		width: 60%;
		color: var(--next-color-white);
		margin-top: 40px;
		padding: 60px;
		&-icon {
			position: absolute;
		}
		&-icon-left {
			bottom: 0;
			left: 0;
		}
		&-icon-right {
			top: 0;
			right: 0;
		}
	}
	.card-wrapper {
		width: 60%;
		display: flex;
		align-items: stretch;
		margin-top: 100px;
		.card {
			width: 32%;
			flex: 1;
			flex-shrink: 1;
			&:nth-child(2) {
				margin: 0 20px;
			}
		}
	}
}
</style>
