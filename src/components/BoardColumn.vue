<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }"> 
      <v-card class="col-lg-3 col-md-6 m-2 board-column" v-on="on" @click="activateColumn(column.id)">
      <v-card-title
        :class="{  success: column.name === 'Done', warning: column.name === 'Testing', info: column.name === 'InProgress', error: column.name === 'Todo' }"
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
    Click to activate column to add a task to
  </v-tooltip>
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
  .board-column {
    margin-bottom: 2rem;
  }
</style>
