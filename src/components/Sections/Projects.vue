<template>
<div>
  <!-- Ui Ux Project -->
  <div class="text-white text-2xl md:text-4xl px-6 md:px-20 md:pt-10 font-bold"></div>
  <div class="flex flex-row flex-wrap md:px-10 z-10">
    <div 
      v-for="(w, index) in webProjects"
      :key="index"
      class="p-4 md:p-10 w-full md:w-1/2 flex flex-col items-center"
      >
          <div class="rounded-lg">
            <g-link :to="w.url">
              <img class="rounded-3xl z-0 shadow-md hover:shadow-none" :src="w.imgUrl" />
            </g-link>
          </div>
          <div class="text-2xl md:text-3xl pt-4 leading-tight font-normal text-title">
            <g-link :to="w.url">{{ w.name }}</g-link>
          </div>
          <div class="font-extralight text-xl text-center">
            <!-- {{ w.info }} -->
          </div>
    </div>
  </div>
  <!-- <div class="md:mx-20 my-2 md:my-10">
    <div class="horizontal-divider w-full" />
  </div> -->
  <!-- Hobbies  -->
  <div class="z-10">
    <div class="flex flex-row flex-wrap md:px-10">

    <div class="p-4 md:p-10 w-full md:w-1/2 flex flex-col justify-center items-center">
      <div class="rounded-lg">
        <g-link to="/photography">
          <img class="rounded-3xl z-0 shadow-md hover:shadow-none" src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1650085785/website/photography/IMG_0039_bsvozt.jpg" />
        </g-link>
      </div>
      <div class="text-3xl md:text-4xl pt-4 leading-tight font-extralight text-center text-title">
        <g-link to="/photography">Photography</g-link>
      </div>
    </div>


    <div class="p-4 md:p-10 w-full md:w-1/2 flex flex-col justify-center items-center">
      <div class="rounded-lg">
        <g-link to="/hobby">
          <img class="rounded-3xl z-0 shadow-md hover:shadow-none" src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1650085920/website/photography/IMG_0967_dha9oj.jpg" />
        </g-link>
      </div>
      <div class="text-3xl md:text-4xl pt-4 leading-tight font-extralight text-center text-title">
        <g-link to="/hobby">Hobbies and Artworks</g-link>
      </div>
    </div>

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
              info:'Designed solution for the Digital Well Being of human',
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
              name:`JNEC Website`,
              title:`JNEC`,
              url:`/jnec`,
              imgUrl:'https://res.cloudinary.com/db3h7h0pa/image/upload/v1662381061/website/jnec/a1_jynfak.jpg',
          },
          {
              id:4,
              name:`Keychron Website`,
              title:`Keychron`,
              url:`/keychron`,
              imgUrl:'https://res.cloudinary.com/db3h7h0pa/image/upload/v1662443745/website/keychron/a1_vhffx2.jpg',
          },
      ],

    };
  },
};
</script>
<style scoped>
.text-title{
    background: linear-gradient(to right,#f8485e, #ffac41);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}
.horizontal-divider{
  /* width: 200px; */
  height: 3px;
  margin: 15px 0px;
  border-radius: 10px;
  background: linear-gradient(to left, #ffac41, #f8485e);
}
</style>