<template>
	<div>
		<div class="profile-wrapper pt40">
			<div class="base-info-wrapper">
				<img class="avatar" :src="trade" />
				<div class="info-wrapper ml20">
					<p class="name fw600">Portfolio</p>
					<p class="des font16 mt8">Top whitelisted NFTs on zkSync Era</p>
				</div>
			</div>
			<el-tabs v-model="activeName" class="mt20">
				<el-tab-pane label="NFTs" name="first">
					<div class="nft-list-wrapper pb20">
						<NftItem v-for="(item, index) of havenList" :key="index" :data="item" />
					</div>
				</el-tab-pane>
				<el-tab-pane label="Offers" name="third">Offers</el-tab-pane>
				<el-tab-pane label="Activity" name="fourth">
					<div class="pb20">
						<ActivityTable class="table-wrapper" />
					</div>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script setup lang="ts">
import trade from '/@/views/profile/trade.svg';
import ActivityTable from '/@/components/activity-table/index.vue';
import haven1 from '/@/views/home/images/Blast_Haven_1.png';
import haven2 from '/@/views/home/images/Blast_Haven_2.png';
import haven3 from '/@/views/home/images/Blast_Haven_3.png';
import haven4 from '/@/views/home/images/Blast_Haven_4.png';
import haven5 from '/@/views/home/images/Blast_Haven_5.png';
import haven6 from '/@/views/home/images/Blast_Haven_6.png';
import haven7 from '/@/views/home/images/Blast_Haven_7.png';
import haven8 from '/@/views/home/images/Blast_Haven_8.png';
import NftItem from '/@/components/nft-item/index.vue';
import { ref } from 'vue';
const activeName = ref('first');
const havenList = ref([
	{
		name: 'Desert Tempest',
		price: 12.3,
		num: 212,
		eth: 0.028,
		icon: haven1,
	},
	{
		name: 'Oasis Guardians',
		price: 12.3,
		num: 212,
		eth: 0.028,
		icon: haven2,
	},
	{
		name: 'Tech Red Wings',
		price: 12.3,
		num: 212,
		eth: 0.028,
		icon: haven3,
	},
	{
		name: 'The Vile Consortium',
		price: 12.3,
		num: 212,
		eth: 0.028,
		icon: haven4,
	},
	{
		name: 'Mechanical Cult',
		price: 12.3,
		num: 212,
		eth: 0.028,
		icon: haven5,
	},
	{
		name: 'Plague Devotees',
		price: 12.3,
		num: 212,
		eth: 0.028,
		icon: haven6,
	},
	{
		name: 'Eyes of Trade',
		price: 12.3,
		num: 212,
		eth: 0.028,
		icon: haven7,
	},
	{
		name: 'Child of the Future',
		price: 12.3,
		num: 212,
		eth: 0.028,
		icon: haven8,
	},
]);
</script>

<style lang="scss" scoped>
.profile-wrapper {
	width: 60%;
	margin: auto;
	color: var(--next-color-white);
	.base-info-wrapper {
		display: flex;
		align-items: center;
		.info-wrapper {
			.des {
				color: var(--next-color-grey-1);
			}
		}
	}
	.nft-list-wrapper {
		display: grid;
		grid-template-columns: repeat(4, auto);
		column-gap: 20px;
		row-gap: 20px;
	}
	.table-wrapper {
		border-radius: 20px;
	}
	:deep(.el-tabs__item) {
		font-size: 26px;
		height: 56px;
		line-height: 56px;
	}
}
</style>
