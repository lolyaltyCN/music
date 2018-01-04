<template>
  <div class='index_cont'>
    <swiper class='banner'></swiper>
    <div class="index_kind">
      <dl>
        <dt>
          <i class='icon iconfont icon-fm'></i>
        </dt>
        <dd>私人FM</dd>
      </dl>
      <dl>
        <dt>
          <i class='icon iconfont icon-rili'></i>
        </dt>
        <dd>每日推荐</dd>
      </dl>
      <dl>
        <dt>
          <i class='icon iconfont icon-gedan'></i>
        </dt>
        <dd>歌单</dd>
      </dl>
      <dl>
        <dt>
          <i class='icon iconfont icon-rank'></i>
        </dt>
        <dd>排行榜</dd>
      </dl>
    </div>
    <!-- 推荐歌单 -->
    <div class="index_Recommend_song">
      <p class="index_titel">推荐歌单&nbsp;></p>
      <div class="Recommend_song_content">
        <router-link :to="{ name: 'album', params: { id: item.id }}" v-for='(item,index) in personalizedList.slice(0,6)' :key='index'>
        <dl  :id='item.id'>
          <dt>
            <img :src="item.picUrl">
            <span>{{item.playCount | thousands}}</span>
          </dt>
          <dd>{{item.name}}</dd>
        </dl>
        </router-link>
      </div>
    </div>
    <!-- 推荐mv -->
    <div class="index_Recommend_mv">
      <p class="index_titel">推荐MV&nbsp;></p>
      <div class="Recommend_mv_content">
        <dl v-for='item in personalizedMvList' :id='item.id'>
          <dt>
            <img :src="item.picUrl">
            <span>{{item.playCount| thousands}}</span>
          </dt>
          <dd>{{item.name}}</dd>
          <dd v-for='obj in item.artists' class='recommend_mv_name'>{{obj.name}}/</dd>
        </dl>
      </div>
    </div>
    <!-- 推荐新音乐 -->
    <div class="index_Recommend_music">
      <p class="index_titel">最新音乐&nbsp;></p>
      <div class="Recommend_mv_content">
        <a :href="`/playlist/`+item.id" v-for='item in personalizedMusicList'>
        <dl  :id='item.id'>
          <dt>
            <img :src="item.song.album.picUrl">
          </dt>
          <dd>{{item.name}}</dd>
          <dd v-for='obj in item.song.artists.slice(0,2)' class='recommend_mv_name'>{{obj.name}}/</dd>
        </dl>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from "./common/swiper";
import { mapGetters } from "vuex";
require("swiper/dist/css/swiper.css");

export default {
  name: "music",
  components: {
    swiper
  },
  computed: {
    ...mapGetters(["bannerList"]),
    ...mapGetters(["personalizedList"]),
    ...mapGetters(["personalizedMvList"]),
    ...mapGetters(["personalizedMusicList"])
  },
  created() {
    this.get();
    this.$store.dispatch("getbanner");
    this.$store.dispatch("getpersonalized");
    this.$store.dispatch("getpersonalizedMv");
    this.$store.dispatch("getpersonalizedMusic");
  },
  methods: {
    get() {}
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
@import "../scss/mixin/mixin.scss";

.index_cont {
  .banner {
    height: 2.92rem;
    img {
      width: 100%;
    }
  }
  .index_kind {
    display: flex;
    padding: 0.35rem 0;
    border-bottom: 1px solid $bordercolor;
    dl {
      width: 25%;
      dt {
        width: 1rem;
        height: 1rem;
        border: 3px solid $themecolor;
        @include radius();
        margin: 0 auto;
        i {
          color: $themecolor;
          line-height: 1rem;
          font-size: 0.49rem;
        }
      }
      dd {
        margin-top: 0.15rem;
        color: $fontclolr;
        font-size: $size23;
      }
    }
  }
  .index_titel {
    height: 1rem;
    color: #313234;
    font-size: $size32;
    line-height: 1rem;
    text-align: left;
    vertical-align: center;
    &:before {
      content: "";
      background: #7682fa;
      width: 4px;
      height: 0.33rem;
      display: inline-block;
      vertical-align: center;
      margin-right: 0.22rem;
      position: relative;
      top: 5px;
    }
  }
  span {
    position: absolute;
    top: 0.08rem;
    right: 0.1rem;
    color: $whitecolor;
    @include size(19);
    padding-left: .22rem;
    background-repeat: no-repeat;
    @include listen();
  }
  .index_Recommend_song {
    .Recommend_song_content {
      display: flex;
      flex-wrap: wrap;
      dl {
        width: 2.44rem;
        margin: 0 6px 0.42rem 0;
        dt {
          width: 100%;
          height: 2.46rem;
          position: relative;
          img {
            width: 100%;
            height: 100%;
            display: block;
          }
        }
        dd {
          font-size: $size25;
          margin-top: 0.17rem;
          line-height: 0.31rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          color: #2c2d2f;
        }
      }
    }
  }
  .Recommend_mv_content {
    display: flex;
    flex-wrap: wrap;
    dl {
      width: 3.52rem;
      margin: 0 6px 0.42rem 0;
      text-align: left;
      dt {
        width: 100%;
        height: 2.05rem;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
      dd {
        @include size(35);
        margin-top: 0.17rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #2e2e30;
      }
      .recommend_mv_name {
        color: #8c8d8f;
        display: inline;
        @include size(27);
      }
    }
  }
  .index_Recommend_music {
    dl {
      dt {
        height: 3.05rem;
      }
    }
  }
}
</style>
