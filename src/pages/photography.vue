<template>
 <MainLayout class="">
    <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1650089080/website/photography/IMG_20180317_071135771_2_yefsn8.jpg" />
    <div class="">
      <div class="mt-20 mb-6 text-xl text-center">Collection of some of photos from different categories.</div>
      <div class="images flex flex-row flex-wrap" v-viewer>
        <img class="w-1/2 md:w-1/3 p-2" v-for="src in images" :key="src" :src="src">
      </div>
      <!-- <button type="button" @click="show">Click to show</button> -->
    </div>
  </MainLayout>
</template>

<script>

import MainLayout from '../layouts/Main.vue'
export default {
  components:{
    MainLayout,
  },
    data() {
      return {
        images: [
          "https://res.cloudinary.com/db3h7h0pa/image/upload/v1650086944/website/photography/IMG_20170621_141331273_HDR_3_ljc0xp.jpg",
          "https://res.cloudinary.com/db3h7h0pa/image/upload/v1650087793/website/photography/IMG_20190523_185704854_HDR-01_bypezp.jpg",
          "https://res.cloudinary.com/db3h7h0pa/image/upload/v1650087309/website/photography/IMG_9290_bddfpj.jpg",
          "https://res.cloudinary.com/db3h7h0pa/image/upload/v1650087345/website/photography/IMG_4453_qgcykm.jpg",
          "https://res.cloudinary.com/db3h7h0pa/image/upload/v1650086566/website/photography/IMG_0620_as8uo3.jpg",
          "https://res.cloudinary.com/db3h7h0pa/image/upload/v1650086871/website/photography/IMG_20181214_090733_yuinur.jpg",
          "https://res.cloudinary.com/db3h7h0pa/image/upload/v1650086679/website/photography/IMG_8914_uzv6xy.jpg",
          "https://res.cloudinary.com/db3h7h0pa/image/upload/v1650085799/website/photography/IMG_0073_janoak.jpg",
          "https://res.cloudinary.com/db3h7h0pa/image/upload/v1650085785/website/photography/IMG_0039_bsvozt.jpg",
          "https://res.cloudinary.com/db3h7h0pa/image/upload/v1650087603/website/photography/IMG_7482_2_koovk6.jpg",
          "https://res.cloudinary.com/db3h7h0pa/image/upload/v1656699557/vedika-portfolio/IMG_0428_nzusck.jpg",
          "https://res.cloudinary.com/db3h7h0pa/image/upload/v1656699515/vedika-portfolio/IMG_0208_iig2bo.jpg"
        ]
      };
    },
    methods: {
      show() {
        this.$viewerApi({
          images: this.images,
        })
      },
    },
}
</script>