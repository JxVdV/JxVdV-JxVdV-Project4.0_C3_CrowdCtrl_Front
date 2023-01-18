<template>
  <h1>API VIEW</h1>
  <div v-for="m in movies" :key="m">
    <RouterLink
      :to="{ name: 'ApiDetails', params: { id: m.id } }"
      class="hover:underline"
      >{{ m.id }} - {{ m.watched }}</RouterLink
    >
  </div>
</template>

<script>
export default {
  name: 'Api',

  methods: {
    GetData() {
        fetch('https://localhost:44319/api/MovieWatches')
      .then((res) => res.json())
      .then((data) => (this.movies = data))
      .catch((err) => console.log('retrieve movies: ', err));
    }
  },
  setup() {
    
  },
  data() {
    // console.log('data')
    return { movies: [] };
  },
  mounted() {
    this.GetData()
    // console.log('mounted')
  },
};
</script>
