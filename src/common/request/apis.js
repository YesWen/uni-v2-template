/**
 * 接口列表文件
 */
export default {
    /** 公共 ↓ **/
    common: {
        login: {
            url: "home/wxlogin",
            auth: false,
            method: "post",
            // desc: '初始化数据',end
        },
        list: {
            url: "api/goods/goodsList",
            method: "post",
        },
    },
};
