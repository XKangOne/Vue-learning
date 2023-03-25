<template>
    <div class="layout">
        <div v-for="item in items" :key="item.id">
            <TodoItem :item="item"/>
        </div>
    </div>
</template>

<script setup>
import TodoItem from '@/components/TodoItem.vue'
import ItemService from '@/services/ItemService.js'

import{ref,onMounted} from 'vue'

const items = ref(null)
onMounted(()=>{
    ItemService.getTodoItems()
        .then((res)=>{
            items.value=res.data
        })
        .catch((error)=>{
            console.log(error)
        })
})
</script>

<style scoped>
    div{
        display: flex;
        flex-direction: wrap;
    }
</style>