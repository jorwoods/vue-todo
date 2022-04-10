<template>
  <div class=task-list>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <h3>{{ task.subject }}</h3>
        <p></p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { PropType, computed } from "vue"
import TaskItem from '@/types/TaskItem'

export default {
  props: {
    tasks: {
      required: true,
      type: Array as PropType<TaskItem[]>,
    },
  },
  setup() {

    const today = new Date()

    return  { today }
  },
}
</script>

<style>

</style>
