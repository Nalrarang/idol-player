<template>
    <div class="header">
        <h1>Discover</h1>
        <Menu />
        <SearchBar />
    </div>    
</template>

<script>
import Menu from './Menu/Menu.vue'
import SearchBar from './SearchBar/SearchBar'
export default {
    components: {
        Menu,
        SearchBar
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway:800');
.header {
    width: 100%;
}
.header h1 {
    float: left;
    font-family: 'Raleway', sans-serif;
    font-size: 67px;
    font-weight: 800;
    color: #190836;
}
.header h1:first-letter {
    font-size: 70px;
    border-bottom: 4px solid #190836;
    border-radius: 2px;
}

</style>
