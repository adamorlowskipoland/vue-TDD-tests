<template>
  <div>
    <h1>Members List</h1>
    <br/>
    <ul>
      <li v-for="member in members"
          :key="member">
        {{ member }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        members: ['Jeff', 'Bill', 'Warren', 'Larry', 'Koch'],
      }
    }
  }
</script>
