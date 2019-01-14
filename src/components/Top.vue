<template>
  <v-layout align-center justify-center row wrap>
    <v-flex xs12 class="text-xs-center mt-5">
      <v-btn
        class="text-xs-center display-2 circle white--text red lighten-1"
        v-on:click="onClickPomntuBtn()"
      >{{time}}</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
let job;

const State = {
  standby: 1,
  running: 2,
  done: 3
}

const mill25min = 1500000
const mill5min = 300000

export default {
  name: "Top",
  data() {
    return {
      millTime: mill25min, // 25min(mill seconds)
      state: State.standby
    };
  },
  computed: {
    time: function() {
      const date = new Date(this.millTime);
      const sec = date.getSeconds();
      if (sec < 10) {
        return date.getMinutes() + ":0" + sec;
      } else {
        return date.getMinutes() + ":" + date.getSeconds();
      }
    }
  },
  methods: {
    onClickPomntuBtn: function() {
      switch (this.state) {
        case State.standby: {
          this.state = State.running;

          job = setInterval(() => {
            this.millTime = this.millTime - 1000;
          }, 1000);

          break;
        }
        case State.running: {
          this.state = State.done;
          clearInterval(job);
          this.millTime = mill5min

          job = setInterval(() => {
            if (this.millTime === 0) {
              this.state = State.standby;
              clearInterval(job)
              this.millTime = mill25min;
              return;
            }
            this.millTime = this.millTime - 1000;
          }, 1000)
          break;
        }
        case State.done: {
          this.state = State.standby;
          clearInterval(job)
          this.millTime = mill25min;
          break;
        }
      }
    }
  }
};
</script>

<style scoped>
.circle {
  width: 250px;
  height: 250px;
  border-radius: 100%;
}
</style>