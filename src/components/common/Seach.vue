<template>
    <div class="index_seach">
        <div class="song">
            <i class="icon iconfont icon-huatong"></i>
        </div>
        <div class="seach">
            <input type="text" :placeholder="msg">
        </div>
        <div class="bofang"><i class="icon iconfont icon-rank"></i></div>
    </div>
</template>

<script>
export default {
  name: "seach",
  data() {
    return {
      msg: "搜索.音乐.歌词.视频.电台"
    };
  }
};
</script>

<style  lang="scss">
@import "../../scss/mixin/mixin.scss";
.index_seach {
  background: $themecolor;
  display: flex;
  height: 0.9rem;
  flex: 0 0 0.9rem;
  width: 100%;
  padding: 0 0.1rem;
  .song {
    width: 0.9rem;
    height: 0.9rem;
    i {
      font-size: 0.47rem;
      line-height: 0.9rem;
    }
  }
  .seach {
    flex: 1;
    input {
      width: 100%;
      height: 0.6rem;
      @include radius(50px);
      @include linecenter;
      padding-left: .8rem;
      ::-webkit-input-placeholder{
          color: #BFBFBF;
          font-size: $size25;
      }
    }
  }
  .bofang{
      @extend .song;
  }
}
</style>