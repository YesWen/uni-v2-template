// 挂载变量
import { API_URL, IMG_URL } from "../env.js";
import http from "./request/index";
import { router } from "./router/index";
import store from "../store/index";

const checkMiniProgramUpdate = () => {
    if (uni.canIUse("getUpdateManager")) {
        const updateManager = uni.getUpdateManager();
        updateManager.onCheckForUpdate(function (res) {
            // 请求完新版本信息的回调
            if (res.hasUpdate) {
                updateManager.onUpdateReady(function () {
                    uni.showModal({
                        title: "更新提示",
                        content: "新版本已经准备好，是否重启应用？",
                        success: function (res) {
                            if (res.confirm) {
                                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                                updateManager.applyUpdate();
                            }
                        },
                    });
                });
                updateManager.onUpdateFailed(function () {
                    // 新的版本下载失败
                    uni.showModal({
                        title: "已经有新版本了哟~",
                        content: "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~",
                    });
                });
            }
        });
    }
};

const install = (Vue) => {
    Vue.prototype.$API_URL = API_URL;
    Vue.prototype.$IMG_URL = IMG_URL;
    // 挂载请求
    Vue.prototype.$http = http;

    Vue.prototype.toPage = function (path, parmas) {
        router.push({ path: path, query: parmas });
    };

    Vue.prototype.stopRequest = function (page) {
        let currentPages = getCurrentPages();
        let routes = currentPages[currentPages.length - 1].route;
        if (routes != page) return true;
    };
};

export async function init(options) {
    // await store.dispatch("login");
    // checkMiniProgramUpdate();
}

export default {
    install,
};
