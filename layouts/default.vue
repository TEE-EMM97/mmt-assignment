<template>
  <div>
    <VooHeader />
    <v-container>
      <nuxt />
    </v-container>
    <VooFooter />
  </div>
</template>

<script>
import VooHeader from '../components/VooHeader'
import VooFooter from '../components/VooFooter'
export default {
  components: {
    VooHeader,
    VooFooter
  }
}
</script>

<style>
* {
  border: 0;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  max-width: 475px;
}
</style>
