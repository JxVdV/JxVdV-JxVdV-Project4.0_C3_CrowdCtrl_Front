<template>
  <h1>API VIEW ID {{ id }}</h1>
  <p>{{ movie.watched }}</p>
</template>

<script>
export default {
  props: ['id'],
  name: 'ApiDetails',
  methods: {
    getDetails() {
      fetch(`https://localhost:44319/api/MovieWatches/${this.id}`)
        .then((res) => res.json())
        .then((data) => (this.movie = data))
        .catch((err) => console.log('retrieve movie: ', err));
      // console.log('mounted')
    },
  },
  data() {
    // console.log('data')
    return { movie: {} };
  },
  mounted() {
    this.getDetails();
  },
};
</script>
