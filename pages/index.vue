<template>
  <div>
    <Title title="Home" />
    <a href="https://youtube.com/tylerpotts" target="_blank" rel="noopener noreferrer">YouTube</a>

    {{ $store.state.title }}
    <button @click="increment">Increment Me! {{ $store.state.counter }}</button>
  </div>

</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  }
}
</script>