// 用户数据模块
import http from "@/common/request/index";

const state = {
    token: uni.getStorageSync("token") || "",
    userInfo: uni.getStorageSync("userInfo") || {}, // 用户信息
};

const getters = {
    token: (state) => state.token,
    userInfo: (state) => state.userInfo,
};

const actions = {
    login({ dispatch, commit, state }) {
        return new Promise(async (resolve, reject) => {
            http("common.login", { code: "1234", phone: "18894017224", distributor: " " }).then((res) => {
                if (res.code == 200) {
                    commit("SET_TOKEN", res.data.token);
                    dispatch("getDeviceList").then((res) => {
                        dispatch("getDeviceStatus");
                    });
                }
                resolve(res);
            });
        });
    },

    getUserInfo({ commit }, data) {
        http("common.userInfo").then((res) => {
            if (res.code == 200) {
                commit("userInfo", res.data);
            }
        });
    },
};

const mutations = {
    SET_TOKEN(state, payload) {
        state.token = payload;
        uni.setStorageSync("token", payload);
    },

    // 用户信息
    userInfo(state, data) {
        state.userInfo = data;
        uni.setStorageSync("userInfo", data);
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};
