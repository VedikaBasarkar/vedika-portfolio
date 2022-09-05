<template>
  <MainLayout>
    <div class="container">
      <div class="mt-20 mb-6 text-xl">Here are some of my drawings, embroidery work, paintings, logos, and digital artworks.</div>
      <div class="images flex flex-row flex-wrap" v-viewer>
        <img class="w-1/2 md:w-1/4 p-2" v-for="src in images" :key="src" :src="src">
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
          "https://res.cloudinary.com/db3h7h0pa/image/upload/v1662382865/website/artworks/Vedika_character_design_Lady_Warrier_mist_photorealistic_octane_16f6747b-8caf-4cc8-89d5-b6f46c5b50bb_di759a.png",
          "https://res.cloudinary.com/db3h7h0pa/image/upload/v1662382878/website/artworks/Vedika_Samurai_walking_in_the_rain_Tokyo_city_background_mist_p_e4c66486-d67e-4290-98e1-e95f5bcabb6c_piinmr.png",
          "https://res.cloudinary.com/db3h7h0pa/image/upload/v1662382867/website/artworks/Vedika_character_design_runway_dark_look_warrier_theme_photorea_9ddc4d0c-07c4-420c-b422-4baeae538147_lmsql6.png",
          "https://res.cloudinary.com/db3h7h0pa/image/upload/v1662382894/website/artworks/Aaron012_character_design_Lady_Warrier_mist_photorealistic_octa_8ba4ac3d-20e6-4354-a060-daf7edb45d07_ukktna.png",
          "https://res.cloudinary.com/db3h7h0pa/image/upload/v1656699822/vedika-portfolio/IMG_20200928_131917_fisei6.jpg",
          "https://res.cloudinary.com/db3h7h0pa/image/upload/v1656699574/vedika-portfolio/IMG_0967_te273j.jpg",
          "https://res.cloudinary.com/db3h7h0pa/image/upload/v1656699577/vedika-portfolio/IMG_0959-01_xjqswe.jpg",
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