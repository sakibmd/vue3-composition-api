<template>
  <div>
    <hr>
    <h3>Count from team A: {{ myValue }}</h3>
    <button @click="incrementCounter">Increment 10</button>
    <button @click="decrementCounter">Decrement 10</button>
  </div>
</template>

<script>
import { useCounter } from "../composables/ClickCounter";
export default {
  name: "TeamA",
  setup() {
    let { myValue, incrementCounter, decrementCounter } = useCounter(0, 10);
    return {
      myValue,
      incrementCounter,
      decrementCounter,
    };
  },
};
</script>

<style></style>
