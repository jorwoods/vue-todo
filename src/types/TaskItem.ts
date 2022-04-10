type TaskItem = {
  id: string,
  subject: string,
  description: string,
  stakeholders: string[],
  startDate: Date,
  dueDate: Date,
  endDate: Date | null,
  tags: string[],
}

export default TaskItem
