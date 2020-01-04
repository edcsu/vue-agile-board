<template>
  <v-card color="grey lighten-3" class="mx-auto my-3" minWidth="200px">
    <v-card-title class="headline" v-text="task.title"></v-card-title>
    <v-form ref="editTask" v-if="task.edit">
      <v-flex xs12 sm12 md10 class="mx-auto">
        <v-text-field
          outlined
          v-model="newTitle"
          :placeholder="task.title"
        ></v-text-field>
      </v-flex>
      <v-card-actions class="mx-4">
        <v-btn
          class="error mb-3"
          @click="cancelEdit(columnId, task.id)"
        >
          Cancel
        </v-btn>
        <v-btn
          class="success mb-3"
          @click="UpdateTask(columnId, task.id, newTitle)"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-form>
    <v-card-actions v-else class="mx-4">
      <v-btn color="info" @click.stop="editTask(columnId, task.id)">
        Edit
      </v-btn>
      <v-btn color="error" @click.stop="deleteTask(columnId, task.id)">
        Delete
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import sharedMixin from "@/mixins/sharedMixin";
export default {
  name: "Task",
  mixins: [sharedMixin],
  props: {
    task: {
      type: Object,
      required: true
    },
    columnId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      newTitle: ""
    };
  },
  methods: {}
};
</script>
