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
      <router-link to="/hobbies">
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
      projects: [
          {
              id:1,
              name:`Yashraj Mukhate Studios`,
              title:`Yashraj Mukhate Studios`,
              url:`/yashraj-mukhate`,
              imgUrl: 'https://res.cloudinary.com/db3h7h0pa/image/upload/v1656837560/vedika-portfolio/projects/black_gradient_bg_stdflu.jpg',
              content:`The @vitwit_  team has been rocking it and contributing to all layers of the stack: #tendermint, #cosmossdk, and #ibc. Mad props, and look forward to continuing to work with y'all!`
          },
          {
              id:2,
              name:`Static IoT Pvt Ltd`,
              title:`Static IoT PvtLtd`,
              url:`/static-iot`,
              imgUrl:'https://res.cloudinary.com/db3h7h0pa/image/upload/v1656837445/vedika-portfolio/projects/9_ucyyjy.jpg',
              content: `I can also attest. @vitwit_ is one of the best dev teams in the space and we are so proud and grateful to work with them... Excited they are supporting Akash as well.`
          },
          {
              id:3,
              name:`YS Architects`,
              title:`YS Architects`,
              url:`/ysa`,
              imgUrl:'https://res.cloudinary.com/db3h7h0pa/image/upload/v1656837698/vedika-portfolio/projects/front_uev1xo.jpg',
              content: `I can also attest. @vitwit_ is one of the best dev teams in the space and we are so proud and grateful to work with them... Excited they are supporting Akash as well.`
          },
      ],

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
              imgUrl:'https://res.cloudinary.com/db3h7h0pa/image/upload/v1662097375/website/jnec/Screenshot_2022-09-02_at_11.11.44_AM_geacs8.png',
          },
          {
              id:4,
              name:`Keychron`,
              title:`Keychron`,
              url:`/keychron`,
              imgUrl:'https://res.cloudinary.com/db3h7h0pa/image/upload/v1662097175/website/keychron/1_tnszxs.jpg',
          },
      ],

      hobbies: [
          {
              id:1,
              name:`Yashraj Mukhate Studios`,
              title:`Yashraj Mukhate Studios`,
              url:`/yashraj-mukhate`,
              imgUrl: 'https://res.cloudinary.com/db3h7h0pa/image/upload/v1656699830/vedika-portfolio/IMG_20201022_174839_uqfu2r.jpg',
              content:`The @vitwit_  team has been rocking it and contributing to all layers of the stack: #tendermint, #cosmossdk, and #ibc. Mad props, and look forward to continuing to work with y'all!`
          },
          {
              id:2,
              name:`Gregory Landua`,
              title:`Co-founder Regen Network`,
              url:`/project1`,
              imgUrl:'https://res.cloudinary.com/db3h7h0pa/image/upload/v1656699822/vedika-portfolio/IMG_20200928_131917_fisei6.jpg',
              content: `I can also attest. @vitwit_ is one of the best dev teams in the space and we are so proud and grateful to work with them... Excited they are supporting Akash as well.`
          },
          {
              id:3,
              name:`OmniFlix Network`,
              title:`Team OmniFlix Network`,
              url:`/project1`,
              imgUrl:'https://res.cloudinary.com/db3h7h0pa/image/upload/v1656699822/vedika-portfolio/IMG_20200928_131917_fisei6.jpg',
              content: `I can also attest. @vitwit_ is one of the best dev teams in the space and we are so proud and grateful to work with them... Excited they are supporting Akash as well.`
          },
          {
              id:4,
              name:`Gregory Landua`,
              title:`Co-founder Regen Network`,
              url:`/project1`,
              imgUrl:'https://res.cloudinary.com/db3h7h0pa/image/upload/v1656699822/vedika-portfolio/IMG_20200928_131917_fisei6.jpg',
              content: `I can also attest. @vitwit_ is one of the best dev teams in the space and we are so proud and grateful to work with them... Excited they are supporting Akash as well.`
          },
          {
              id:5,
              name:`Persistence One`,
              title:`Team Persistence`,
              url:`/project1`,
              imgUrl:'https://res.cloudinary.com/db3h7h0pa/image/upload/v1656699822/vedika-portfolio/IMG_20200928_131917_fisei6.jpg',
              content: `I can also attest. @vitwit_ is one of the best dev teams in the space and we are so proud and grateful to work with them... Excited they are supporting Akash as well.`
          },
          {
              id:6,
              name:`Persistence One`,
              title:`Team Persistence`,
              url:`/project1`,
              imgUrl:'https://res.cloudinary.com/db3h7h0pa/image/upload/v1656699822/vedika-portfolio/IMG_20200928_131917_fisei6.jpg',
              content: `I can also attest. @vitwit_ is one of the best dev teams in the space and we are so proud and grateful to work with them... Excited they are supporting Akash as well.`
          },
      ],
    };
  },
};
</script>