<template>
  <button @click="deleteTodo">delete todo with id 1</button>
</template>
<script>
export default {
  name: "DeleteTodo",
  methods: {
    deleteTodo() {
      console.log("clicked on delete button");
      this.actions.deleteTodo({ id: 1 }); //change id and check
    }
  },
  props: ["actions", "counterValue", "title"],
  components: {},
  data: () => ({})
};
</script>