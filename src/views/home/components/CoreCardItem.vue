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
	.poster {
		width: 100%;
	}
	.des {
		margin-top: -80px;
		color: var(--next-color-white);
		background-image: url('../images/core_bg.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		display: flex;
		justify-content: center;
		align-items: stretch;
		flex: 1;
		span {
			backdrop-filter: blur(5px);
			padding: 30px;
			border-radius: 40px;
			flex: 1;
		}
	}
}
</style>
