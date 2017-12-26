<template>
    <div class="footer">
        <ul>
            <li v-for="item in list">
                <router-link :to="item.hash">
                    <dl>
                        <dt>
                            <i :class=" item.icon" class="icon iconfont "></i>
                        </dt>
                        <dd>{{item.name}}</dd>
                    </dl>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "footers",
  data() {
    return {
      list: [
        {
          name: "发现音乐",
          hash: "findMusic",
          icon: "icon-wangyiyunyinle"
        },
        {
          name: "我的音乐",
          hash: "mineMusic",
          icon: "icon-music"
        },
        {
          name: "朋友",
          hash: "friend",
          icon: "icon-19"
        },
        {
          name: "我的",
          hash: "user",
          icon: "icon-geren"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../../scss/mixin/mixin.scss";
.footer {
  width: 100%;
  position: fixed;
  height: 0.98rem;
  bottom: 0;
  left: 0;
  ul {
    display: flex;
    width: 100%;
    li {
      box-sizing: border-box;
      width: 25%;
      a {
        color: $themecolr;
      }
    }
  }
}
</style>

