<template>
  <div>
    <h3>Count from team B: {{ myValue }}</h3>
    <button @click="incrementCounter">Increment 20</button>
    <button @click="decrementCounter">Decrement 20</button>
  </div>
</template>

<script>
import { useCounter } from "../composables/ClickCounter";
export default {
  name: "TeamB",
  setup() {
    let { myValue, incrementCounter, decrementCounter } = useCounter(0, 20);
    return {
      myValue,
      incrementCounter,
      decrementCounter,
    };
  },
};
</script>

<style></style>
