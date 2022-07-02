<template>
  <div class="py-4 lg:py-8 2xl:py-24 relative">
    <div
      class="
        absolute
        opacity-30
         lg:opacity-60
        left-0
        top-0
        h-full
        transform
        -translate-y-1/4
        lg:translate-x-1/2 lg:-translate-y-1/2
      "
    >
      <g-image
        class="min-h-screen w-full"
        src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1634126756/Vitwit%20Website/backgrounds/Blobs-Free/rhs_blue_free_2_wemczk.svg"
      ></g-image>
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
          <div
            class="
              flex
              flex-col
              w-full
              justify-center
              items-center
              text-center
              p-4
              py-12
              customBlurBg
              rounded-lg
            "
          >
            <div class="flex flex-col text-gray-200">
              <p class="text-left font-medium text-2xl tracking-wide">
                innovating in
              </p>
              <div class="relative">
                <XyzTransition appear-visible>
                  <p xyz="fade down ease-in-out-back">
                    <GradientHeading>Blockchain + AI</GradientHeading>
                  </p></XyzTransition
                >
              </div>
              <p class="text-right font-medium text-2xl tracking-wide">
                solutions
              </p>
            </div>
            <p class="mt-6 text-gray-200 text-sm lg:text-base">
                            We love to engage in research and development of the tech that
              helps businesses, economies, and people to sustain and grow. We
              want to build solutions and services for decentralization, web3.0,
              and AI. Our Vision to build the products and services that
              transform, empower, and support businesses, economies, and people.
            </p>
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
