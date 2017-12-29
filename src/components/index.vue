<template>
    <div class="index">
        <seach></seach>
        <div class="content">
            <ul class='nav_list'>
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
import api from "../api/index";

export default {
  name: "index",
  components: {
    seach,
    Footers
  },
  mounted(e) {
    this.$store.commit("getFooterState", 0);
  },
  created() {
    this.get();
  },
  methods: {
    get() {
      /* this.$http
        .get("./banner")
        .then(
          response => {
            console.log(response);
            console.log(this);
          },
          response => {
            // error callback
            console.log(response);
          }
        ); */
    }
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      list: this.$store.state.indexList
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
@import "../scss/mixin/mixin.scss";
.index {
  @include flex;
  .content {
    flex: 1;
    -webkit-box-flex: 1;
    overflow-y: scroll;
    .nav_list {
      display: flex;
      width: 100%;
      border-bottom: 2px solid #ccc;
      height: 0.8rem;
      li {
        width: 33%;
        line-height: .8rem;
      }
    }
  }
}
</style>
