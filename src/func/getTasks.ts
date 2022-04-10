import { ref } from "vue"
import TaskItem from "@/types/TaskItem"

const loadTasks = () => {
  const tasks = ref<TaskItem[]>([])
  const error = ref<string | null>(null)
  const load = async () => {
    try {
      const data = await fetch("http://localhost:3000/tasks")
      if (!data.ok){
        throw Error("No data available")
      }

      tasks.value = await data.json()
    } catch (err: unknown) {
      if(err instanceof Error) {
        error.value = err.message
        console.log(err.message)
      }
    }
  }

  return { tasks, error, load }
}

export default loadTasks
