<template>
  <div id="app">
    <div class="part">
      <HelloWorld/>
    </div>
    <div class="part">
      <member-list/>
    </div>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import MemberList from './components/MemberList'

  export default {
    name: 'App',
    components: {
      HelloWorld,
      MemberList
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .part {
    display: inline-flex;
    width: 45%;
    min-height: 100vh;
    padding: 10px;
    background-color: #f3f5e9;
  }
</style>
