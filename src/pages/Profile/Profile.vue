<template>
  <div>
    <div class="p-header"></div>
  </div>
</template>

<script>
  export default {
    mounted(){
      let meta = document.createElement("meta");
      meta.setAttribute("name",'viewport')
      meta.setAttribute("content",'width=device-width,initial-scale=1')
      document.head.appendChild(meta)
    },
    beforeDestroy(){
      let meta = document.createElement("meta");
      meta.setAttribute("name",'viewport')
      meta.setAttribute("content",'width=device-width,initial-scale=0.5')
      document.head.appendChild(meta)
    }
  }
</script>

<style lang="less" scoped>
  .p-header{
    height: 1.16rem;
    background-color: #fafafa;
  }
</style>
