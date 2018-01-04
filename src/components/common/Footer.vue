<template>
  <div class="footer">
    <ul>
      <li v-for="item in footerList">
        <router-link :to="item.hash">
          <dl v-bind:class="{active:item.select}">
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
  props: {
    footerList: Array
  },
  created() {
    this.get();
  },
  methods: {
    get() {
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "../../scss/mixin/mixin.scss";
.footer {
  width: 100%;
  height: 0.98rem;
  position: fixed;
  bottom: 0;
  background: #333333;
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
        color: $greencolor;
        i {
          color: $greencolor;
        }
      }
    }
  }
}
</style>

