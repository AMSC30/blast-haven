<template>
	<div>
		<div class="market-wrapper">
			<div class="market-item-wrapper" @click="havenClick" v-for="(item, index) of havenList" :key="index">
				<div class="icon-wrapper">
					<img class="icon" :src="item.icon" alt="" srcset="" />
				</div>
				<div class="info-wrapper">
					<p class="num fw600 font16"># {{ item.num }}</p>
					<p class="name font14 mt5">{{ item.name }}</p>
					<p class="price-label font16 mt14">Price</p>
					<p class="price mt5">
						<span class="dolor font18 fw600">${{ item.price }}</span>
						<span class="eth font14 ml10">{{ item.eth }} ETH</span>
					</p>
				</div>
				<div class="detail-entry">View Details</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import haven1 from '/@/views/home/images/Blast_Haven_1.png';
import haven2 from '/@/views/home/images/Blast_Haven_2.png';
import haven3 from '/@/views/home/images/Blast_Haven_3.png';
import haven4 from '/@/views/home/images/Blast_Haven_4.png';
import haven5 from '/@/views/home/images/Blast_Haven_5.png';
import haven6 from '/@/views/home/images/Blast_Haven_6.png';
import haven7 from '/@/views/home/images/Blast_Haven_7.png';
import haven8 from '/@/views/home/images/Blast_Haven_8.png';
import { useRouter } from 'vue-router';

const havenList = ref([
	{
		name: 'Desert Tempest',
		price: 12.3,
		num: 212,
		eth: 0.028,
		icon: haven1,
	},
	{
		name: 'ff',
		price: 12.3,
		num: 212,
		eth: 0.028,
		icon: haven2,
	},
	{
		name: 'ff',
		price: 12.3,
		num: 212,
		eth: 0.028,
		icon: haven3,
	},
	{
		name: 'ff',
		price: 12.3,
		num: 212,
		eth: 0.028,
		icon: haven4,
	},
	{
		name: 'ff',
		price: 12.3,
		num: 212,
		eth: 0.028,
		icon: haven5,
	},
	{
		name: 'ff',
		price: 12.3,
		num: 212,
		eth: 0.028,
		icon: haven6,
	},
	{
		name: 'ff',
		price: 12.3,
		num: 212,
		eth: 0.028,
		icon: haven7,
	},
	{
		name: 'ff',
		price: 12.3,
		num: 212,
		eth: 0.028,
		icon: haven8,
	},
]);
const router = useRouter();
const havenClick = () => {
	router.push({ path: '/market/detail' });
};
</script>

<style lang="scss" scoped>
.market-wrapper {
	width: 80%;
	display: grid;
	grid-template-columns: repeat(4, auto);
	column-gap: 20px;
	row-gap: 20px;
	padding: 20px 0;
	margin: auto;
	.market-item-wrapper {
		position: relative;
		padding: 10px;
		background-color: var(--next-color-black);
		color: var(--next-color-white);
		border-radius: 10px;
		cursor: pointer;
		.detail-entry {
			opacity: 0;
			position: absolute;
			top: 50%;
			left: 50%;
			width: 160px;
			text-align: center;
			transform: translate(-50%, -50%);
			transition: all 0.5s ease;
			background-color: var(--next-color-main);
			padding: 10px 0;
			border-radius: 20px;
			user-select: none;
		}
		&:hover {
			.detail-entry {
				opacity: 1;
			}
			.icon-wrapper {
				.icon {
					transform: scale(1.2);
				}
			}
		}
		.icon-wrapper {
			width: 100%;
			overflow: hidden;
			border-radius: 10px;

			.icon {
				width: 100%;
				border-radius: 10px;
				transition: all 0.5s ease;
			}
		}
		.info-wrapper {
			padding: 10px 10px 0;
			.price {
				.eth {
					color: var(--next-text-color-placeholder);
				}
			}
			.price-label {
				color: var(--next-text-color-placeholder);
			}
		}
	}
}
</style>
