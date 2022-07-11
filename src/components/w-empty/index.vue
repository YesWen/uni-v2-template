<template>
    <view class="u-flex-col u-row-center u-col-center" :style="{ 'margin-top': marginTop }">
        <image class="empty-img" :src="image" mode="widthfix"></image>
        <view class="empty-text u-tips-color u-font-46" style="color: rgb(102, 148, 234);">{{ tipText }}</view>
        <view class="btn-box u-m-t-100" v-if="btnText">
            <button class="u-reset-button empty-btn" :style="customStyle" hover-class="none" @tap="onBtn">{{ btnText }}</button>
        </view>
    </view>
</template>

<script>
export default {
    props: {
        image: {
            type: [String, null],
            default: "/static/image/public/empty.png",
        },
        tipText: {
            type: String,
            default: "没有数据了~",
        },
        btnText: {
            type: String,
            default: "",
        },
        marginTop: {
            type: String,
            default: "200rpx",
        },
        customStyle: {
            type: Object,
            default: () => {
                return {
                    width: "200rpx",
                    height: "70rpx",
                    background: "linear-gradient(90deg, rgba(233, 180, 97, 1), rgba(238, 204, 137, 1))",
                    borderRradius: "35rpx",
                    fontSize: "28rpx",
                    color: "#fff",
                    border: 0,
                };
            },
        },
    },
    methods: {
        onBtn() {
            this.$emit("click");
        },
    },
};
</script>

<style lang="scss" scoped>
.empty-img {
    width: 360rpx;
    height: 360rpx;
    margin-bottom: 20rpx;
}
.empty-btn {
    width: 320rpx;
    height: 70rpx;
    line-height: 70rpx;
    background: linear-gradient(90deg, rgba(233, 180, 97, 1), rgba(238, 204, 137, 1));
    border-radius: 35rpx;
    font-size: 28rpx;
    color: rgba(#fff, 0.9);
}
</style>
