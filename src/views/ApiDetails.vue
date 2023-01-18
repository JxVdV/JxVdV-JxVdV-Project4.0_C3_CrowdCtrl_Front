<template>
  <h1>API VIEW ID {{ id }}</h1>
  <p>{{ event.name }}</p>
</template>

<script>
export default {
  props: ['id'],
  name: 'ApiDetails',
  methods: {
    getDetails() {
      fetch(`https://localhost:7100/api/Event/${this.id}`)
        .then((res) => res.json())
        .then((data) => (this.event = data))
        .catch((err) => console.log('retrieve event: ', err));
      // console.log('mounted')
    },
  },
  data() {
    // console.log('data')
    return { event: {} };
  },
  mounted() {
    this.getDetails();
  },
};
</script>
