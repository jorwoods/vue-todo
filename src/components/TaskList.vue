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
import { PropType, defineComponent, computed } from "vue"
import TaskItem from '@/types/TaskItem'

export default defineComponent ({
  props: {
    tasks: {
      required: true,
      type: Array as PropType<TaskItem[]>,
    },
  },
  setup(props) {

    const today = new Date()

    return  { today }
  },
})
</script>

<style scoped>
div.task-list{
  border: gray;
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
}
li{
  list-style-type: none;
}
</style>
