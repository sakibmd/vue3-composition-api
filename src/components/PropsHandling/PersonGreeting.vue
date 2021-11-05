<template>
  <div>
    {{ details }}
    <br />
    <button @click="showAnAlert">Show an alert</button>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
export default {
  props: ["university", "city"],
  setup(props, context) {
    const state = reactive({
      details: computed(() => {
        return `Details: ${props.university}, ${props.city}`;
      }),
    });
    function showAnAlert() {
      context.emit("showAlert", state.details);
    }

    return {
      ...toRefs(state),
      showAnAlert,
    };
  },
};
</script>

<style></style>
