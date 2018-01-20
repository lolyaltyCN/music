<template>
  <div class='detailplay'>
    <header>
      <div class="back">&lt;</div>
      <p>歌单</p>
      <div class="bofang">
        <i class="icon iconfont icon-rank"></i>
      </div>
    </header>
    <Footers :footer-list="footerList"></Footers>
  </div>

</template>

<script>
import Footers from "../components/common/Footer";
import { mapGetters } from "vuex";

export default {
  name: "playlist",
  data() {
    return {
      id: ""
    };
  },
  computed: {
    ...mapGetters(["footerList"]),
    ...mapGetters(["playlistDetail"])
  },
  created() {
    this.id = this.$route.params.id;
    console.log(this)
    // this.$store.dispatch("getplaylistDetail", this.id);
  },
  components: {
    Footers
  }
};
</script>

<style lang='scss'>
@import "../scss/mixin/mixin.scss";
.detailplay {
  header {
    display: flex;
    height: 0.9rem;
    background: $themecolor;
    .back {
      line-height: 0.9rem;
    }
    p {
      flex: 1;
      line-height: .9rem;
    }
    .bofang {
      @extend .song;
    }
  }
}
</style>
