<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <TaskList />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TaskList from '@/components/TaskList.vue'
import TaskDetail from '@/components/TaskIDetail.vue'

import TaskItem from '@/types/TaskItem'


export default defineComponent({
  name: 'App',
  components: {
    TaskList
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
