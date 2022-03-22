<template>
  <div class="py-12 lg:py-24 2xl:py-32 relative">
    <!-- <div
      class="
        absolute
        bgMove
        opacity-40
        lg:opacity-30
        right-0
        top-0
        transform
        -translate-y-1/2
      "
    >
      <g-image
        class="w-full"
        src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1634208627/Vitwit%20Website/backgrounds/waves/wave_set2_dm6ktx.png"
      ></g-image>
    </div> -->
    <div class="w-full">
      <div class="px-4 lg:container relative">
        <div
          class="
            flex flex-row
            justify-center
            items-center
            space-x-8
            text-white
            font-semibold
            leading-tight
            text-4xl
            lg:text-6xl
            2xl:text-6xl
            tracking-wide
          "
        >
          <div class="relative">
            <XyzTransition appear-visible>
              <p xyz="fade down ease-in-out-back">
                <GradientHeading>Products & Services</GradientHeading>
              </p></XyzTransition
            >
          </div>
        </div>
        <!-- Content -->
        <div
          class="
            flex flex-col
            space-y-2
            lg:space-y-0 lg:flex-row lg:space-x-10
            text-gray-200
            mt-10
          "
        >
          <div class="w-full flex flex-row lg:flex-col space-x-2 lg:space-x-0 lg:space-y-6 lg:space-y-8 lg:w-1/3">
            <!--  -->
            <div class="relative w-full flex flex-col">
              <g-link
              to="/products/aneka"
                class="
                  w-full
                  h-full
                  flex flex-col
                  justify-center
                  items-center
                  rounded
                  z-40
                "
              >
                <div class="w-full h-full">
                  <g-image
                    class="w-full h-full object-cover"
                    src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1639293662/Vitwit%20Website/lander/1._Aneka_card_vitwit_ortigan_yrlvyk.png"
                  ></g-image>
                </div>
              </g-link>
            </div>
            <!--  -->
            <div class="relative w-full flex flex-col">
              <g-link
                  to="/products/artha"
                class="
                  w-full
                  h-full
                  flex flex-col
                  justify-center
                  items-center
                  rounded
                  z-40
                "
              >
                <div class="w-full h-full">
                  <g-image
                    class="w-full h-full object-cover"
                    src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1639293646/Vitwit%20Website/lander/2._Artha_card_vitwit_ortigan_uls5wd.png"
                  ></g-image>
                </div>
              </g-link>
            </div>
          </div>
          <div class="w-full lg:w-2/3">
            <div
              class="
                w-full
                flex
                lg:space-y-0 flex-row
                space-x-2
                lg:space-x-8
                mt-4
                lg:mt-0
              "
            >
              <div class="relative w-full flex flex-col">
                <g-link
                to="/services/cosmos-sdk-module-developement"
                  class="
                    w-full
                    h-full
                    flex flex-col
                    justify-center
                    items-center
                    rounded
                    z-40
                  "
                >
                  <div class="w-full h-full">
                    <g-image
                      class="w-full h-full object-cover"
                      src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1639293655/Vitwit%20Website/lander/3._Cosmos_card_vitwit_ortigan_p7gwgf.png"
                    ></g-image>
                  </div>
                </g-link>
              </div>
              <div class="relative w-full flex flex-col">
                <g-link
                to="/services/monitoring-and-alert-tool"
                  class="
                    w-full
                    h-full
                    flex flex-col
                    justify-center
                    items-center
                    rounded
                    z-40
                  "
                >
                  <div class="w-full h-full">
                    <g-image
                      class="w-full h-full object-cover"
                      src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1639293646/Vitwit%20Website/lander/4._Blockchain_r_d_card_vitwit_ortigan_bjcqxl.png"
                    ></g-image>
                  </div>
                </g-link>
              </div>
            </div>
            <div class="relative w-full mt-4">
              <g-link class="z-40"
                to="/services/monitoring-and-alert-tool">
                    <g-image
                      class="w-full h-full object-cover"
                      src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1639293647/Vitwit%20Website/lander/5._Monitoring_Alert_card_vitwit_ortigan_epfnva.png"
                    ></g-image>
                
                </g-link>
                  </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GradientHeading from "../Title/GradientTitle.vue";


export default {
  components: { GradientHeading },
  data() {
    return {};
  },
};
</script>
<style scoped>
.navBg {
  backdrop-filter: saturate(180%) blur(5px);
  background-color: rgba(29, 28, 28, 0.729);
}
</style>
