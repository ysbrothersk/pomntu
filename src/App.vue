<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <span>{{appName}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat v-bind:href=gitHubUrl target="_blank">
        <span class="mr-2">GITHUB</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Top/>
    </v-content>

    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <span>created by {{author}}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Top from "./components/Top";

export default {
  name: "App",
  components: {
    Top
  },
  data() {
    return {
      appName: "pomntu",
      author: "ysbrothersk",
      gitHubUrl: "https://github.com/ysbrothersk/pomntu"
    };
  }
};
</script>
