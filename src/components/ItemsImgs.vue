<template>
    <div class="imgs-container">
      <v-carousel class="imgs-carousel" :style="{height: '400px', backgroundSize: cover, backgroundPosition: center}">
        <v-carousel-item
            v-for="item in items"
            :key="item.imdbID"
            :src="item.Poster"
            class="img-item"
        ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import ItemService from '@/services/ItemService.js';

export default {
name: 'imgs',
  props: ["items"],
}
</script>

<style>
.img-item {
    
}
.imgs-carousel {
    
}
</style>
