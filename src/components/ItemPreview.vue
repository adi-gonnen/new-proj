<template>
    <div class="item-container flex">
        <!-- <div class="img-container flex"> -->
            <!-- <div class="item-img" :style="{backgroundImage: `url(${this.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundrepeat: 'no-repeat'}"/> -->
            <img class="item-img" :src="src" alt=""/>
        <!-- </div> -->
        <p class="item-title">{{item.name}}</p>
        <!-- <div class="item-text-container flex column"> -->
            <p class="item-sub-title">{{item.city}}</p>
            <p class="item-text">{{item.active? 'Active': 'Non-Active' }}</p>
            <button @click="deleteUser(idx)" key="idx" class="btn delete-btn">Delete</button>
        <!-- </div> -->
    </div>
</template>

<script>
import ItemService from '@/services/ItemService.js';
export default {
    name: "ItemPreview",
    props: ["item", "idx"],
    data() {
        return {
            src: 'img/user1.png'
        }
    },
    created() {
        // this.src = 'this.item.Poster';
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

.item-container {
    background-color: #e7e1e1;
    border: 1px solid #e7e1e1;
    width: 90%;
    height: 50px;
    justify-content: space-between;
    margin: 20px;
    padding: 10px;
    box-shadow: 10px 3px 7px 1px rgba(98, 98, 132, 0.5);
}

.btn {
    background: blue;
    cursor: pointer;
    color: white;
    border-radius: 3px;
    padding: 5px;
}
.btn:hover {
    opacity: 0.8;
}
.item-title {
    // font-size: 19px;
    // height: 45px;
}
.img-container {
    // height: 200px;
}
.item-img {
    // width: 120px;
    // margin: auto;
    // height: 100%;
}
.item-text-container {
    // justify-content: space-between;
}
</style>
