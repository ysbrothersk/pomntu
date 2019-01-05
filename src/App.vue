<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <span>{{appName}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat v-bind:href="gitHubUrl" target="_blank">
        <img :src="require('./assets/GitHub-Mark-32px.png')" height="20px">
        <span class="mr-2 ml-1">GITHUB</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Top/>
    </v-content>

    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <span class="mr-2">created by {{author}} @{{date}}</span>
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
      date: "2019",
      gitHubUrl: "https://github.com/ysbrothersk/pomntu"
    };
  }
};
</script>
