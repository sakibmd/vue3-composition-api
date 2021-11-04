<template>
  <div>
    <hr />
    <h2>Following Procedure One | Ref</h2>
    Name: {{ name }} & Age: {{ age }} <br />{{ location }} <br />
    Single Post: {{ singlePost.title }}
    <!-- <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul> -->
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
export default {
  setup() {
    const name = ref("Sakib");
    const age = ref(42);
    const city = ref("Sylhet");
    const country = ref("Bangladesh");
    var posts = ref([]);
    const singlePost = ref("");

    (function fectApi() {
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((res) => res.json())
        .then((data) => (singlePost.value = data));
    })();

    //mounted
    onMounted(() => {
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
    };
  },
};
</script>

<style></style>
