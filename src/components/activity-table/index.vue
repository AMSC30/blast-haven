<template>
	<div class="offerTable-wrapper">
		<el-table :data="tableData" max-height="400" style="width: 100%">
			<el-table-column prop="Action" label="Action" />
			<el-table-column prop="Market" label="Market" />
			<el-table-column prop="Date" label="Date" />
			<el-table-column prop="From" label="From" />
			<el-table-column prop="Date" label="Date" />
			<el-table-column prop="Price" label="Price" min-width="160">
				<template #default>
					<div class="money">
						<img style="width: 25px" :src="crystal" alt="" srcset="" />
						<span class="eth ml5">0.0339 ETH</span>
						<span class="dolor">($70.83)</span>
					</div>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script setup lang="ts">
import crystal from '/@/views/market/images/crystal.png';

const tableData = [
	{
		Action: 'LISTING',
		Market: 'Tom',
		Date: '2 days ago',
		From: '0x2c3b...1C79',
		To: '0x2c3b...1C79',
		Price: '',
	},
	{
		Action: 'LISTING',
		Market: 'Tom',
		Date: '2 days ago',
		From: '0x2c3b...1C79',
		To: '0x2c3b...1C79',
	},
	{
		Action: 'LISTING',
		Market: 'Tom',
		Date: '2 days ago',
		From: '0x2c3b...1C79',
		To: '0x2c3b...1C79',
	},
	{
		Action: 'LISTING',
		Market: 'Tom',
		Date: '2 days ago',
		From: '0x2c3b...1C79',
		To: '0x2c3b...1C79',
	},
	{
		Action: 'LISTING',
		Market: 'Tom',
		Date: '2 days ago',
		From: '0x2c3b...1C79',
		To: '0x2c3b...1C79',
	},
	{
		Action: 'LISTING',
		Market: 'Tom',
		Date: '2 days ago',
		From: '0x2c3b...1C79',
		To: '0x2c3b...1C79',
	},
	{
		Action: 'LISTING',
		Market: 'Tom',
		Date: '2 days ago',
		From: '0x2c3b...1C79',
		To: '0x2c3b...1C79',
	},
	{
		Action: 'LISTING',
		Market: 'Tom',
		Date: '2 days ago',
		From: '0x2c3b...1C79',
		To: '0x2c3b...1C79',
	},
	{
		Action: 'LISTING',
		Market: 'Tom',
		Date: '2 days ago',
		From: '0x2c3b...1C79',
		To: '0x2c3b...1C79',
	},
	{
		Action: 'LISTING',
		Market: 'Tom',
		Date: '2 days ago',
		From: '0x2c3b...1C79',
		To: '0x2c3b...1C79',
	},
	{
		Action: 'LISTING',
		Market: 'Tom',
		Date: '2 days ago',
		From: '0x2c3b...1C79',
		To: '0x2c3b...1C79',
	},
	{
		Action: 'LISTING',
		Market: 'Tom',
		Date: '2 days ago',
		From: '0x2c3b...1C79',
		To: '0x2c3b...1C79',
	},
	{
		Action: 'LISTING',
		Market: 'Tom',
		Date: '2 days ago',
		From: '0x2c3b...1C79',
		To: '0x2c3b...1C79',
	},
];
</script>

<style lang="scss" scoped>
.offerTable-wrapper {
	:deep(.el-table) {
		border-radius: 16px;

		.el-table__header-wrapper {
			border-radius: 16px;

			.el-table__header {
				border-radius: 16px;

				thead {
					color: var(--next-color-white);
					font-size: 22px;
					border-radius: 16px;
				}
			}
		}
		.el-table__body-wrapper {
			.el-table__body {
				.el-table__row {
					color: var(--next-color-white);
					&:hover {
						background-color: var(--next-bg-main-color);
					}
					.el-table__cell {
						color: var(--next-color-white);
					}
				}
			}
		}
	}
	.money {
		display: flex;
		align-items: center;
		.dolor {
			color: var(--next-color-grey-1);
		}
	}
}
</style>
