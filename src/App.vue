<template>
	<el-config-provider :locale="getGlobalI18n">
		<router-view />
	</el-config-provider>
</template>

<script setup lang="ts" name="app">
import { computed, onMounted, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';
import { useThemeConfig } from '/@/stores/themeConfig';
import { Local } from '/@/utils/storage';

// 定义变量内容
const { messages, locale } = useI18n();
const storesThemeConfig = useThemeConfig();

// 获取全局 i18n
const getGlobalI18n = computed(() => {
	return messages.value[locale.value];
});

// 页面加载时
onMounted(() => {
	nextTick(() => {
		const body = document.documentElement as HTMLElement;
		body.setAttribute('data-theme', 'dark');

		const themeConfig = Local.get('themeConfig');
		const themeConfigStyle = Local.get('themeConfigStyle');

		// 获取缓存中的布局配置
		if (themeConfig) {
			storesThemeConfig.setThemeConfig({ themeConfig });
			document.documentElement.style.cssText = themeConfigStyle;
		}
	});
});
</script>
