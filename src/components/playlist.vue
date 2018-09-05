<template>
  <div class='detailplay'>
    <header>
      <div class="Background" v-bind:style="{backgroundImage: 'url('+playlistDetail.coverImgUrl+')'}"></div>
      <div class="top">
        <div class="back">&lt;</div>
        <p>歌单</p>
        <div class="bofang">
          <i class="icon iconfont icon-rank"></i>
        </div>
      </div>
      <div class="content" v-if="playlistDetail">
        <div class="cover">
          <img :src="playlistDetail.coverImgUrl">
          <span>{{playlistDetail.playCount | thousands}}</span>
          <!-- <i>专辑封面详情</i> -->
        </div>
        <div class="detail">
          <p>{{playlistDetail.name}}</p>
          <!-- <span class="name">{{playlistDetail.creator.nickname}}</span> -->
          <span class="name">{{playlistDetail.creator}}</span>
        </div>
        <div class="clear"></div>
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
    this.$store.dispatch("getplaylistDetail", this.id);
    this.$store.commit("GET_FOOTER_LIST", 0);
    console.log(this.playlistDetail.creator);
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
    height: 5.3rem;
    position: relative;
    padding: 0 .29rem;
    .Background {
      width: 100%;
      height: 100%;
      position: absolute;
      @include mohu(55);
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
      z-index: -1;
    }
    .top {
      display: flex;
      .back {
        line-height: 0.9rem;
      }
      p {
        flex: 1;
        line-height: 0.9rem;
      }
      .bofang {
        @extend .song;
      }
    }
    .content {
      padding-top: .42rem;
      .cover {
        width: 2.8rem;
        height: 2.8rem;
        position: relative;
        float: left;
        img {
          width: 100%;
          height: 100%;
        }
        span {
          padding-left: .22rem;
          font-size: .22rem;
          position: absolute;
          top: .08rem;
          right: .15rem;
          @include listen();
        }
      }
      .detail {
        float: left;
        width: 3.52rem;
        margin-left: .3rem;
      }
    }
  }
}
</style>
