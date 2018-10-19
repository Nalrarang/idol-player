<template>
    <div class="album-list">
        <v-card>
            <!-- swiper -->
            <swiper :options="swiperOption">
                <swiper-slide v-for="slide in swiperSlides" :key="slide">
                    <div class="album">album {{ slide }}</div>

                </swiper-slide>
            </swiper>
        </v-card>
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
    data() {
      return {
        swiperOption: {
          slidesPerView: 4,
          centeredSlides: false,
          spaceBetween: 30,
        },
        swiperSlides: [1,2,3,4,5]
      }
    },
    methods: {
      appendSlide() {
        this.swiperSlides.push(this.swiperSlides.length + 1)
      },
      prependSlide() {
        this.swiperSlides.unshift(this.swiperSlides[0] - 1)
      },
      popSlide() {
        this.swiperSlides.pop()
      },
      shiftSlide() {
        this.swiperSlides.shift()
      }
    }
  }
</script>


<style>
.album-list {
    clear: both;
}
.album {
    border: 1px solid black;
    width: 250px;
    height: 250px;
}

</style>
