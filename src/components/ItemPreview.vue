<template>
    <div class="item-container flex column">
        <h1 class="item-title">{{item.Title}}</h1>
        <div class="img-container flex">
            <div class="item-img" :style="{backgroundImage: `url(${this.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundrepeat: 'no-repeat'}"/>
            <!-- <img class="item-img" :src="item.Poster" alt=""/> -->
        </div>
        <div class="item-text-container flex column">
            <p class="item-sub-title">{{item.Type}}</p>
            <p class="item-text">{{item.Year}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ItemPreview",
    props: ["item"],
    data() {
        return {
            src: ''
        }
    },
    created() {
        this.src = this.item.Poster;
    },
}
</script>

<style lang="scss">
@import "../assets/scss/style.scss";

.item-container {
    background-color: #e7e1e1;
    border: 1px solid #e7e1e1;
    width: 200px;
    height: 350px;
    justify-content: space-between;
    margin: 20px;
    padding: 10px;
    box-shadow: 10px 3px 7px 1px rgba(98, 98, 132, 0.5);
}

.item-title {
    font-size: 19px;
    height: 45px;
}
.img-container {
    height: 200px;
}
.item-img {
    width: 120px;
    margin: auto;
    height: 100%;
}
.item-text-container {
    justify-content: space-between;
}
</style>
