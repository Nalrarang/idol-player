<template>
    <v-layout row wrap>
        <v-flex xs9>
            <v-card>
                <Discover />
            </v-card>
        </v-flex>
        <v-flex xs3>
            <v-card>
                <Player />
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import Discover from '@/components/Main/Discover/Discover.vue'
import Player from '@/components/Main/Player/Player.vue'
export default {
    name: 'home',
    components: {
        Discover,
        Player
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
