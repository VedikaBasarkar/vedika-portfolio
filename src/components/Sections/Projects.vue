<template>
<div>
  <!-- Ui Ux Project -->
  <div class="text-2xl md:text-4xl px-6 md:px-20 md:pt-10">Web Designing and Developement</div>
  <div class="flex flex-row flex-wrap md:px-10">
    <div 
      v-for="(w, index) in webProjects"
      :key="index"
      class="p-4 md:p-10 w-full md:w-1/2">
      <router-link :to="w.url">
      <div class="hover:bg-primaryDark">
        <img class="hover:bg-primaryDark z-0" :src="w.imgUrl" />
      </div>
      <div class="text-xl pt-4 leading-7">
        {{ w.name }}
      </div>
      </router-link>
    </div>
  </div>

  <!-- Hobbies  -->
  <div class="text-2xl md:text-4xl px-6 md:px-20 md:pt-10">Photography and Hobby</div>
  <div class="flex flex-row flex-wrap md:px-10">
    <div 
      class="p-4 md:p-10 w-full md:w-1/2">
      <router-link to="/photography">
      <div class="hover:bg-primaryDark">
        <img class="hover:bg-primaryDark z-0" src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1650085785/website/photography/IMG_0039_bsvozt.jpg" />
      </div>
      <div class="text-xl pt-4 leading-7">
        Photography
      </div>
      </router-link>
    </div>

    <div 
      class="p-4 md:p-10 w-full md:w-1/2">
      <router-link to="/hobby">
      <div class="hover:bg-primaryDark">
        <img class="hover:bg-primaryDark z-0" src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1650085920/website/photography/IMG_0967_dha9oj.jpg" />
      </div>
      <div class="text-xl pt-4 leading-7">
        Hobbies and Artworks
      </div>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {

      webProjects: [
          {
              id:1,
              name:`Ripple`,
              title:`Ripple`,
              url:`/ripple`,
              imgUrl: 'https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095526/website/ripple/1_jix322.jpg',
          },
          {
              id:2,
              name:`Fleet Management`,
              title:`Fleet Management`,
              url:`/fleet-management`,
              imgUrl:'https://res.cloudinary.com/db3h7h0pa/image/upload/v1662097526/website/fleet-management/Slide_16_9_-_3_negke1.jpg',
          },
          {
              id:3,
              name:`JNEC`,
              title:`JNEC`,
              url:`/jnec`,
              imgUrl:'https://res.cloudinary.com/db3h7h0pa/image/upload/v1662381061/website/jnec/a1_jynfak.jpg',
          },
          {
              id:4,
              name:`Keychron`,
              title:`Keychron`,
              url:`/keychron`,
              imgUrl:'https://res.cloudinary.com/db3h7h0pa/image/upload/v1662443745/website/keychron/a1_vhffx2.jpg',
          },
      ],

    };
  },
};
</script>