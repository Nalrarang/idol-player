<template>
    <div class="menu">
        <v-tabs 
            fixed-tabs
            grow
            hide-slider

        >
            <v-tab
            v-for="n in menu"
            class="menu-list"
            :key="n"
            >
            {{ n }}
            </v-tab>
        </v-tabs>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menu: ['Library', 'Chart', 'Radio']
        }
    }
    
    
}
</script>

<style scoped>
    .menu {
        float: left;
        margin-top: 50px;
        margin-left: 100px;
    }
    .menu-list {
        font-size: 16px;
        font-weight: 500;
        color: #BEC0C6;        
    }


</style>
