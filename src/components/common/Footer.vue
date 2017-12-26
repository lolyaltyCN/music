<template>
    <div class="footer">
        <ul>
            <li v-for="item in list" >
                <router-link :to="item.hash">
                    <dl v-bind:class="{active:item.selsect}">
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
          icon: "icon-wangyiyunyinle",
          selsect:true
        },
        {
          name: "我的音乐",
          hash: "mineMusic",
          icon: "icon-music",
          selsect:false
        },
        {
          name: "朋友",
          hash: "friend",
          icon: "icon-19",
          selsect:false
        },
        {
          name: "我的",
          hash: "user",
          icon: "icon-geren",
          selsect:false
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
  background: rgba(0, 0, 0, 0.8);
  ul {
    display: flex;
    width: 100%;
    height: 100%;
    li {
      box-sizing: border-box;
      width: 25%;
      a {
        color: $whitecolor;
      }
      dl {
          color: #a9a9a9;
        dt {
          height: 0.71rem;
          i {
            font-size: 0.49rem;
            line-height: 0.71rem;
          }
        }
        dd {
          font-size: $size21;
        }
      }

      .active {
          color: $whitecolor;
      }
    }
  }
}
</style>

