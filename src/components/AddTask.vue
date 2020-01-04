<template>
  <v-row justify="center">
    <v-form ref="newTask">
      <h2>New {{ getColumnTitle }}</h2>
      <v-flex xs12 sm12 md12>
        <v-text-field
          outlined
          placeholder="Add Task"
          v-model="taskTitle"
        ></v-text-field>
      </v-flex>
      <v-btn class="success" @click="callAddTask(taskTitle)">
        Save
      </v-btn>
    </v-form>
  </v-row>
</template>
<script>
import sharedMixin from "@/mixins/sharedMixin";
export default {
  name: "AddTask",
  mixins: [sharedMixin],
  computed: {
    getColumnTitle() {
      return this.getActiveColumn().name;
    }
  },
  data() {
    return {
      taskTitle: ""
    };
  },
  methods: {
    callAddTask(taskTitle) {
      this.addTask(taskTitle);
      this.taskTitle = "";
    }
  }
};
</script>
