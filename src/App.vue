<script>
import { init } from "./common/index";
export default {
    onLaunch(options) {
        init(options);
    },
};
</script>

<style lang="scss">
/*每个页面公共css */
@import "tailwindcss/base";
@import "tailwindcss/utilities";
@import "static/style/index.scss";
</style>
