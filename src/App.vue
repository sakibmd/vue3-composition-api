<template>
  <div>
    <h2>Heading from App.vue Page</h2>

    <procedure-1></procedure-1>
    <procedure-2></procedure-2>
    <procedure-3></procedure-3>
    
    <h1>Person Details | Using Props</h1>
    <person></person>

    <h1>Results of Counter | using mixin alternatives (with parameter)</h1>
    <team-a></team-a>
    <team-b></team-b>
  </div>
</template>

<script>
import Person from "./components/PropsHandling/Person.vue";
import Procedure1 from "./components/Procedure1.vue";
import Procedure2 from "./components/Procedure2.vue";
import Procedure3 from "./components/Procedure3.vue";
import { storedData } from "./store.js";
import TeamA from "./components/ReuseableTry/TeamA.vue";
import TeamB from "./components/ReuseableTry/TeamB.vue";
export default {
  components: {
    Procedure1,
    Procedure2,
    Procedure3,
    Person,
    TeamA,
    TeamB,
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
