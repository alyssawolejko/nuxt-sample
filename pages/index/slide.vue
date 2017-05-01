<template>
  <div class="slides">
    <div v-show="$store.state.type == 'question'"class="slides__question-slide">
      <div class="slide-component__inner">
        <h4 class="slide-component__title">{{question.question}}</h4>
        <div class="list highlight">
          <div class="item" v-for="(value, key) in question.options" @click="submit(key)">
            <div class="item-primary ">{{key}}.</div>
            <div class="item-content">{{value}}</div>
          </div>
        </div>
        <img src="~static/images/hmo.png">
      </div>
    </div>
    <div v-show="$store.state.type == 'answer'" class="slides__answer-slide">
      <h1>{{ question.answer }}</h1>
      <video-player/>
      <static-image/>
      <a @click="next()" class="button is-primary ">Answer</a>
    </div>
  </div>
</template>

<script>
import VideoPlayer from '~components/VideoPlayer'
import StaticImage from '~components/StaticImage'

export default {
  components: {
    VideoPlayer,
    StaticImage
  },
  asyncData ({ params, env, error }) {
    return env
  },
  computed: {
    index () {
      return this.$store.state.index
    },
    question () {
      return this.questions[this.index]
    }
  },
  watch: {
  },
  methods: {
    next () {
      // if the current state is a question the next is an answer
      if (this.$store.state.type === 'question') {
        this.$store.commit('updateType', 'answer')
      } else {
      // if the current state is an answer the next is an question
      // we increment to next question
        this.$store.commit('nextSlide')
        this.$store.commit('updateType', 'question')
      }
    },
    submit (input) {
      // validate the input with the answer
      this.$store.commit('updateStatus', (input === this.question.answer.value ? 'correct' : 'incorrect'))
      // call our next method
      this.next()
    }
  }
}
</script>

<style scoped>
.slide {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
</style>
