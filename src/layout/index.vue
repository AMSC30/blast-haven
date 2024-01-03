<template>
	<el-container class="layout-container flex-center layout-backtop">
		<el-header class="layout-header" v-show="!isTagsViewCurrenFull">
			<div class="layout-navbars-container">
				<Header />
			</div>
		</el-header>
		<LayoutMain ref="layoutMainRef" />
	</el-container>
</template>

<script setup lang="ts" name="layout">
import { onBeforeMount, onUnmounted } from 'vue';
import { useThemeConfig } from '/@/stores/themeConfig';
import { Local } from '/@/utils/storage';
import mittBus from '/@/utils/mitt';
import { defineAsyncComponent, ref, watch, nextTick, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useTagsViewRoutes } from '/@/stores/tagsViewRoutes';
import Header from '/@/layout/component/Header.vue';

// 窗口大小改变时(适配移动端)
const onLayoutResize = () => {
	if (!Local.get('oldLayout')) Local.set('oldLayout', themeConfig.value.layout);
	const clientWidth = document.body.clientWidth;
	if (clientWidth < 1000) {
		themeConfig.value.isCollapse = false;
		mittBus.emit('layoutMobileResize', {
			layout: 'defaults',
			clientWidth,
		});
	} else {
		mittBus.emit('layoutMobileResize', {
			layout: Local.get('oldLayout') ? Local.get('oldLayout') : themeConfig.value.layout,
			clientWidth,
		});
	}
};
// 页面加载前
onBeforeMount(() => {
	onLayoutResize();
	window.addEventListener('resize', onLayoutResize);
});
// 页面卸载时
onUnmounted(() => {
	window.removeEventListener('resize', onLayoutResize);
});

const LayoutMain = defineAsyncComponent(() => import('/@/layout/component/main.vue'));
// 定义变量内容
const storesTagsViewRoutes = useTagsViewRoutes();
const { isTagsViewCurrenFull } = storeToRefs(storesTagsViewRoutes);
// 定义变量内容
const layoutMainRef = ref<InstanceType<typeof LayoutMain>>();
const storesThemeConfig = useThemeConfig();
const { themeConfig } = storeToRefs(storesThemeConfig);
const route = useRoute();

// 重置滚动条高度，更新子级 scrollbar
const updateScrollbar = () => {
	layoutMainRef.value!.layoutMainScrollbarRef.update();
};
// 重置滚动条高度，由于组件是异步引入的
const initScrollBarHeight = () => {
	nextTick(() => {
		setTimeout(() => {
			updateScrollbar();
			layoutMainRef.value!.layoutMainScrollbarRef.wrapRef.scrollTop = 0;
		}, 500);
	});
};
// 页面加载时
onMounted(() => {
	initScrollBarHeight();
});
// 监听路由的变化，切换界面时，滚动条置顶
watch(
	() => route.path,
	() => {
		initScrollBarHeight();
	}
);
// 监听 themeConfig 配置文件的变化，更新菜单 el-scrollbar 的高度
watch(
	() => themeConfig.value.isTagsview,
	() => {
		nextTick(() => {
			updateScrollbar();
		});
	},
	{
		deep: true,
	}
);
</script>
<style scoped lang="scss">
.layout-navbars-container {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
}
</style>
