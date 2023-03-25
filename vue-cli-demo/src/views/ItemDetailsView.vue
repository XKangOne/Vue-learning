<template>
<div v-if="item">
    <h1>{{item.title}}</h1>
    <p>{{item.date}}</p>
    <p>{{item.location}}</p>
</div>
</template>

<script setup>
import {ref,onMounted} from 'vue'
import ItemService from '@/services/ItemService.js'

const props = defineProps({
    id:{
        type:String,
        required:true
    }
})
let item = ref(null)

onMounted(()=>{
    console.log(props.id)
    ItemService.getItem(props.id)
        .then((res)=>{
            console.log(res.data)
            item.value=res.data
        })
        .catch((error)=>{
            console.log(error)
        })
})
</script>

<style lang="scss" scoped>

</style>