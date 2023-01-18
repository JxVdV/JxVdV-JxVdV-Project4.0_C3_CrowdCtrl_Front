<template>
  <SearchBarComponent />

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6" >
    <EventCardComponent v-for="e in events" :key="e.eventId" :event="e" class="col" />
  </div>
</template>

<script>
import SearchBarComponent from '@/components/events/SearchBarComponent.vue';
import EventCardComponent from '@/components/events/EventCardComponent.vue';
export default {
  name: 'AdminHome',
  components: { SearchBarComponent, EventCardComponent },

  methods: {
    GetEvents() {
      fetch('https://localhost:7100/api/Event')
        .then((res) => res.json())
        .then((data) => (this.events = data))
        .catch((err) => console.log('retrieve events: ', err));
    },
  },
  setup() {},
  data() {
    // console.log('data')
    return { events: [] };
  },
  mounted() {
    this.GetEvents();
    // console.log('mounted')
  },
};
</script>
