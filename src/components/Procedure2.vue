<template>
  <div>
    <h2>Procedure 2 by using Reactive</h2>

    <div>Works At: {{ worksAt }}</div>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "@vue/reactivity";
//import {ref} from 'vue';
export default {
  setup() {
    const state = reactive({
      company: "Authlab",
      position: "Software Engineer",
      worksAt: computed(() => {
        return `As a ${state.position} at ${state.company}`;
      }),
    });
    console.log("FroM Reactive: ", state.position);
    return toRefs(state);
  },
};
</script>

<style></style>
