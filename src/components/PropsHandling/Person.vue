<template>
  <div>
    <hr />
    <label>University: </label>
    <input type="text" v-model="university" placeholder="university" />
    <br>
    <label>City: </label>
    <input type="text" v-model="city" placeholder="city" />

    <br />
    <person-greeting :university="university" :city="city" @showAlert="showAlert"></person-greeting>
    <!-- <h6>Output: {{ university }} {{ city }}</h6> -->
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import PersonGreeting from "../PropsHandling/PersonGreeting.vue";
export default {
  components: {
    PersonGreeting,
  },
  setup() {
    const state = reactive({
      university: "Metropolitan",
      city: "University",
    });

    function showAlert(info){
        return alert(info);
    }
    return {
        ...toRefs(state),
        showAlert
    };
  },
};
</script>

<style></style>
