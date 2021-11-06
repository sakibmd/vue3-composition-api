import { ref } from "vue";
export const useCounter = (initialVal, step) => {
  const myValue = ref(initialVal);
  
  function incrementCounter() {
    myValue.value += step;
  }

  function decrementCounter() {
    myValue.value -= step;
  }

  return {
    myValue,
    incrementCounter,
    decrementCounter,
  };
};
