<template>
    <div class="user">
        <header>
            {{msg}}
            <div class="song">
                <i class="icon iconfont icon-rank"></i>
            </div>
        </header>
        <die class="content">
            <h1>User page</h1>
            <p>{{msg}}</p>
            <code>
                alert(javascript('ss'));
            </code>
        </die>
        <Footers></Footers>
    </div>
</template>

<script>
import Footers from "./common/Footer";

export default {
  name: "User",
  components: {
    Footers
  },
  mounted(e) {
    this.$store.commit("getFooterState", 3);
  },
  data() {
    return {
      msg: "账号"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
@import "../scss/mixin/mixin.scss";
.user {
  @include flex;
  header {
    background: $themecolor;
    text-align: center;
    height: 0.9rem;
    padding: 0 0.1rem;
    position: fixed;
    width: 100%;
    text-align: center;
    color: $whitecolor;
    line-height: 0.9rem;
    .song {
      width: 0.9rem;
      height: 0.9rem;
      position: absolute;
      top: 0;
      right: 0;
      i {
        font-size: 0.47rem;
        line-height: 0.9rem;
      }
    }
  }
  .content {
    margin-top: 0.9rem;
    flex: 1;
  }
}
</style>
