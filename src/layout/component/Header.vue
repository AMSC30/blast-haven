<template>
	<div class="layout-header-breadcrumb-index">
		<img :src="logoPng" class="layout-header-breadcrumb-index-logo" />
		<div class="nav-wrapper">
			<span class="normal-text">Home</span>
			<span class="normal-text">Core</span>
			<span class="normal-text">Role</span>
			<span class="normal-text">Roadmap</span>
			<span class="normal-text">Market</span>
		</div>
		<img :src="login" @click="toLogin" class="layout-header-breadcrumb-index-login" />
		<Login v-model="loginDialogShow" />
		<!-- 
		<el-dropdown :show-timeout="70" :hide-timeout="50" @command="onHandleCommandClick">
			<span class="layout-header-breadcrumb-user-link">
				{{ 'common' }}
			</span>
			<template #dropdown>
				<el-dropdown-menu>
					<el-dropdown-item command="/home">{{ $t('message.user.dropdown1') }}</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown> -->
	</div>
</template>

<script setup lang="ts" name="layoutBreadcrumbIndex">
import { reactive, onMounted, onUnmounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useRoutesList } from '/@/stores/routesList';
import { useThemeConfig } from '/@/stores/themeConfig';
import mittBus from '/@/utils/mitt';
import { useRouter } from 'vue-router';
// import { ElMessageBox } from 'element-plus';
import { useI18n } from 'vue-i18n';
import { Session, Local } from '/@/utils/storage';
import logoPng from '/@/views/home/images/logo_with_title.png';
import login from '/@/views/home/images/login.png';
import Login from '/@/components/login/index.vue';

const loginDialogShow = ref(false);
const toLogin = () => {
	loginDialogShow.value = true;
};

// 定义变量内容
const stores = useRoutesList();
const storesThemeConfig = useThemeConfig();
const { themeConfig } = storeToRefs(storesThemeConfig);
const { routesList } = storeToRefs(stores);
const route = useRoute();

// 定义变量内容
// const { t } = useI18n();
// const router = useRouter();
const state = reactive({
	menuList: [] as RouteItems,
	isScreenfull: false,
	disabledI18n: 'en',
	disabledSize: 'default',
});
// 设置/过滤路由（非静态路由/是否显示在菜单中）
const setFilterRoutes = () => {
	let { layout, isClassicSplitMenu } = themeConfig.value;
	if (layout === 'classic' && isClassicSplitMenu) {
		state.menuList = delClassicChildren(filterRoutesFun(routesList.value));
		const resData = setSendClassicChildren(route.path);
		mittBus.emit('setSendClassicChildren', resData);
	} else {
		state.menuList = filterRoutesFun(routesList.value);
	}
};
// 设置了分割菜单时，删除底下 children
const delClassicChildren = <T extends ChilType>(arr: T[]): T[] => {
	arr.map((v: T) => {
		if (v.children) delete v.children;
	});
	return arr;
};
// 路由过滤递归函数
const filterRoutesFun = <T extends RouteItem>(arr: T[]): T[] => {
	return arr
		.filter((item: T) => !item.meta?.isHide)
		.map((item: T) => {
			item = Object.assign({}, item);
			if (item.children) item.children = filterRoutesFun(item.children);
			return item;
		});
};
// 传送当前子级数据到菜单中
const setSendClassicChildren = (path: string) => {
	const currentPathSplit = path.split('/');
	let currentData: MittMenu = { children: [] };
	filterRoutesFun(routesList.value).map((v: RouteItem, k: number) => {
		if (v.path === `/${currentPathSplit[1]}`) {
			v['k'] = k;
			currentData['item'] = { ...v };
			currentData['children'] = [{ ...v }];
			if (v.children) currentData['children'] = v.children;
		}
	});
	return currentData;
};
// 页面加载时
onMounted(() => {
	setFilterRoutes();
	mittBus.on('getBreadcrumbIndexSetFilterRoutes', () => {
		setFilterRoutes();
	});
});
// 页面卸载时
onUnmounted(() => {
	mittBus.off('getBreadcrumbIndexSetFilterRoutes', () => {});
});

// 下拉菜单点击时
// const onHandleCommandClick = (path: string) => {
// 	if (path === 'logOut') {
// 		ElMessageBox({
// 			closeOnClickModal: false,
// 			closeOnPressEscape: false,
// 			title: t('message.user.logOutTitle'),
// 			message: t('message.user.logOutMessage'),
// 			showCancelButton: true,
// 			confirmButtonText: t('message.user.logOutConfirm'),
// 			cancelButtonText: t('message.user.logOutCancel'),
// 			buttonSize: 'default',
// 			beforeClose: (action, instance, done) => {
// 				if (action === 'confirm') {
// 					instance.confirmButtonLoading = true;
// 					instance.confirmButtonText = t('message.user.logOutExit');
// 					setTimeout(() => {
// 						done();
// 						setTimeout(() => {
// 							instance.confirmButtonLoading = false;
// 						}, 300);
// 					}, 700);
// 				} else {
// 					done();
// 				}
// 			},
// 		})
// 			.then(async () => {
// 				// 清除缓存/token等
// 				Session.clear();
// 				// 使用 reload 时，不需要调用 resetRoute() 重置路由
// 				window.location.reload();
// 			})
// 			.catch(() => {});
// 	} else if (path === 'wareHouse') {
// 		window.open('https://gitee.com/lyt-top/vue-next-admin');
// 	} else {
// 		router.push(path);
// 	}
// };

// 初始化组件大小/i18n
const initI18nOrSize = (value: string, attr: string) => {
	(<any>state)[attr] = Local.get('themeConfig')[value];
};
// 页面加载时
onMounted(() => {
	if (Local.get('themeConfig')) {
		initI18nOrSize('globalComponentSize', 'disabledSize');
		initI18nOrSize('globalI18n', 'disabledI18n');
	}
});
</script>

<style scoped lang="scss">
.layout-header-breadcrumb-index {
	height: 85px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: var(--next-bg-main-color);
	.nav-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 22px;
		.normal-text {
			color: var(--next-text-color-regular);
			padding: 0 16px;
		}
	}
	&-login {
		margin-left: 100px;
	}
	&-logo {
		margin-right: 48px;
	}
	&-link {
		height: 100%;
		display: flex;
		align-items: center;
		white-space: nowrap;
		margin-left: 50px;
	}

	:deep(.el-dropdown) {
		color: var(--next-bg-topBarColor);
	}
}
</style>
