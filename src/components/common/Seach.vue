<template>
  <div class="index_seach">
    <div class="song"></div>
    <div class="seach">
        <input type="text" :placeholder="msg">
    </div>
    <div class="bofang">播放</div>
  </div>
</template>

<script>
export default {
  name: 'seach',
  data () {
    return {
      msg: '搜索.音乐.歌词.视频.电台'
    }
  }
}
</script>

<style scoped>

</style>
