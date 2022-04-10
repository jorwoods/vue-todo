<template>
  <div class=task-list>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <SingleTaskSummary :task="task" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent, computed } from "vue"
import TaskItem from '@/types/TaskItem'
import SingleTaskSummary from '@/components/SingleTaskSummary.vue'

export default defineComponent ({
  props: {
    tasks: {
      required: true,
      type: Array as PropType<TaskItem[]>,
    },
  },
  components: { SingleTaskSummary },
  setup(props) {

    const today = new Date()

    return  { today }
  },
})
</script>

<style scoped>
div.task-list{
  text-align: center;
}
li{
  list-style: none;
}

</style>
