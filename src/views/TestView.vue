<template>
  <div class="Home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>My name is {{ testOne.name }} and my age is {{ testOne.age }}</p>
    <!-- <button @click="updateRef">Click me to update updateRef</button> -->

    <h2>Reaction</h2>
    <p>My name is {{ testTwo.name }} and my age is {{ testTwo.age }}</p>
    <!-- <button @click="updateReaction">Click me to update updateReaction</button> -->

    <h2>Computed</h2>
    <ul>
      <li v-for="name in names" :key="name">{{ name }}</li>
    </ul>
    <input type="text" v-model="search" />
    <p>search term = {{ search }}</p>

    <ul>
      <li v-for="name in matchingNames" :key="name">{{ name }}</li>
    </ul>

    <h2>Watch and WatchEffect</h2>
    <!-- <button @click="handleClick">Stop Watch(Effect)</button> -->

    <h2>API Call</h2>
    <!-- <p>{{ cat.fact }}</p> -->
  </div>
</template>

<script>
import { ref, reactive, computed , watch, watchEffect} from 'vue';

export default {
  name: 'Home',
  setup() {
    // console.log('setup')
    // const p = ref(null);
    const testOne = ref({ name: 'Mario', age: 30 });
    const testTwo = reactive({ name: 'Luigi', age: 35 });

    const name = computed(() => {
      return 'shaun';
    });

    const search = ref('');
    const names = ref([
      'mario',
      'yoshi',
      'luigi',
      'toad',
      'bowser',
      'koopa',
      'peach',
    ]);

    // const stopWatch = watch(search, () => {
    //   console.log('watch function ran')
    // })

    // const stopWatchEffect = watchEffect( () => {
    //   console.log('watchEffect function ran', search.value)
    // })

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    // const updateRef = () => {
    //   testOne.value.age = 40;
    // };

    // const updateReaction = () => {
    //   testTwo.age = 45;
    // };

    // const handleClick = () => {
    //   stopWatch()
    //   stopWatchEffect()
    // }

    return {
      testOne,
      testTwo,
      names,
      search,
      matchingNames,
    };
  },
  created() {
    // console.log('created')
  },
  // data() {
  //   // console.log('data')
  //   return { cat: {}}
  // },
  // mounted() {
  //   fetch('https://catfact.ninja/fact')
  //   .then(res => res.json())
  //   .then(data => this.cat = data)
  //   .catch(err => console.log('retrieve cat fact: ', err))
  //   // console.log('mounted')
  // },
};
</script>
