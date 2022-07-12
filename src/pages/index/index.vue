<template>
    <div class="page">
        <w-navbar :background="{ backgroundColor: '#f4f4f4' }">
            <view slot="content">
                <div class="w-full u-font-30 flex items-center justify-center">订单支付</div>
            </view>
        </w-navbar>

        <!-- <w-navbar :background="{ backgroundColor: '#f4f4f4' }"  backText="首页"> </w-navbar> -->

        <div class="bg-[#000] w-[50rpx] h-[50rpx] ml-[50rpx] mt-[100rpx]" @tap="toPage('/pages/test/index')"></div>

        <w-list :list="goods_list" :status="status" @click="handle">
            <template #item="{items}">
                <div class="flex h-[100rpx] justify-between">
                    <image class="w-[50rpx] h-[50rpx]" :src="items.company_image" mode="" />
                    <div>{{ items.company_name }}</div>
                </div>
            </template>
        </w-list>

        <u-tabbar :fixed="true" :placeholder="false" :safeAreaInsetBottom="false">
            <u-tabbar-item text="首页" icon="home"></u-tabbar-item>
            <!-- <u-tabbar-item text="放映厅" icon="photo"></u-tabbar-item> -->
            <!-- <u-tabbar-item text="直播" icon="play-right"></u-tabbar-item> -->
            <u-tabbar-item text="我的" icon="account"></u-tabbar-item>
        </u-tabbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            goods_list: [],
            status: "nomore",
        };
    },
    onLoad() {
        this.getList();
    },
    onReachBottom() {},
    onPullDownRefresh() {},
    methods: {
        handle(item, index) {
            console.log(item, index);
        },
        async getList() {
            let res = await this.$http("common.list", {
                goods_category_id: "0",
                page: this.page,
                pagesize: 10,
            });
            uni.stopPullDownRefresh();
            if (res.code == 1) {
                this.goods_list = [...this.goods_list, ...res.data.data];
            }
        },
    },
};
</script>

<style lang="scss" scoped></style>
