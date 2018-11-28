<template>
  <div class="latest-wrap">
    <h3 class="sub-header">RELEASE THIS WEEKED</h3>
    <div class="arrow-action">
        <v-icon class="button-prev">chevron_left</v-icon>
        <v-icon class="button-next">chevron_right</v-icon>
    </div>

    <div class="album-list">
        <v-card class="slide">
            <!-- swiper -->            
            <swiper :options="swiperOption">
                <swiper-slide v-for="slide in getReleaseData.list" :key="slide.release">                    
                  <template v-if="slide">
                    <div class="album">
                      <img :src="slide.cover" />
                      <p>{{ slide.artist }}</p>
                      <p>{{ slide.title }}</p>
                    </div>
                  </template>
                </swiper-slide>
            </swiper>
        </v-card>
    </div>
  </div>    
</template>

<script>
// require styles
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    components: {
        swiper,
        swiperSlide
    },
    props: {
      releaseAlbum: {
        type: Array
      }
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 4,
          centeredSlides: false,
          spaceBetween: 30,
          navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev'
          }
        },
      }
    },
    computed: {
        getReleaseData() {
            return this.$store.getters.getReleaseData;
        }
    },
    mounted() {
        this.$store.dispatch('getNewRelease')
    },
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
    .slide {
        box-shadow: none !important;
    }
    .album-list {
        clear: both;
    }
    .album {
        width: 250px;
        height: 250px;
        text-align: center; 
    }
    .album img {
        width: 100%;
        height: auto;
    }
</style>
