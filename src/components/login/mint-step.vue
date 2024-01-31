<template>
	<div class="step-wrapper">
		<div class="step-item" v-for="(item, index) of steps" :key="index">
			<span class="count" :class="{ active: item === active }">{{ item }}</span>
			<img class="icon" v-if="index !== steps.length - 1" :src="stepIcon" alt="" srcset="" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue';
import stepIcon from './images/tsconfig.png';

const steps = ref([1, 2]);
const props = defineProps({
	active: { type: Number, required: true },
});
const { active } = toRefs(props);
</script>

<style lang="scss" scoped>
.step-wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	.step-item {
		display: flex;
		align-items: center;
		.count {
			display: inline-block;
			width: 30px;
			height: 30px;
			line-height: 30px;
			text-align: center;
			background-color: rgba(199, 61, 56, 0.2);
			border-radius: 100%;
			&.active {
				background-color: var(--next-color-red-1);
			}
		}
	}
}
</style>
