<template>
  <v-container>
      <Board />
      <AddTask class="my-3" />
  </v-container>
</template>

<script>
import Board from "@/components/Board";
import AddTask from "@/components/AddTask";
export default {
  name: 'AgileBoard',
  components: {
    Board,
    AddTask
  },
  methods: {
    
  },
  computed: {
  },
  data: () => ({
  }),
};
</script>
