<template>
  <v-layout align-center justify-center row wrap>
    <v-flex xs12 class="text-xs-center mt-5">
      <v-btn
        class="text-xs-center display-2 circle white--text red lighten-1"
        v-on:click="startCount()"
      >{{time}}</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Top",
  data() {
    return {
      millTime: 1500000 // 25min(mill seconds)
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
    startCount: function() {
      setInterval(() => {
        this.millTime = this.millTime - 1000;
      }, 1000);
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