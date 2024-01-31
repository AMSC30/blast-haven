<template>
	<el-dialog
		v-model="show"
		width="760px"
		align-center
		modal-class="login-dialog-mask"
		class="mint-dialog"
		:show-close="false"
		destroy-on-close
		:close-on-click-modal="false"
		append-to-body
	>
		<div class="content-container">
			<p class="font42">Complete your profile</p>
			<div class="step-container mt40">
				<div class="card-wrapper ml20">
					<Step :active="1" />
					<div class="info-wrapper mt20">
						<img class="card" :src="idCard" alt="" srcset="" />
						<div class="info ml20">
							<p class="font36 fw600">Mint Citizen ID</p>
							<p class="font22 mt20">Mint your ID NFT to become a registered citizen of the Blash Haven.</p>
						</div>
					</div>
					<div class="action-wrapper mt40">
						<div class="action font22" @click="toCheck">Mint</div>
					</div>
				</div>
			</div>
		</div>
	</el-dialog>
	<Check v-model="checkShow" />
</template>

<script setup lang="ts" name="layoutMain">
import { ref, toRefs } from 'vue';
import idCard from './images/id_card.png';
import Step from './mint-step.vue';
import Check from './check.vue';

const emit = defineEmits(['update:modelValue']);
const props = defineProps({
	modelValue: Boolean,
});

const checkShow = ref(false);

const toCheck = () => {
	checkShow.value = true;
	emit('update:modelValue', false);
	// router.push({ path: '/profile' });
};

const { modelValue: show } = toRefs(props);
</script>
<style lang="scss">
.mint-dialog {
	border-radius: 60px;
	background-color: transparent;
	border: none !important;
	box-shadow: none !important;
	.el-dialog__header {
		display: none;
	}
	.el-dialog__body {
		overflow: visible;
		max-height: none !important;
		.content-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			.step-container {
				display: flex;
				align-items: stretch;
				justify-content: space-between;

				.card-wrapper {
					background-color: #2c2b31;
					padding: 40px;
					border-radius: 40px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: stretch;

					.info-wrapper {
						display: flex;
						align-items: flex-start;

						.card {
							width: 300px;
						}
						.info {
							line-height: 36px;
						}
					}
					.action-wrapper {
						display: flex;
						align-items: center;
						justify-content: center;
						.action {
							background-color: var(--next-color-red-1);
							width: 146px;
							height: 50px;
							border-radius: 1000px 1000px 1000px 1000px;
							display: flex;
							align-items: center;
							justify-content: center;
							cursor: pointer;
						}
						.skip {
							color: var(--next-color-white);
							cursor: pointer;
						}
					}
				}
			}
		}
	}
}
</style>
