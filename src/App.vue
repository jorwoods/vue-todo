<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <TaskList :tasks="tasks"/>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import TaskList from '@/components/TaskList.vue'
// import TaskDetail from '@/components/TaskIDetail.vue'

import TaskItem from '@/types/TaskItem'


export default defineComponent({
  name: 'App',
  components: {
    TaskList
  },
  setup() {

    let start = new Date('2022-04-01')
    let due = new Date('2022-05-31')

    const tasks = ref<TaskItem[]>([
      {
        id: "0",
        subject: "Build todo",
        description: "Build todo app in Vue",
        stakeholders: ["yourself"],
        startDate: start,
        dueDate: due,
        endDate: null,
        tags: ["vue"],
      }
    ])

    return { tasks }
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
