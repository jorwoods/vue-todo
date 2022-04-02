type TaskItem = {
  id: string,
  subject: string,
  description: string,
  customer: string,
  startDate: Date,
  dueDate: Date,
  endDate: Date,
  tags: string[],
}

export default TaskItem
