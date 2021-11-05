<template>
  <div>
      <hr>
      <h2>Procedure 3 | Reactive data access from another file</h2>
      <h4>Favorite Food: {{favFood}}</h4>
      <h4>Favorite Person: {{favPerson}}</h4>
  </div>
</template>

<script>
import { storedData } from "../store";
export default {
  setup() {
    let { favFood, favPerson } = storedData();

    return {
      favFood,
      favPerson,
    };
  },
};
</script>

<style></style>
