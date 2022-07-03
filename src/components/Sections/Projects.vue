<template>
<div>
  <!-- Ui Ux Project -->

  <div class="text-4xl md:px-20 md:pt-10">Web Designing and Developement</div>
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

  <!-- Branding -->
  <div class="text-4xl md:px-20 md:pt-10">Branding and Logo Designing</div>
  <div class="flex flex-row flex-wrap md:px-10">
    <div 
      v-for="(p, index) in projects"
      :key="index"
      class="p-4 md:p-10 w-full md:w-1/2">
      <router-link :to="p.url">
      <div class="hover:bg-primaryDark">
        <img class="hover:bg-primaryDark z-0" :src="p.imgUrl" />
      </div>
      <div class="text-xl pt-4 leading-7">
        {{ p.name }}
      </div>
      </router-link>
    </div>
  </div>

<!-- Hobby Work -->
  <div class="text-4xl md:px-20 md:pt-10">Hobby Work</div>
  <div class="flex flex-row flex-wrap md:px-10">
    <div 
      v-for="(h, index) in hobbies"
      :key="index"
      class="p-4 md:p-10 w-full md:w-1/2">
      <router-link :to="h.url">
      <div class="hover:bg-primaryDark">
        <img class="hover:bg-primaryDark z-0" :src="h.imgUrl" />
      </div>
      <div class="text-xl pt-4 leading-7">
        {{ h.name }}
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
              imgUrl: 'https://res.cloudinary.com/db3h7h0pa/image/upload/v1656699830/vedika-portfolio/IMG_20201022_174839_uqfu2r.jpg',
              content:`The @vitwit_  team has been rocking it and contributing to all layers of the stack: #tendermint, #cosmossdk, and #ibc. Mad props, and look forward to continuing to work with y'all!`
          },
          {
              id:2,
              name:`Static IoT Pvt Ltd`,
              title:`Static IoT PvtLtd`,
              url:`/static-iot`,
              imgUrl:'https://res.cloudinary.com/db3h7h0pa/image/upload/v1656699822/vedika-portfolio/IMG_20200928_131917_fisei6.jpg',
              content: `I can also attest. @vitwit_ is one of the best dev teams in the space and we are so proud and grateful to work with them... Excited they are supporting Akash as well.`
          },
          {
              id:3,
              name:`YS Architects`,
              title:`YS Architects`,
              url:`/ysa`,
              imgUrl:'https://res.cloudinary.com/db3h7h0pa/image/upload/v1656699822/vedika-portfolio/IMG_20200928_131917_fisei6.jpg',
              content: `I can also attest. @vitwit_ is one of the best dev teams in the space and we are so proud and grateful to work with them... Excited they are supporting Akash as well.`
          },
          {
              id:4,
              name:`MomMade Organic `,
              title:`Mom Made Organic`,
              url:`/mom-made`,
              imgUrl:'https://res.cloudinary.com/db3h7h0pa/image/upload/v1656699822/vedika-portfolio/IMG_20200928_131917_fisei6.jpg',
              content: `I can also attest. @vitwit_ is one of the best dev teams in the space and we are so proud and grateful to work with them... Excited they are supporting Akash as well.`
          },
      ],

      webProjects: [
          {
              id:1,
              name:`Vitwit`,
              title:`Vitwit`,
              url:`/vitwit`,
              imgUrl: 'https://res.cloudinary.com/db3h7h0pa/image/upload/v1656699830/vedika-portfolio/IMG_20201022_174839_uqfu2r.jpg',
              content:`The @vitwit_  team has been rocking it and contributing to all layers of the stack: #tendermint, #cosmossdk, and #ibc. Mad props, and look forward to continuing to work with y'all!`
          },
          {
              id:2,
              name:`Nomadspaces`,
              title:`Nomadspaces`,
              url:`/nomadspaces`,
              imgUrl:'https://res.cloudinary.com/db3h7h0pa/image/upload/v1656699822/vedika-portfolio/IMG_20200928_131917_fisei6.jpg',
              content: `I can also attest. @vitwit_ is one of the best dev teams in the space and we are so proud and grateful to work with them... Excited they are supporting Akash as well.`
          },
          {
              id:3,
              name:`JNEC`,
              title:`JNEC`,
              url:`/jnec`,
              imgUrl:'https://res.cloudinary.com/db3h7h0pa/image/upload/v1656699822/vedika-portfolio/IMG_20200928_131917_fisei6.jpg',
              content: `I can also attest. @vitwit_ is one of the best dev teams in the space and we are so proud and grateful to work with them... Excited they are supporting Akash as well.`
          },
          {
              id:4,
              name:`ASK Organic`,
              title:`ASK Organic`,
              url:`/ask-organic`,
              imgUrl:'https://res.cloudinary.com/db3h7h0pa/image/upload/v1656699822/vedika-portfolio/IMG_20200928_131917_fisei6.jpg',
              content: `I can also attest. @vitwit_ is one of the best dev teams in the space and we are so proud and grateful to work with them... Excited they are supporting Akash as well.`
          },
          {
              id:5,
              name:`Keychron`,
              title:`Keychron`,
              url:`/keychron`,
              imgUrl:'https://res.cloudinary.com/db3h7h0pa/image/upload/v1656699822/vedika-portfolio/IMG_20200928_131917_fisei6.jpg',
              content: `I can also attest. @vitwit_ is one of the best dev teams in the space and we are so proud and grateful to work with them... Excited they are supporting Akash as well.`
          },
          {
              id:6,
              name:`Amul Website Redesign`,
              title:`Amul Website Redesign`,
              url:`/amul-redesign`,
              imgUrl:'https://res.cloudinary.com/db3h7h0pa/image/upload/v1656699822/vedika-portfolio/IMG_20200928_131917_fisei6.jpg',
              content: `I can also attest. @vitwit_ is one of the best dev teams in the space and we are so proud and grateful to work with them... Excited they are supporting Akash as well.`
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