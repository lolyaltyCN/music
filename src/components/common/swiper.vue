<template>
<swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide  v-for='item in bannerList' :key='item.id'> <img :src="item.pic" > </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { mapGetters } from "vuex";

export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        direction: "horizontal",
        loop: true,
        autoplay: {
          delay: 3000
        },
        setWrapperSize: true,
        autoHeight: true,
         pagination: {
          el: ".swiper-pagination"
        }, 
        paginationType: "bullets",
        mousewheelControl: true,
        observeParents: true,
        // swiper callbacks
        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        onTransitionStart(swiper) {
          console.log(swiper);
        }
      }
    };
  },
  created() {
    
  },
  // you can find current swiper instance object like this, while the notNextTick property value must be true
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  computed: {
    ...mapGetters(["bannerList"]),
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // you can use current swiper instance object to do something(swiper methods)
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log("this is current swiper instance object", this.swiper);.init();
    this.swiper.init();
    console.log(1)
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang="scss">

</style>
