<template>
 <div class="items-container">
   <ul class="items-list flex">
      <li v-for="item in items" class="item-list" :key="item.imdbID"> 
        <ItemPreview :item="item"/>
      </li>
    </ul>
    <!-- <ItemsImgs :items="items"/> -->
  </div>
</template>

<script>
import ItemPreview from '@/components/ItemPreview.vue';
import ItemsImgs from '@/components/ItemsImgs.vue';
import ItemService from '@/services/ItemService.js';

export default {
  name: 'Hello',
  components: {
    ItemPreview,
    ItemsImgs
  },
  data() {
    return {
      items: []
      // items: ItemService.getItems()
    }
  },
  created() {
    this.getItems();
  },
  methods: {
    getItems() {
      ItemService.loadItems()
        .then(res => {
          console.log('items in cmp:', res);          
            this.items = res;
        });
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/style.scss";

.items-container {
  margin-top: 130px;
}

.items-list {
  flex-wrap: wrap;
  justify-content: center;
}
</style>
