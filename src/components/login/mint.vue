<template>
	<el-dialog
		v-model="show"
		width="900px"
		align-center
		modal-class="login-dialog-mask"
		class="mint-dialog"
		:show-close="false"
		destroy-on-close
		:close-on-click-modal="false"
		append-to-body
	>
		<div class="content-container">
			<p class="font42">Complete your web3 profile</p>
			<div class="step-container mt40">
				<div class="step-wrapper">
					<div class="step" v-for="(item, index) of steps" :key="index">
						<span class="label font24 mt15" :class="{ active: stepIndex === index }">Step {{ index + 1 }}</span>
						<div class="line-wrapper">
							<div class="line" v-if="index !== steps.length - 1"></div>
							<img class="icon" :src="item.icon" alt="" srcset="" />
						</div>
					</div>
				</div>
				<div class="card-wrapper ml20">
					<div class="info-wrapper">
						<div class="info">
							<p class="font36 fw600">Mint Citizen ID</p>
							<p class="font22 mt20">Mint your ID NFT to become a registered citizen of the Blash Haven.</p>
						</div>
						<img class="card ml20" :src="idCard" alt="" srcset="" />
					</div>
					<div class="action-wrapper mt40">
						<div class="action" @click="toProfile">
							<img class="card" :src="buttonLogo" alt="" srcset="" />
						</div>
						<div class="skip font22 ml30 mb10" @click="handleSkip">Skip for now</div>
					</div>
				</div>
			</div>
		</div>
	</el-dialog>
</template>

<script setup lang="ts" name="layoutMain">
import { ref, toRefs } from 'vue';
import idCard from './images/id_card.png';
import buttonLogo from './images/button_logo.png';
import step1 from './images/Step1.png';
import step2 from './images/Step2.png';
import step3 from './images/Step3.png';
import { useRouter } from 'vue-router';

const router = useRouter();
const emit = defineEmits(['update:modelValue']);
const props = defineProps({
	modelValue: Boolean,
});

const { modelValue: show } = toRefs(props);
const handleSkip = () => {
	emit('update:modelValue', false);
};
const toProfile = () => {
	emit('update:modelValue', false);
	router.push({ path: '/profile' });
};
const steps = ref([{ icon: step1 }, { icon: step2 }, { icon: step3 }]);
const stepIndex = ref(1);
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
				.step-wrapper {
					width: 230px;
					padding: 40px 0;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.step {
						display: flex;
						flex: 1;
						justify-content: space-between;
						.label {
							&.active {
								color: var(--next-color-red-1);
							}
						}
						.line-wrapper {
							position: relative;
							.line {
								position: absolute;
								height: 100px;
								width: 0px;
								border-right: 3px dashed var(--next-color-red-1);
								top: 15px;
								right: 30px;
							}
							.icon {
								position: relative;
								z-index: 1;
							}
						}
					}
				}
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
						.info {
							line-height: 36px;
						}
					}
					.action-wrapper {
						display: flex;
						align-items: flex-end;
						.action {
							background-color: var(--next-color-red-1);
							width: 146px;
							height: 68px;
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
