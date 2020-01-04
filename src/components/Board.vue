<template>
  <div>
    <h2>Kanban board</h2>
    <v-card class="row m-2">
      <BoardColumn
        v-for="column in taskStates"
        :key="column.id"
        :column="column"
        v-on:columnClicked="setActiveColumn($event)"
      />
    </v-card>
  </div>
</template>

<script>
import BoardColumn from "@/components/BoardColumn";
import sharedMixin from "@/mixins/sharedMixin";
export default {
  name: "Board",
  mixins: [sharedMixin],
  components: {
    BoardColumn
  }
};
</script>
