<template>
  <div class="py-12 lg:py-24 2xl:py-32 relative">
    <div class="absolute opacity-40 lg:opacity-30 right-0 top-0 transform rotate-180 -translate-y-1/3 -translate-x-1/2">
      <g-image class=" w-full" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1642421133/Vitwit%20Website/backgrounds/waves/wave_set2_dm6ktx-min_vy7erx.png"></g-image>
    </div>
    <div class="w-full">
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
        <div class="w-full">
          <!-- Content -->
          <div class="flex w-full justify-center items-center text-center p-4">
            <div
              class="
                  flex flex-col
                  text-white
                "
            >
              <div
                class="relative"
              >
                <XyzTransition appear-visible>
                  <p xyz="fade down ease-in-out-back">
                    <GradientHeading>Ecosystem</GradientHeading>
                  </p></XyzTransition
                >
              </div>
            </div>
          </div>
          <div
            class="flex flex-col w-full justify-center items-center text-center p-4 lg:px-24"
          >
            <div
              class="
                  flex flex-col
                  text-gray-200 text-sm lg:text-base 2xl:text-2xl font-light tracking-wide
                "
            >
              We are primarily working on the Cosmos community and we have our
              contributions to the Ethereum community as well. We offer Staking
              Infrastructure Service, Blockchain Research and Development
              service, Strategy and Execution of main net & test net launch,
              Monitoring and Alert Tools along with our own block explorer
              called Aneka.io.
            </div>
            <g-image class="w-80 md:w-56 mt-7" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1640160436/Vitwit%20Website/partners_logo/cosmos-logo-white.svg" />
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
};
</script>
<style scoped>
</style>
