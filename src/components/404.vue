<template>
  <div class="wrap404">
    <h1>啊哦!你所访问的页面不存!</h1>
    <div class="banner"><img src="../assets/img/fuel-404-logo.png" alt="" /></div>
    <div class="goback">
      <a href="/">返回首页</a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang='scss'>
.wrap404 {
  background: #42b983;
  width: 100%;
  height: 100%;
  h1 {
    color: #fff;
    font-size: 0.4rem;
    padding: 40px 0;
  }
  .banner {
    margin: 0 auto;
    img {
      width: 5rem;
      height: 3rem;
    }
  }
  .goback {
    margin-top: 1.3rem;
    a {
      background: url(../assets/img/sub-bttn.png) no-repeat;
      background-size: contain;
      width: 268px;
      height: 100px;
      border: none;
      color: #fff;
      font-size: 30px;
      display: block;
      line-height: 100px;
      margin: 0 auto;
    }
  }
}
</style>
