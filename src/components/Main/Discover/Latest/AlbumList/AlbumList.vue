<template>
    <div class="album-list">
        <md-card>
            <md-card-actions>
            <div>
                <md-button @click.native="prependSlide">Prepend Slide</md-button>
                <md-button @click.native="appendSlide">Append Slide</md-button>
                <md-button @click.native="popSlide">Pop Slide</md-button>
                <md-button @click.native="shiftSlide">Shift Slide</md-button>
            </div>
            <md-button class="md-icon-button"
                        target="_blank"
                        href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/29-dynamic-slides.vue">
                <md-icon>code</md-icon>
            </md-button>
            </md-card-actions>
            <md-card-media>
            <!-- swiper -->
            <swiper :options="swiperOption">
                <swiper-slide v-for="slide in swiperSlides" :key="slide">Slide {{ slide }}</swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
            </md-card-media>
        </md-card>
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
          slidesPerView: 3,
          centeredSlides: true,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperSlides: [1, 2, 3, 4, 5]
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
  .append-buttons {
    text-align: center;
    margin-top: 20px;
  }
  .append-buttons a {
    display: inline-block;
    margin: 0 10px;
  }
</style>
