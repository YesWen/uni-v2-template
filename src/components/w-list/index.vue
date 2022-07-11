<template>
    <div class="wrap">
        <div v-if="list.length > 0">
            <div class="list" v-for="(item, index) in list" :key="index" @tap="handleClick(item, index)">
                <slot name="item" :items="item"></slot>
            </div>
            <u-loadmore :status="status" icon-type="flower" color="#ccc" />
        </div>
        <w-empty v-else></w-empty>
    </div>
</template>

<script>
export default {
    props: {
        status: String,
        list: {
            type: Array,
            default: () => [],
        },
    },

    methods: {
        handleClick(item, index) {
            this.$emit("click", item, index);
        },
    },
};
</script>

<style lang="scss" scoped>
.list {
    padding: 20rpx;
}
</style>
