<template>
    <v-btn
        class="text-xs-center display-2 circle white--text red lighten-1"
        v-on:click="onClickPomntuBtn()"
      >{{time}}</v-btn>
</template>

<script>
export default {
  name: "PomntuButton",
  data() {
    return {
      time: "25:00"
    };
  },
  methods: {
    onClickPomntuBtn: function() {
      alert("Push!")
    }
  }
}
</script>

<style scoped>
.circle {
  width: 250px;
  height: 250px;
  border-radius: 100%;
}
</style>