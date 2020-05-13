<template>
  <div>
    <h1>{{ title }}</h1>
    <div>{{counterValue }}</div>
    <br>
    <button @click="actions.increment()">increment</button>
    <button @click="actions.decrement()">decrement</button>
    <button @click="actions.reset()">reset</button>
    <br>
    <br>
    <br>
    <DeleteTodo :actions="actions" :counterValue="counterValue"/>
  </div>
</template>

<script>
import DeleteTodo from "./DeleteTodos.vue";

export default {
  props: ["actions", "counterValue", "title"],
  components: {
    DeleteTodo
  }
};
</script>
