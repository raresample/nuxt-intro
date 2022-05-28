<template>
  <div>
    <header>
      <h1>Welcome to my site</h1>
      <nuxt-link to="/" class="link">Home</nuxt-link>
      <nuxt-link to="/about" class="link">About</nuxt-link>
    </header>
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'default'
}
</script>