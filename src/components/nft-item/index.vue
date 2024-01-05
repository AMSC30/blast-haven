<template>
	<div class="nft-item-wrapper" @click="havenClick">
		<div class="icon-wrapper">
			<img class="icon" :src="data.icon" alt="" srcset="" />
		</div>
		<div class="info-wrapper">
			<p class="num fw600 font16"># {{ data.num }}</p>
			<p class="name font14 mt5">{{ data.name }}</p>
			<p class="price-label font16 mt14">Price</p>
			<p class="price mt5">
				<span class="dolor font18 fw600">${{ data.price }}</span>
				<span class="eth font14 ml10">{{ data.eth }} ETH</span>
			</p>
		</div>
		<div class="detail-entry">View Details</div>
	</div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
	data: { type: Object },
});

const { data } = toRefs(props);

const router = useRouter();
const havenClick = () => {
	router.push({ path: '/market/detail' });
};
</script>

<style lang="scss" scoped>
.nft-item-wrapper {
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
</style>
