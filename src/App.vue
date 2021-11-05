<template>
  <div>
    <h2>Heading from App.vue Page</h2>

    <procedure-1></procedure-1>
    <procedure-2></procedure-2>
    <procedure-3></procedure-3>
    <h4>Person Details | Using Props</h4>
    <person></person>
  </div>
</template>

<script>
import Person from './components/PropsHandling/Person.vue';
import Procedure1 from "./components/Procedure1.vue";
import Procedure2 from "./components/Procedure2.vue";
import Procedure3 from "./components/Procedure3.vue";
import { storedData } from "./store.js";
export default {
  components: {
    Procedure1,
    Procedure2,
    Procedure3,
    Person,
  },
  name: "App",

  setup() {
    let { firstName, lastName, fullName } = storedData();
    return {
      firstName,
      lastName,
      fullName,
    };
  },
};
</script>

<style></style>
