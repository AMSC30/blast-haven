<template>
	<div class="card-item-wrapper">
		<img class="poster" :src="data.icon" alt="" srcset="" />
		<div class="des font26">
			<span>{{ data.text }}</span>
		</div>
	</div>
</template>

<script setup lang="ts" name="HomeCore">
import { toRefs } from 'vue';

const props = defineProps({
	data: {
		type: Object,
		required: true,
	},
});
const { data } = toRefs(props);
</script>

<style lang="scss" scoped>
.card-item-wrapper {
	display: flex;
	flex-direction: column;
	background-image: url('../images/Characters_bg_small.png');
	padding: 10px;
	background-repeat: no-repeat;
	background-size: 100% 100%;
	.poster {
		width: 100%;
		border-radius: 20px;
	}
	.des {
		color: var(--next-color-white);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		display: flex;
		justify-content: center;
		align-items: stretch;
		flex: 1;
		font-weight: 600;
		span {
			backdrop-filter: blur(5px);
			padding: 30px 10px;
			border-radius: 40px;
			flex: 1;
			text-align: center;
		}
	}
}
</style>
