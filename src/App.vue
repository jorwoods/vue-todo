<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <TaskList :tasks="tasks"/>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import TaskList from '@/components/TaskList.vue'
import loadTasks from "@/func/getTasks"
// import TaskDetail from '@/components/TaskIDetail.vue'

import TaskItem from '@/types/TaskItem'


export default defineComponent({
  name: 'App',
  components: {
    TaskList
  },
  setup() {

    const { tasks, error, load } = loadTasks()

    load()

    return { tasks, error }
  },
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
