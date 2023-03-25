<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import TodoItem from '@/components/TodoItem.vue'
import { reactive } from 'vue'
const items = reactive([
  {
    id:1,
    title:'Vue3学习',
    date:'2023-03-23',
    logo:'2.png',
    finished:true
  },
  {
    id:2,
    title:'Pinia学习',
    date:'2023-03-23',
    logo:'1.png',
    finished:false
  }
])
</script>

<template>
  <h2>首页</h2>
  <div class="layout">
    <div v-for="item in items" :key="item.id">
        <TodoItem :item="item"></TodoItem>
    </div>
  </div>
  <!-- <main>
    <TheWelcome />
  </main> -->
</template>
