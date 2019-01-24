<template>
  <v-layout align-center justify-center row wrap>
    <v-flex xs12 class="text-xs-center mt-5">
      <!-- <v-btn
        class="text-xs-center display-2 circle white--text red lighten-1"
        v-on:click="onClickPomntuBtn()"
      >{{time}}</v-btn> -->
      <PomntuButton></PomntuButton>
    </v-flex>
    <v-flex xs12 class="text-xs-center mt-2">
      <!-- <v-btn 
        flat
        color="green"
        class="text-xs-center"
        v-show="state == StateDefine.running || state == StateDefine.stop"
        v-on:click="done()">Done</v-btn> -->
    </v-flex>
  </v-layout>
</template>

<script>
import PomntuButton from "./PomntuButton";

// let job;

// const BtnType = {
//   Active: 1,
//   Break: 2
// }

// const State = {
//   Standby: 1,
//   Running: 2,
//   Pause: 3,
//   Done: 4
// }

// const ACTIVE_TIME = 1500000
// const BREAK_TIME = 300000

// function notifyActiveDone() {
//   new Notification("アクティブタイムが終了しました！", {
//     body: "休憩をとって次のタスクに備えましょう",
//     // TODO: アプリアイコンにする
//     icon: require("../assets/logo.png")
//   });
// }

// function notifyBreakDone() {
//   new Notification("休憩時間終了です！", {
//     body: "いざ、タスクにとりかかりましょう"
//   })
// }

function notifyPermissionGranted() {
  new Notification("通知が許可されました！Thank you!", {
    // TODO: アプリアイコンにする
    icon: require("../assets/logo.png")
  });
}

function requestNotifiPermission() {
  if (window.Notification) {
    if (Notification.permission === 'default' || Notification.permission === 'denied') {
      Notification.requestPermission( () => notifyPermissionGranted());
    }
  }
}

export default {
  name: "Top",
  components: {
    PomntuButton
  },
  // data() {
  //   return {
  //     activeTime: ACTIVE_TIME,
  //     breakTime: BREAK_TIME,
  //     activeState: State.Standby,
  //     breakState: State.Standby
  //   };
  // },
  created: function() {
    requestNotifiPermission();
  },
  // computed: {
  //   time: function() {
  //     const date = new Date(this.millTime);
  //     const sec = date.getSeconds();
  //     if (sec < 10) {
  //       return date.getMinutes() + ":0" + sec;
  //     } else {
  //       return date.getMinutes() + ":" + date.getSeconds();
  //     }
  //   }
  // },
  // methods: {
  //   onClickPomntuBtn: function(state) {
  //     switch (state) {
  //       case State.Standby: {
  //         this.running();
  //         break;
  //       }
  //       case State.Running: {
  //         this.pause();
  //         break;
  //       }
  //       case State.Pause: {
  //         this.running();
  //         break;
  //       }
  //       case State.Done: {
  //         this.standby();
  //         break;
  //       }
  //     }
  //   },
  //   standby: function(state) {
  //     state = State.standby;
  //     clearInterval(job)
  //     this.millTime = mill25min;
  //   },
  //   running: function() {
  //     this.state = State.running;
  //     clearInterval(job);
  //     job = setInterval(() => {
  //       if (this.millTime === 0) {
  //         this.done();
  //       } else {
  //         this.millTime = this.millTime - 1000;
  //       }
  //     }, 1000);
  //   },
  //   stop: function() {
  //     this.state = State.stop;
  //     clearInterval(job);
  //   },
  //   done: function() {
  //     this.state = State.done;
  //     notifyDone();
  //     clearInterval(job);
  //     this.millTime = mill5min;
  //     job = setInterval(() => {
  //       if (this.millTime === 0) {
  //         this.standby();
  //       } else {
  //         this.millTime = this.millTime - 1000;
  //       }
  //     }, 1000);
  //   }
  // }
};
</script>