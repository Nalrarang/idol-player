<template>
  <div class="latest-wrap">
    <h3 class="sub-header">POPULAR K-POP ARTIST</h3>
    <div class="arrow-action">
        <v-icon class="popular-button-prev">chevron_left</v-icon>
        <v-icon class="popular-button-next">chevron_right</v-icon>
    </div>

    <div class="artist-list">
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
            nextEl: '.popular-button-next',
            prevEl: '.popular-button-prev'
          }
        },
      }
    },
    computed: {
        getReleaseData() {
            return this.$store.getters.getReleaseData;
        }
    },
    methods: {
    }
  }
</script>

<style>
    .artist-list {
        clear: both;
    }

</style>
