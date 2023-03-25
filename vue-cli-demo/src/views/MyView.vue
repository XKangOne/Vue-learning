<template>
   <div class="big">
    <div class="box" v-for="item in items" :key="item.id">
        <TodoItem :item="item"></TodoItem>
    </div>
   </div>
</template>

<script setup>
import TodoItem from '@/components/TodoItem.vue'
import {reactive,onMounted} from 'vue'
import axios from 'axios'
// const items = reactive([
//     {
//         id:1,
//         title:'Vue3学习',
//         date:'2023-03-24',
//         logo:'/src/assets/2.png',
//         finished:true
//     },
//     {
//         id:2,
//         title:'Pinia学习',
//         date:'2023-03-24',
//         logo:'/src/assets/1.png',
//         finished:false
//     },
//     {
//         id:3,
//         title:'Ts学习',
//         date:'2023-03-24',
//         logo:'/src/assets/3.png',
//         finished:false
//     },
//     {
//         id:4,
//         title:'Vite学习',
//         date:'2023-03-24',
//         logo:'/src/assets/4.png',
//         finished:true
//     }
// ]
// )
const items =reactive([])

onMounted(()=>{
    axios.get('http://localhost:3000/items')
    .then((res)=>{
        console.log(res.data)
    })
    .catch((error)=>{
        console.log(error)
    })
})
</script>

<style  scoped>
.big{
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: row; */
}
   
</style>