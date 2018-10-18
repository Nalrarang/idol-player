<template>
    <div class="latest-wrap">
        <h3 class="sub-header">RELEASE THIS WEEKED</h3>
        <div class="arrow-action">
            <v-icon>chevron_left</v-icon>
            <v-icon>chevron_right</v-icon>
        </div>
        <AlbumList />

    </div>

</template>

<script>
import AlbumList from './AlbumList/AlbumList.vue'

export default {
    components: {
        AlbumList
    }

}
</script>


<style>
    .latest-wrap {
        margin-top: 50px;
        width: 100%;
        position: relative;
    }
    .latest-wrap:after {
        content: '';
        display: inline-block;
        height: 1px;
        background: #B2BACA;
        position: absolute;
        right: 50px;
        left: 198px;
        top: 12px;

    }
    .sub-header {
        color: #B2BACA;
        float: left;
    }
    .arrow-action {
        float: right;
    }

</style>
