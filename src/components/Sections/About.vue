<template>
  <div class="relative">
    <!-- <g-image
      class="absolute opacity-40 lg:opacity-20 top-0 w-full transform translate-x-1/6 lg:-translate-y-1/6"
      src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1634208626/Vitwit%20Website/backgrounds/waves/wave_set1_tp5zms.png"
    ></g-image> -->
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
        <div class="flex flex-col w-full items-center text-center">
          <div
            class="
              flex flex-row
              space-x-8
              text-gray-200
              font-semibold
              leading-tight
              text-4xl
              lg:text-6xl
              2xl:text-6xl
              tracking-wide
            "
          >
            <div class="relative gradientHeading">
              <XyzTransition appear-visible>
                <p xyz="fade down ease-in-out-back">
                  <GradientHeading>About Us</GradientHeading>
                </p></XyzTransition
              >
            </div>
          </div>
          <!-- Content -->
          <div
            class="
              text-gray-300 text-sm
              lg:text-base
              2xl:text-2xl
              p-4
              2xl:p-8
              lg:py-10
              2xl:py-20 2xl:px-24
              tracking-wide
              font-light
              rounded
              2xl:mt-8
            "
          >
            <p>
              We are a core tech company passionate about the research and
              development of technology solutions that transform businesses and
              people’s work styles. With the advent of decentralized
              infrastructure and blockchain technology, we believe there is a
              strong need to foresee and build solutions for blockchain
              startups, companies, and communities alike.
            </p>
          </div>
          <!-- <div class="flex flex-col lg:flex-row lg:space-x-6">
            <div
              class="w-full h-auto flex flex-col p-4 text-center font-medium customBlurBg text-gray-200 rounded-lg mt-4 2xl:text-xl"
            >
              <p>Pathbreakers</p>
              <p class="text-xs font-light 2xl:text-xl">
                We are initiators of the first to walk in and set the path for the
                exploration of new domains and technologies
              </p>
            </div>
            <div
              class="w-full h-auto flex flex-col p-4 text-center font-medium customBlurBg text-gray-200 rounded-lg mt-4 2xl:text-xl"
            >
              <p>Free Thinkers</p>
              <p class="text-xs font-light 2xl:text-xl">
                We are a group of free thinkers along with carrying various other personalities having one thing in common, which is Open-ness. We are open to transformation. We are welcoming to new ideas and approaches
              </p>
            </div>
          </div> -->
          <!-- Know More -->
          <div
            class="
              mt-6
              lg:px-24
              text-gray-400 text-lg
              font-light
              text-justify
              2xl:text-xl 2xl:mt-12
            "
          >
            <g-link to="/about-us" class="flex flex-row w-full items-center">
              <p>Know More</p>
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
  </div>
</template>
<script>
import GradientHeading from "../Title/GradientTitle.vue";
export default {
  components: { GradientHeading },
};
</script>
