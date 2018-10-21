<template>
 <div class="items-container">
    <table>
      <tr>
        <th>user</th>
        <th>name</th>
        <th>city</th>
        <th>activity</th>
      </tr>
      <tr v-for="(item, idx) in items" class="item-list" :key="idx">
        <td width="30%" class="img-container"><img class="item-img" width=100 :src="`img/user${idx+1}.png`" alt=""/></td>
        <td>{{item.name}}</td>
        <td>{{item.city}} </td>
        <td>{{item.active? 'Active': 'Non-Active' }}</td>
        <td><button @click="deleteUser(idx)" key="idx" class="btn delete-btn">Delete</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import ItemPreview from '@/components/ItemPreview.vue';
import ItemsImgs from '@/components/ItemsImgs.vue';
import ItemService from '@/services/ItemService.js';

export default {
  name: 'itemsList',
  components: {
    ItemPreview,
    ItemsImgs
  },
  data() {
    return {
      // items: []
      items: ItemService.getItems()
    }
  },
  
  methods: {
        deleteUser(idx) {
            console.log('idx');
            ItemService.deleteUser(idx);
        }
    }
}
</script>

<style lang="scss">
@import "../assets/scss/style.scss";

.items-container {
  margin-top: 130px;
  background-color: white;
}

.items-list {
  flex-wrap: wrap;
  justify-content: center;
}
th {
  width: 100%;
  text-transform: uppercase;
}
td {
 cursor: pointer; 
}
td:hover {
  opacity: 0.8;
}
td, th {
  text-align: left;
  padding: 8px;
}
.item-img {
  width: 50px;
  height: 50px;
}
.img-container {
  width: 30%;
  display: block;
}
img {
  margin: 0;
}
</style>
