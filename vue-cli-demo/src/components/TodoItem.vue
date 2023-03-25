<template>
    <RouterLink class="item-link" :to="{name:'item-details', params:{id: item.id}}">
    <div class="box box2" :class="item.finished ? 'finished': ''">
        <!-- <img :src="item.logo"> -->
        <img :src="logoPath"> 
        <div class="box1">
            <h2>{{item.title}}</h2>
            <p>{{item.date}}</p>
            <p>{{item.location}}</p>
            <p v-if="item.finished" class="finished">结束</p>
            <p v-else>进行中</p>
        </div>
    </div>
    </RouterLink>
</template>

<script setup>
import { ref, watchEffect } from "vue"

// import {reactive} from 'vue'
const props =defineProps({
    item:{
        type:Object,
        required:true,
    }
})

const logoPath=ref()

watchEffect(async()=>{
    logoPath.value =(
        await import(`../assets/${props.item.logo}`)
    ).default
})
// const item = reactive({
//     title:'Vue3学习',
//     date:'2023-03-24',
// })
</script>

<style scoped>
   .box{
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    box-shadow: 1px 1px 10px #333;
    margin-top: 0px;
    box-sizing: border-box;
    padding: 10px;
    margin: 20px;
    transition-duration: 300ms;
   }
   .box:hover{
    margin-top: -5px;
    transition-duration: 300ms;
    cursor: pointer;
   }
    img{
        width: 150px;
        height: 150px;
        margin-right: 20px;
    }
    /* .box2{
        flex-direction: column;
    } */

    .p1{
        filter: grayscale(100%);
        -webkit-filter: grayscale(100%)
    }
    .finished{
        filter: grayscale(100%);
	    -webkit-filter: grayscale(100%)
    }
</style>