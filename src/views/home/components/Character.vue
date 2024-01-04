<template>
	<div class="home-character-wrapper">
		<img class="w100" :src="characterLine" alt="" srcset="" />
		<div class="content-wrapper">
			<div class="content">
				In Blast Haven, you'll become a survivor in a wasteland world, exploring this ruined land. You can choose to join one of the following
				factions and embark on adventures alongside their respective leaders.
			</div>
			<div class="card-wrapper">
				<CharacterCardItem class="card" v-for="(item, index) of cardList" :key="index" :data="item"></CharacterCardItem>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="HomeCore">
import { ref } from 'vue';
import characterLine from '../images/character_line.png';
import Blast_Haven_1 from '../images/Blast_Haven_1.png';
import Blast_Haven_2 from '../images/Blast_Haven_2.png';
import Blast_Haven_3 from '../images/Blast_Haven_3.png';
// import Blast_Haven_4 from '../images/Blast_Haven_4.png';
// import Blast_Haven_5 from '../images/Blast_Haven_5.png';
// import Blast_Haven_6 from '../images/Blast_Haven_6.png';
// import Blast_Haven_7 from '../images/Blast_Haven_7.png';
// import Blast_Haven_8 from '../images/Blast_Haven_8.png';
import CharacterCardItem from './CharacterCardItem.vue';
const cardList = ref([
	{
		text: 'Desert Tempest',
		icon: Blast_Haven_1,
	},
	{
		text: 'Oasis Guardians',
		icon: Blast_Haven_2,
	},
	{
		text: 'Tech Red Wings',
		icon: Blast_Haven_3,
	},
]);
</script>

<style lang="scss" scoped>
.home-character-wrapper {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	.content-wrapper {
		width: 60%;
		margin-top: 40px;
		color: var(--next-color-white);
		padding: 60px;

		background: linear-gradient(180deg, rgba(229, 101, 96, 0.2118) 3%, #c73d38 98%);
		border-radius: 39px;
		opacity: 1;
		border: 1px solid;
		.content {
			padding: 0 40px 40px;
			line-height: 33px;
			text-align: center;
			font-weight: 600;
		}
		.card-wrapper {
			display: flex;
			align-items: stretch;
			.card {
				width: 32%;
				flex: 1;
				flex-shrink: 1;
				&:nth-child(2) {
					margin: 0 20px;
				}
			}
		}
	}
}
</style>
