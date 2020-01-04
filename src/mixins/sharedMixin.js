import tasks from "@/seeddata/tasks";

export default {
  data() {
    return {
      taskStates: tasks
    };
  },
  methods: {
    setActiveColumn(columnID) {
      // set clicked column active and the rest deactivate 
      this.taskStates.map(column =>
        column.id === columnID
          ? (column.active = true)
          : (column.active = false)
      );
    },
    getActiveColumn() {
      // get the column that is active
      return this.taskStates.find(column => column.active === true);
    },
    addTask(taskTitle) {
      // get the tasksArray in the active column to be add a new task to it
      const tasksToBeAddedTo = this.getActiveColumn().tasks;
      tasksToBeAddedTo.push({
        id: tasksToBeAddedTo.length + 1,
        title: taskTitle,
        edit: false
      });
    },
    editTask(columnID, taskID) {
      // find the column where the task is located
      const columnIndex = this.taskStates.findIndex(
        column => column.id === columnID
      );
      // get the tasksArray in the column
      const tasksToBeEdited = this.taskStates[columnIndex].tasks;
      // find the index for the task to be edited
      const taskIndex = tasksToBeEdited.findIndex(task => task.id === taskID);
      // set the edit property to true for that task
      tasks[taskIndex].edit = true;
      // set edit property for other tasks to false
      tasksToBeEdited.map(task =>
        task.id === taskID ? (task.edit = true) : (task.edit = false)
      );
    },
    UpdateTask(columnID, taskID, newTitle) {
      // find the column where the task is located
      const column = this.taskStates.find(column => column.id === columnID);
      // find the index for the task to be updated
      const taskIndex = column.tasks.findIndex(task => task.id === taskID);
      // set title and edit properties for other tasks to false
      column.tasks[taskIndex].title = newTitle;
      column.tasks[taskIndex].edit = false;
    },
    deleteTask(columnID, taskID) {
      // find the column where the task is located
      const column = this.taskStates.find(column => column.id === columnID);
      // find the index for the task to be deleted
      const taskIndex = column.tasks.findIndex(task => task.id === taskID);
      // delete the task
      column.tasks.splice(taskIndex, 1);
    },
    cancelEdit(columnID, taskID) {
      const taskswithEditActiveTask = this.taskStates[columnID-1].tasks;
      // set the edit property to false for that task
      taskswithEditActiveTask[taskID-1].edit = false;
    },
  }
};
