<template>
	<div class="home-road-item-wrapper">
		<img class="step" :src="data.icon" />
		<div class="content font26">
			{{ data.text }}
		</div>
		<div class="connect-left" v-if="data.direction === 'left'"></div>
		<div class="connect-right" v-if="data.direction === 'right'"></div>
	</div>
</template>

<script setup lang="ts" name="HomeRoadItem">
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
.home-road-item-wrapper {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 0 50px 100px;

	.step {
		width: 45%;
		height: 100px;
		margin-bottom: 5px;
	}
	.content {
		background-image: url('../images/road_bg.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		padding: 50px 70px;
		text-align: center;
		line-height: 33px;
		font-weight: 600;
	}
	.connect-left,
	.connect-right {
		position: absolute;
		border: 3px dashed #492575;
		top: 50px;
		bottom: -47px;
	}
	.connect-left {
		left: 0;
		right: calc(72.5% - 25px);
		border-right: none !important;
	}
	.connect-right {
		right: 0;
		left: calc(72.5% - 25px);
		border-left: none !important;
	}
}
</style>
