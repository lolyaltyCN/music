<template>
  <div class="index">
    <seach></seach>
    <div class="content">
      <ul class='nav_list'>
        <li v-for="item in navList">
          <router-link :to="item.hash">{{item.name}}</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
    <Footers :footer-list="footerList"></Footers>
  </div>
</template>

<script>
import seach from "./common/Seach";
import Footers from "./common/Footer";
import {mapGetters} from "vuex";

export default {
  name: "index",
  components: {
    seach,
    Footers
  },
  computed: {
    ...mapGetters(["footerList"]),
    ...mapGetters(["navList"])
  },
  created() {
    this.$store.commit("GET_FOOTER_LIST", 0);
    this.get();
    console.log(this.footerList)
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
      msg: "Welcome to Your Vue.js App"
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
    padding:  0.8rem 0 .98rem;
    position: relative;
    .nav_list {
      display: flex;
      width: 100%;
      border-bottom: 2px solid #ccc;
      height: 0.8rem;
      position: fixed;
      background: $whitecolor;
      top: .9rem;
      left: 0;
      z-index: 11;
      li {
        width: 33%;
        line-height: 0.8rem;
      }
    }
  }
}
</style>
