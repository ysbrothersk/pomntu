<template>
    <v-layout align-center justify-center row wrap>
        <v-flex xs12>
            <p class="display-3 mt-5 text-xs-center">{{time}}</p>
        </v-flex>
        <v-flex xs12 class="text-xs-center">
            <div>
                <v-btn class="red lighten-1 white--text">START</v-btn>
                <v-btn class="ml-5 red lighten-1 white--text">DONE</v-btn>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    name: "Top",
    data() {
        return {
            time: "25:00"
        }
    }
}
</script>