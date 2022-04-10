<template>
  <div class="task-summary">
    <h3> {{ task.subject }} </h3>
    <p class="snippet"> {{ snippet }} </p>
    <div class="tags">
      <span class="tag" v-for="tag in task.tags" :key="tag">
        #{{ tag }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import TaskItem from '@/types/TaskItem'
import { defineComponent, computed, PropType } from 'vue'

export default defineComponent({
  props: {
    task: {
      required: true,
      type: Object as PropType<TaskItem>
    }
  },
  setup(props) {
    const snippet = computed(() =>{
      let desc = props.task.description
      if(desc.length <= 100){
        return desc
      } else {
        return desc.substring(0, 100) + "..."
      }
    })

    return { snippet }
  },
})
</script>

<style>
div.task-summary {
  list-style-type: none;
  border: 1px solid black;
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
  border-color: gray;
  border-width: 2px;
}
span.tag {
  background-color: lightgray;
  padding: 4px;
  border-radius: 14px;
  color: lightslategray
}
</style>


