<template>
  <div class="container">
    <div class="section similac-quiz">
      <h1>Similac Quiz</h1>
      <nuxt-child/>
    </div>
  </div>
</template>

<script>

export default {
  asyncData ({ env }) {
    return { questions: env.questions }
  },
  methods: {

  }
}
</script>

<style scoped>
.container {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  box-sizing: border-box;
}
.left {
  width: 50%;
  position: absolute;
  top: 0;
  left: 0;
}
.right {
  width: 50%;
  position: absolute;
  top: 0;
  right: 0;
}
.players {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.players li a {
  display: block;
  border: 1px #ddd solid;
  padding: 10px;
  text-align: left;
  color: #222;
  text-decoration: none;
}
.players li a:hover {
  color: orange;
}
</style>
