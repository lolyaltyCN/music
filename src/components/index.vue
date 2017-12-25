<template>
  <div class="index">
    <seach></seach>
    <ul>  
        <li v-for="item in list"><router-link :to="item.hash">{{item.name}}</router-link></li>
        <router-view></router-view>
    </ul>
    <Footers></Footers>
  </div>
</template>

<script>
import seach from './common/Seach';
import Footers from './common/Footer';
export default {
  name: 'index',
  components:{
      seach,
      Footers
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[
          {
              name:'音乐',
              hash:'music'
          },
          {
              name:'视频',
              hash:'user'
          },
          {
              name:'电台',
              hash:'rdioStation'
          },
          {
              name:'榜单',
              hash:'rank'
          },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
