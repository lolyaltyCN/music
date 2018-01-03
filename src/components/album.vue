<template>
<div>
<p>这是专辑页</p>
  <h1>{{ id}}</h1>
</div>
  
</template>

<script>
export default {
  name: "playlist",
  data() {
    return {
      id: ''
    }
  },
  created(){
    this.id = this.$route.params.id
  }
};
</script>

<style>

</style>
