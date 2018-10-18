<template>
    <v-app>
        <v-content class="main-container" align-center>
            <v-container fluid elevation-3>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
    }
  }
}
</script>
