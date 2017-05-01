<template>
  <div class="video-player-box"
       @play="onPlayerPlay($event)"
       @pause="onPlayerPause($event)"
       @ready="playerReadied"
       @statechanged="playerStateChanged($event)"
       v-video-player:myVideoPlayer="playerOptions">
  </div>
</template>

<script>
  export default {
    mounted () {
      console.log('this is current videojs instance object', this.myVideoPlayer)
    }
    // Omit the same parts as in the following component sample code
    // ...
  }
</script>
