<template>
  <div>
    <div class="card">
      <div class="columns card-content">
        <div class="column">
          <h2>Home Slide</h2>
        </div>
        <div class="column">
          {{index}}
          <nuxt-link to="slide" class="button is-primary">Start Quiz</nuxt-link>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// import { Generator, router } from './index'
import { mapState } from 'vuex'

export default {
  asyncData ({ env }) {
    return { questions: env.questions }
  },
  computed: mapState([
    'index'
  ]),
  methods: {
    next () {
    }
  }
}
</script>
