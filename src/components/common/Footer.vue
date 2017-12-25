<template>
  <div class="footer">
    <ul>
      <li v-for="item in list"><router-link :to="item.hash">{{item.name}}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      list: [
        {
              name:'发现音乐',
              hash:'findMusic'
          },
          {
              name:'我的音乐',
              hash:'mineMusic'
          },
          {
              name:'朋友',
              hash:'friend'
          },
          {
              name:'我的',
              hash:'user'
          }
      ]
    }
  }
}
</script>

<style>
  .foote{
    position: fixed;
  }
  ul{
      display: flex;
      height: .8rem ;
    }
</style>

