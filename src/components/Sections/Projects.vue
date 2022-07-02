<template>
  <div class="flex flex-row flex-wrap md:px-10">
    <div 
      v-for="(p, index) in projects"
      :key="index"
      class="p-4 md:p-10 w-full md:w-1/2">
      <router-link :to="p.url">
      <div>
        <img class="hover:bg-primaryDark" :src="p.imgUrl" />
      </div>
      <div class="text-xl">
        {{ p.name }}
      </div>
      </router-link>
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
              name:`Jack Zampolin`,
              title:`Co-Founder Product SOMMELIER`,
              url:`/project1`,
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