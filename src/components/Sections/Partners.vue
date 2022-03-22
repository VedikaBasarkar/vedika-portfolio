<template>
  <div class="py-12 2xl:py-32 bg-dark">
    <div class="w-full relative">
      <div class="absolute opacity-60 left-0 top-0 h-full transform lg:-translate-x-1/2 lg:-translate-y-1/4">
      <g-image class="min-h-screen w-full" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1634126756/Vitwit%20Website/backgrounds/Blobs-Free/rhs_blue_free_2_wemczk.svg"></g-image>
    </div>
     <div class="block lg:hidden absolute opacity-40 lg:opacity-30 right-0 top-0 transform rotate-180 -translate-y-1/6">
      <g-image class=" w-full" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1634208627/Vitwit%20Website/backgrounds/waves/wave_set2_dm6ktx.png"></g-image>
    </div>
      <div
        class="
          px-4
          lg:container
          flex flex-col
          justify-center
          items-center
          relative
        "
      >
        <div class="relative">
          <XyzTransition appear-visible>
            <p xyz="fade down ease-in-out-back">
              <GradientHeading>Partners & Words</GradientHeading>
            </p></XyzTransition
          >
        </div>
        <div
          class="grid grid-flow-row grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-24 my-6 lg:my-10"
        >
          <div
            class="w-full h-12 md:h-24 2xl:h-40 flex items-center justify-center place-self-stretch overflow-hidden"
          >
            <g-image
              class="h-6 md:h-full"
              src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1633611949/Vitwit%20Website/partners_logo/akash_network_white.svg"
            ></g-image>
          </div>
          <div
            class="w-full h-12 md:h-24 2xl:h-40 flex items-center justify-center place-self-stretch"
          >
            <g-image
            class="h-12 md:h-full 2xl:h-24"
              src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1633612820/Vitwit%20Website/partners_logo/regen_network_white.png"
            ></g-image>
          </div>
          <div
            class="w-full h-12 md:h-24 2xl:h-40 flex items-center justify-center place-self-stretch overflow-hidden"
          >
            <g-image
            class="h-8 md:h-full"
              src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1634190136/Vitwit%20Website/partners_logo/Chainflow_Logo_white_cym9wg.svg"
            ></g-image>
          </div>
          <div
            class="w-full h-12 md:h-24 2xl:h-40 flex items-center justify-center place-self-stretch overflow-hidden"
          >
            <g-image
            class="h-6 md:h-full"
              src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1634191611/Vitwit%20Website/partners_logo/Polygon_Logo_white_z3syop.svg"
            ></g-image>
          </div>
        </div>
        <div class="relative">
          <div
            class="
              grid grid-flow-row grid-cols-1
              lg:grid-cols-3
              gap-4
              lg:gap-6
            "
          >
          <div v-for="(t, index) in testimonials" :key="index">
            <div class="partnerCardBlurBg text-gray-300 flex flex-col justify-between p-4 rounded h-full">
              <div class="text-sm">"{{ t.text }}"</div>
              <div class="text-right text-secondary mt-4">{{ t.name }}</div>
              <div class="text-right text-secondary text-sm">{{ t.title }}</div>
            </div>
          </div>
            <!-- <div
              v-for="(p, index) in partners"
              :key="index"
              class="
                h-auto
                w-full
              "
            >
              <PartnersCrad :partner="p"></PartnersCrad>
            </div> -->
          </div>
        </div>
        <!-- Know More -->
         <div
          class="mt-6 lg:px-24 text-gray-400 text-lg font-light text-justify 2xl:text-xl 2xl:mt-12"
        >
          <g-link to="/partners" class="flex flex-row w-full items-center">
            <p>See everyone connected to us</p>
            <p>
              <g-image
                 class="ml-2 h-4"
                  src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1639306692/Vitwit%20Website/Global_utility_icon/9_gotopagetwo_icon_dormant_vitwit_ortigan_h9fvkv.svg"
                ></g-image>
            </p>
          </g-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PartnersCrad from "../Cards/PartnersCrad.vue";
import GradientHeading from "../Title/GradientTitle.vue";
export default {
  components: {
    GradientHeading,
    PartnersCrad,
  },
  data() {
    return {
      partners: [
          {
              id:1,
              name:'Greg Osuri',
              title:'Co-Founder & CEO Akash Network',
              // image:'https://images.unsplash.com/photo-1549473448-5d7196c91f48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
              content: 'I met @anilcse_ over a PR on GitHub in 2019 and the @vitwit_ team IRL later that winter. Since then, our partnership continues to bring incredible value to @akashnet_ and the broader @cosmos ecosystem Happy birthday @vitwit_'
          },
          {
              id:2,
              name:'Jack Zampolin',
              title:'Co-Founder Product SOMMELIER',
              // image:'https://images.unsplash.com/photo-1549473448-5d7196c91f48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
              content:`The @vitwit_  team has been rocking it and contributing to all layers of the stack: #tendermint, #cosmossdk, and #ibc. Mad props, and look forward to continuing to work with y'all!`
          },
          {
              id:3,
              name:'Greg Osuri',
              title:'Co-Founder & CEO Akash Network',
              // image:'https://images.unsplash.com/photo-1549473448-5d7196c91f48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
              content: `Just had an amazing meeting with the @Vitwit_India team, happy to announce we'll be engaging them to complement our development efforts. Their work with @regen_network is a testament to hard work and talent.`
          },
      ],
      testimonials: [
        {
          id: 1,
          text: `Vitwit is more than just a core contributor to the Cosmos SDK, and Regen Ledger.  They are a foundational community member of Regen Network and the broader Cosmos Ecosystem.  They have been a pleasure to work with from day one.  Overdelivering, under-promising and always being willing to go the extra mile.`,
          name: `Gregory Landua`,
          title: `CEO RND Inc, and co-founder of Regen Network`
        },
        {
          id: 2,
          text: `Just had an amazing meeting with the @Vitwit_India team, happy to announce we'll be engaging them to complement our development efforts. Their work with @regen_network is a testament to hard work and talent.`,
          name: `Greg Osuri`,
          title: `Co-founder & CEO of Akash Network`
        },
        {
          id: 3,
          text: `Spl. thanks to our friends at @vitwit_ / WitVal, who deployed @aneka_io for OmniFlix!
                FlixNet-2 saw a lot:
                - 200+ validators bootstrap a chain in 1min
                - patch to fix the mismatch of IBC versions
                - high storage consumption
                & the best is yet to come!`,
          name: `OmniFlix Network`,
          title: `Team OmniFlix`
        }
      ]
    };
  },
};
</script>
<style scoped>
.partnerCardBlurBg {
  backdrop-filter: saturate(2.5) blur(20px);
  background: linear-gradient(
    20deg,
    rgba(236, 236, 241, 0.2) 0%,
    rgba(27, 17, 17, 0.22) 100%
  );
}
</style>