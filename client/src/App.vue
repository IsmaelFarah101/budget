<template>
  <div id="app">
    
    <Header></Header>
    <!--This gets this gets all the components in the router and dsiplays them accordingly-->
    <RouterView></RouterView>
    <Footer></Footer>

  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Header,
    Footer,

  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
