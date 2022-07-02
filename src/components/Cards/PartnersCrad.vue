<template>
  <g-link :to="partner.url">
  <div class="partnerCardBlurBg text-gray-300 flex flex-col justify-between p-4 rounded h-full">
    <div class="text-xs lg:text-base font-light 2xl:text-lg ">
        <p>
          {{partner.content}}
        </p>
      </div>
      <div class="flex justify-between items-end">
        <a href="" target="__blank">
          <g-image class="h-6" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1639296428/Vitwit%20Website/Global_utility_icon/4_twitter_Social_icon_green_vitwit_ortigan_ahjzic.svg"></g-image>
        </a>
        <div class="flex flex-col text-right items-end space-x-4 mt-4">
            <p class="font-medium text-secondary">{{ partner.name }}</p>
            <p class="text-sm">{{ partner.title }}</p>
        </div>
      </div>
  </div>
  </g-link>
</template>

<script>
export default {
  props: ["partner"],
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
