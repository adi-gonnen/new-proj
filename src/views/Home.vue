<template>
  <div class="home">
    <div class="header flex">  
      <h1>Hello</h1>
      </div>
    <ItemsList/>
  </div>
</template>

<script>
import ItemsList from '@/components/ItemsList.vue'

export default {
  name: 'home',
  components: {
    ItemsList
  }
}
</script>

<style lang="scss">
@import "../assets/scss/style.scss";

.home {
  font-family: 'Ubuntu', sans-serif;
}
.header {
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #d4c9ee;
  color: #4e4949;
  height: 80px;
  align-items: center;
  justify-content: center;
}
</style>