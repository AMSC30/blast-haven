<template>
	<div>
		<div class="market-wrapper">
			<NftItem v-for="(item, index) of havenList" :key="index" :data="item" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import haven1 from '/@/views/home/images/Blast_Haven_1.png';
import haven2 from '/@/views/home/images/Blast_Haven_2.png';
import haven3 from '/@/views/home/images/Blast_Haven_3.png';
import haven4 from '/@/views/home/images/Blast_Haven_4.png';
import haven5 from '/@/views/home/images/Blast_Haven_5.png';
import haven6 from '/@/views/home/images/Blast_Haven_6.png';
import haven7 from '/@/views/home/images/Blast_Haven_7.png';
import haven8 from '/@/views/home/images/Blast_Haven_8.png';
import NftItem from '/@/components/nft-item/index.vue';
// import { useRouter } from 'vue-router';

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
// const router = useRouter();
// const havenClick = () => {
// 	router.push({ path: '/market/detail' });
// };
</script>

<style lang="scss" scoped>
.market-wrapper {
	width: 80%;
	display: grid;
	grid-template-columns: repeat(4, auto);
	column-gap: 20px;
	row-gap: 20px;
	padding: 20px 0;
	margin: auto;
}
</style>
