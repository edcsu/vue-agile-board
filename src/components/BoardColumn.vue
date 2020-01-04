<template>
  <v-card class="col-lg-3 m-2" @click="activateColumn(column.id)">
    <v-card-title
      :class="{ success: column.name === 'Done', info: column.name === 'Todo' }"
      v-text="column.name"
    ></v-card-title>
    <Task
      v-for="task in column.tasks"
      :task="task"
      :key="task.id"
      :columnId="column.id"
    />
  </v-card>
</template>

<script>
import Task from "@/components/Task";
export default {
  name: "BoardColumn",
  components: {
    Task
  },
  props: {
    column: {
      type: Object,
      required: true
    }
  },
  methods: {
    activateColumn(columnID) {
      this.$emit("columnClicked", columnID);
    }
  }
};
</script>

<style>
 .digital {
   color: blue;
 }
</style>
