<template>
  <div>
    <hr />
    <h2>Procedure 2 | Reactive()</h2>

    <div>Works At: {{ worksAt }}</div>
    <input type="text" v-model="company" />
    <input type="text" v-model="position" />

    <br />
    Fav Actress: {{ details.favActress }}
    <input type="text" v-model="details.favActress" />
  </div>
</template>

<script>
import { computed, reactive, toRefs, watch } from "vue";
import _ from "lodash"; //used for watching object changes. Used with deep
export default {
  setup() {
    const state = reactive({
      company: "Authlab",
      position: "Software Engineer",
      details: {
        favActress: "ABCDE",
      },
      worksAt: computed(() => {
        return `As a ${state.position} at ${state.company}`;
      }),
    });
    //console.log("FroM Reactive: ", state.position);

    //use watchers with reactive function
    watch(
      () => [state.company, state.position, _.cloneDeep(state.details)],
      (newValues, oldValues) => {
        console.log(newValues, oldValues);
        // console.log("Company New Value: ", newValues[0]);
        // console.log("Company Old Value: ", oldValues[0]);
        // console.log("Position New Value: ", newValues[1]);
        // console.log("Position New Value: ", oldValues[1]);
        // console.log("New Fav Actress: ", newValues[2]);
        // console.log("Old Fav Actress: ", oldValues[2]);
      },
      {
        deep: true,
      }
    );
    return toRefs(state);
  },
};
</script>

<style></style>
