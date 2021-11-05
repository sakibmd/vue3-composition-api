<template>
  <div>
    <hr />
    <h2>Procedure 1 | Ref()</h2>
    Enter Name: <input type="text" placeholder="name" v-model="name" /> <br />
    Name: {{ name }} & Age: {{ age }} <br />{{ location }} <br />
    Single Post: {{ singlePost.title }}
    <!-- <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul> -->

    <h4>Example of Refs in Composition Api</h4>
    <input type="text" ref="inputRef" />
  </div>
</template>

<script>
import { computed, onMounted, ref, watch } from "vue";
export default {
  setup() {
    const name = ref("Sakib");
    const age = ref(42);
    const city = ref("Sylhet");
    const country = ref("Bangladesh");
    var posts = ref([]);
    const singlePost = ref("");
    const inputRef = ref("");

    watch(name, (newVal, oldVal) => {
      console.log(newVal, oldVal);
      // console.log(newVal);
      // console.log(oldVal);
    });

    (function fectApi() {
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((res) => res.json())
        .then((data) => (singlePost.value = data));
    })();

    //mounted
    onMounted(() => {
      inputRef.value.focus(); //focut input field using Refs

      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => (posts.value = data));
    });

    //computed
    const location = computed(() => {
      return `Location: ${city.value}, ${country.value}`;
    });

    return {
      name,
      age,
      posts,
      city,
      country,
      location,
      singlePost,
      inputRef,
    };
  },
};
</script>

<style></style>
