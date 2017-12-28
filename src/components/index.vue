<template>
    <div class="index">
        <seach></seach>
        <div class="content">
            <ul>
                <li v-for="item in list">
                    <router-link :to="item.hash">{{item.name}}</router-link>
                </li>
                <router-view></router-view>
            </ul>
        </div>
        <Footers></Footers>
    </div>
</template>

<script>
import seach from "./common/Seach";
import Footers from "./common/Footer";

export default {
  name: "index",
  components: {
    seach,
    Footers
  },
  mounted(e) {
    this.$store.commit("getFooterState", 0);
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      list: [
        {
          name: "音乐",
          hash: "music"
        },
        {
          name: "视频",
          hash: "user"
        },
        {
          name: "电台",
          hash: "rdioStation"
        },
        {
          name: "榜单",
          hash: "rank"
        },
        {
          name: "音乐",
          hash: "music"
        },
        {
          name: "视频",
          hash: "user"
        },
        {
          name: "电台",
          hash: "rdioStation"
        },
        {
          name: "榜单",
          hash: "rank"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
@import '../scss/mixin/mixin.scss';
.index {
    @include flex;
  .content {
    flex: 1;
        -webkit-box-flex: 1;
    overflow-y: scroll;
    ul {
      li {
        margin: 250px;
      }
    }
  }
}
</style>
