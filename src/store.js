import { reactive, toRefs } from "vue";
export let storedData = () => {
  const state = reactive({
    favFood: "Pizza",
    favPerson: "Mom",
  });
  return toRefs(state);
};
