<template>
	<div class="market-detail">
		<div class="market-detail-wrapper">
			<div class="left-wrapper">
				<img :src="haven1" alt="" />
				<el-collapse class="mt20" v-model="activeDes">
					<el-collapse-item name="4">
						<template v-slot:title>
							<span class="fw600 font22">Description</span>
						</template>
						<div class="font16">
							Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.
						</div>
					</el-collapse-item>
				</el-collapse>
			</div>
			<div class="right-wrapper">
				<span class="id font22">#4204</span>
				<p class="font26 fw600 mt30">Phoenix #4204</p>
				<p class="mt30 font16"><span class="fw600">Owned</span><span>&nbsp;by&nbsp;</span><span>0x2c3b...1c79</span></p>
				<div class="mt30 buy-out pd22">
					<p class="fw600 font20">Buyout Price</p>
					<p class="price mt20">
						<img style="width: 35px" :src="crystal" alt="" srcset="" />
						<span class="font26 fw600 ml10">0.0420&nbsp;ETH</span>
					</p>
					<p class="buy fw600">
						<span class="buy-btn">Buy</span>
						<span class="ml20 make">Make Offer</span>
					</p>
				</div>
				<el-collapse class="mt30" v-model="activeOffers">
					<el-collapse-item name="1">
						<template v-slot:title>
							<span class="fw600 font22">Offers</span>
						</template>
						<!-- <div class="font16">
							Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.
						</div> -->
						<OfferTable></OfferTable>
					</el-collapse-item>
				</el-collapse>
			</div>
		</div>
		<div class="table-wrapper mt30">
			<el-collapse v-model="activeTable">
				<el-collapse-item name="1">
					<template v-slot:title>
						<span class="fw600 font22">Activities</span>
					</template>
					<ActivityTable />
				</el-collapse-item>
			</el-collapse>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import haven1 from '/@/views/home/images/Blast_Haven_1.png';
import crystal from '/@/views/market/images/crystal.png';
import ActivityTable from '/@/components/activity-table/index.vue';
import OfferTable from '/@/components/offer-table/index.vue';

const activeDes = ref([]);
const activeTable = ref(['1']);
const activeOffers = ref(['1']);
</script>

<style lang="scss" scoped>
.market-detail {
	padding: 20px 0;
	:deep(.el-collapse) {
		border-radius: 16px;
		.el-collapse-item {
			border-radius: 16px;
			.el-collapse-item__header {
				border-radius: 16px;
				padding: 10px 20px;
				height: auto;
				color: var(--next-color-white);
				&.is-active {
					border-radius: 16px 16px 0 0;
				}
			}
			.el-collapse-item__wrap {
				border-radius: 0 0 16px 16px;
				padding: 0 20px;
			}
		}
	}
	.market-detail-wrapper {
		width: 60%;
		display: grid;
		grid-template-columns: 30% auto;
		column-gap: 60px;
		margin: auto;
		.left-wrapper {
			display: flex;
			flex-direction: column;
			align-items: stretch;
		}
		.right-wrapper {
			color: var(--next-color-white);
			.id {
				height: 48px;
				display: inline-block;
				padding: 0 24px;
				line-height: 48px;
				border-radius: 24px;
				background-color: var(--next-color-black);
			}
			.buy-out {
				background-color: var(--next-color-black);
				padding: 26px;
				border-radius: 16px;
				.price {
					display: flex;
					align-items: center;
				}
				.buy {
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 30px 0;
					.buy-btn {
						padding: 10px 40px;
						border-radius: 26px;
						background-color: var(--next-color-main);
						cursor: pointer;
						&:hover {
							background-color: var(--next-color-red-1);
						}
					}
					.make {
						padding: 10px 40px;
						border-radius: 26px;
						border: 1px solid var(--next-color-grey-1);
						cursor: pointer;

						&:hover {
							background-color: var(--next-bg-main);
							border: 1px solid var(--next-bg-main);
						}
					}
				}
			}
		}
	}
	.table-wrapper {
		width: 60%;
		margin: auto;
		:deep(.el-collapse-item__wrap) {
			padding: 0 !important;
		}
	}
}
</style>
