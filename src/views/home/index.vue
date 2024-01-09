<template>
	<div class="home-container">
		<Main />
		<About />
		<Core />
		<Character style="margin-top: 100px" />
		<Road style="margin-top: 100px" />
		<Market />
	</div>
</template>

<script setup lang="ts" name="home">
import Main from './components/Main.vue';
import About from './components/About.vue';
import Core from './components/Core.vue';
import Character from './components/Character.vue';
import Market from './components/Market.vue';
import Road from './components/Road.vue';
</script>

<style scoped lang="scss">
.home-container {
	padding-bottom: 40px;
	font-family: Ops One;
}
</style>
