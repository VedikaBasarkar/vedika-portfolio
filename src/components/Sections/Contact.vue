<template>
  <div class="py-12 lg:py-24 2xl:py-32 bg-dark relative text-gray-200 overflow-hidden">
    <div class="absolute opacity-40 left-0 top-0 h-full transform">
      <g-image
        class="min-h-screen w-full"
        src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1634116110/Vitwit%20Website/backgrounds/Footer_Left_mlylsx.svg"
      ></g-image>
    </div>
    <div class="absolute opacity-40 right-0 top-0 h-full">
      <g-image
        class="min-h-screen w-full"
        src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1634116110/Vitwit%20Website/backgrounds/Footer_Right_zh9hcu.svg"
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
        <div class="relative">
          <XyzTransition appear-visible>
            <p xyz="fade down ease-in-out-back">
              <GradientHeading>Community</GradientHeading>
            </p></XyzTransition
          >
        </div>
        <div class="text-center text-sm lg:text-lg 2xl:text-2xl my-4 lg:my-8 font-light tracking-wide">
          Be a part of this inquisitive community, join the evergrowing Vitwit
          network, hop in and onto our discord server or connect with on platform
          you access the most
        </div>
        <div class="my-4 lg:my-8 2xl:my-10">
            <div class="relative ">
                <div class="h-full w-full relative z-10">
                    <g-image class="h-full w-full" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1639293647/Vitwit%20Website/lander/6.1._Community_backdrop_vitwit_ortigan_ng7a85.png"></g-image>
                    <div class="floating h-48 lg:h-64 w-56 lg:w-78 absolute top-0 transform translate-y-1/2 translate-x-1/3 lg:translate-x-1/4 z-40">
                        <g-image class="h-full w-full" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1639293646/Vitwit%20Website/lander/6._Community_Discord_floater_vitwit_ortigan_l1dygv.png"></g-image>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-flow-row grid-cols-6 gap-2 lg:gap-3 my-6 -mt-16 lg:-mt-24 relative z-50">
          <a
            href="https://www.linkedin.com/company/vitwit/"
            target="__blank"
            class="w-full h-6 md:h-8 2xl:h-12 flex items-center justify-center place-self-stretch overflow-hidden"
          >
            <g-image
              class="h-6 md:h-8 2xl:h-12"
              src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1633601344/Vitwit%20Website/icons/linkedin.svg"
            ></g-image>
          </a>
          <a
            href="https://github.com/vitwit"
            target="__blank"
            class="w-full h-6 md:h-8 2xl:h-12 flex items-center justify-center place-self-stretch overflow-hidden"
          >
            <g-image
              class="h-6 md:h-8 2xl:h-12"
              src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1633601344/Vitwit%20Website/icons/github.svg"
            ></g-image>
          </a>
          <a
            href=""
            target="__blank"
            class="w-full h-6 md:h-8 2xl:h-12 flex items-center justify-center place-self-stretch overflow-hidden"
          >
            <g-image
              class="h-6 md:h-8 2xl:h-12"
              src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1639393217/Vitwit%20Website/icons/telegram.svg"
            ></g-image>
          </a>
          <a
            href="https://twitter.com/vitwit_"
            target="__blank"
            class="w-full h-6 md:h-8 2xl:h-12 flex items-center justify-center place-self-stretch overflow-hidden"
          >
            <g-image
              class="h-6 md:h-8 2xl:h-12"
              src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1633601344/Vitwit%20Website/icons/twitter.svg"
            ></g-image>
          </a>
          <a
            href="https://www.instagram.com/vitwitindia/"
            target="__blank"
            class="w-full h-6 md:h-8 2xl:h-12 flex items-center justify-center place-self-stretch overflow-hidden"
          >
            <g-image
              class="h-6 md:h-8 2xl:h-12"
              src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1633601344/Vitwit%20Website/icons/instagram.svg"
            ></g-image>
          </a>
          <a
            href="https://www.facebook.com/vitwitindia/"
            target="__blank"
            class="w-full h-6 md:h-8 2xl:h-12 flex items-center justify-center place-self-stretch overflow-hidden"
          >
            <g-image
              class="h-6 md:h-8 2xl:h-12"
              src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1633601344/Vitwit%20Website/icons/facebook.svg"
            ></g-image>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      partners: [
        {
          id: 1,
          name: "Vaibhav Dhilpe",
          title: "Co-Founder & CEO",
          image:
            "https://images.unsplash.com/photo-1549473448-5d7196c91f48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
          content:
            "Be a part of this inquisitive community, join the evergrowing Vitwit network, hop in and onto our discord server or connect with on platform you access the most.........",
        },
        {
          id: 2,
          name: "Vaibhav Dhilpe",
          title: "Co-Founder & CEO",
          image:
            "https://images.unsplash.com/photo-1549473448-5d7196c91f48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
          content:
            "Be a part of this inquisitive community, join the evergrowing Vitwit network, hop in and onto our discord server or connect with on platform you access the most.........",
        },
        {
          id: 3,
          name: "Vaibhav Dhilpe",
          title: "Co-Founder & CEO",
          image:
            "https://images.unsplash.com/photo-1549473448-5d7196c91f48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
          content:
            "Be a part of this inquisitive community, join the evergrowing Vitwit network, hop in and onto our discord server or connect with on platform you access the most.........",
        },
      ],
    };
  },
};
</script>
<style scoped>
.floating {
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

@keyframes floating {
    from { margin-top: 0px; }
    65%  { margin-top: 15px; }
    to   { margin-top: 0px; }
}

</style>