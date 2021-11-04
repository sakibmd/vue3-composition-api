import { reactive, toRefs, computed } from "vue";
export let storedData = () => {
  const state = reactive({
    firstName: "Tamim",
    lastName: "Iqbal",
    fullName: computed(() => {
        return `FirstName: ${state.firstName} and LastName: ${state.lastName}`;
    }),
  });
  return toRefs(state);
};
