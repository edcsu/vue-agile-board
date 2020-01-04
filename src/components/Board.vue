<template>
  <div class="row m-4">
      <BoardColumn
        v-for="column in taskStates"
        :key="column.id"
        :column="column"
        v-on:columnClicked="setActiveColumn($event)"
      />
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
