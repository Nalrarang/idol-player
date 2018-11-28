<template>
    <div class="discover">
        <v-layout row wrap>
            <Header />
        </v-layout>
        <v-layout row wrap>
            <Latest />
        </v-layout>
        <v-layout row wrap>
            <Popular />
        </v-layout>
        <v-layout row wrap>
            <Recommend />
        </v-layout>
    </div>
</template>

<script>
import Header from './Header/Header.vue'
import Latest from './Latest/Latest.vue'
import Popular from './Popular/Popular.vue'
import Recommend from  './Recommend/Recommend.vue'

export default {
    name: 'discover',
    components: {
        Header,
        Latest,
        Popular,
        Recommend
    }    
}
</script>

<style>
.discover {
    padding: 50px;
    height: 800px;
    overflow-y: auto;
}

</style>

