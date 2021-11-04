<template>
  <div>
    <h2>Hello World</h2>

    <procedure-1></procedure-1> 
    <procedure-2></procedure-2>

    
   

    <!-- When using Reactive from other file | Approach 3 -->
    {{ firstName }}
    {{ lastName }}
    <br />
    {{ fullName }}
  </div>
</template>

<script>
import Procedure1 from "./components/Procedure1.vue";
import Procedure2 from "./components/Procedure2.vue";
import { storedData } from "./store.js";
export default {
  components: {
    Procedure1,
    Procedure2,

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
