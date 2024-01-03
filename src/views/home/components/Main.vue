<template>
	<div class="home-main-wrapper">
		<img class="main-bg" :src="mainBg" />
		<img class="main-content" :src="mainStory" />
		<img class="main-play" :src="mainPlay" />
	</div>
</template>

<script setup lang="ts" name="HomeMain">
import mainBg from '../images/bg_main.png';
import mainStory from '../images/story.png';
import mainPlay from '../images/play.png';
</script>

<style lang="scss" scoped>
.home-main-wrapper {
	position: relative;
	.main-bg {
		width: 100%;
	}
	.main-content {
		position: absolute;
		width: 60%;
		top: 10%;
		left: 50%;
		transform: translateX(-50%);
	}
	.main-play {
		position: absolute;
		width: 15%;
		bottom: 10%;
		left: 50%;
		transform: translateX(-50%);
		cursor: pointer;
	}
}
</style>
