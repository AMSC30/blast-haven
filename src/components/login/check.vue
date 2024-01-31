<template>
	<el-dialog
		v-model="show"
		width="760px"
		align-center
		modal-class="login-dialog-mask"
		class="check-dialog"
		:show-close="false"
		destroy-on-close
		:close-on-click-modal="false"
		append-to-body
	>
		<div class="content-container">
			<p class="font42">Complete your profile</p>
			<div class="card-wrapper mt40 ml20">
				<Step :active="2" />
				<p class="font22" style="text-align: center">
					{{ statusText[status] }}
				</p>
				<P v-if="status === 'Again'" class="font16 mt20" style="text-align: center">Received successfully</P>
				<div class="action-wrapper mt40">
					<div class="action font22" @click="handleClick">{{ status }}</div>
				</div>
				<P v-if="status === 'Start'" class="font16 mt20" style="text-align: center">You get two spins</P>
			</div>
			<div class="footer mt40 font22" v-if="status === 'Claim'">
				<span>Market</span>
				<span>Stake</span>
			</div>
		</div>
	</el-dialog>
</template>

<script setup lang="ts" name="layoutMain">
import { ref, toRefs } from 'vue';
import Step from './mint-step.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const emit = defineEmits(['update:modelValue']);
const props = defineProps({
	modelValue: Boolean,
});

const statusList = ['Check', 'Start', 'Claim', 'Again'];
const status = ref(statusList[0]);
const statusText = ref<Record<string, any>>({
	Check: `There are seven types of gangs and "Children of the Future" in the spin pool, check your spin count.`,
	Start: `There are seven types of gangs and "Children of the Future" in the spin pool, check your spin count.`,
	Claim: `Congratulations on winning "Children of the Future"`,
	Again: `Congratulations on winning "Children of the Future"`,
});
const getStatus = (current: string) => {
	let index: number = statusList.findIndex((item) => item === current);
	return { current: index, next: ++index };
};

// const mintShow = ref(false);
// const toComplete = () => {
// 	mintShow.value = true;
// 	emit('update:modelValue', false);
// };

const { modelValue: show } = toRefs(props);

const handleClick = () => {
	// if (status.value === 'Check') {
	// const { next } = getStatus(status.value);
	// status.value = statusList[next];
	// }
	// if (status.value === 'Start') {
	const { next } = getStatus(status.value);
	status.value = statusList[next];
	// }
	// emit('update:modelValue', false);
	// router.push({ path: '/profile' });
};
</script>
<style lang="scss">
.check-dialog {
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
			.footer {
				width: 200px;
				display: flex;
				justify-content: space-between;
				span {
					border-bottom: 1px solid white;
					cursor: pointer;
					&:hover {
						color: var(--next-color-red-1);
						border-bottom: 1px solid var(--next-color-red-1);
					}
				}
			}
		}
	}
}
</style>
