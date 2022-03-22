<template>
  <div class="h-72">
    <div class="relative px-6 flex justify-center">
      <div class="rounded absolute h-24 top-0 mt-10 w-full bg-gradient-to-br from-gray-800 to-dark"></div>
      <g-link :to="blog.link">
      <div class="h-64 lg:h-52 w-full relative rounded mt-6 lg:mt-0 bottom-0">
        <g-image
          class="h-full w-full object-cover object-center cardImg rounded"
          :src="blog.thumbnail"
        ></g-image>
        <div class="absolute bottom-0 h-40 w-full text-white blurBg rounded">
          <div class="p-4 flex items-center justify-center h-full text-base lg:text-lg 2xl:text-2xl text-center font-medium">
            {{ blog.title.length > 80 ? blog.title.slice(0, 70) + '...' : blog.title  }}
          </div>
        </div>
        <div
          class="
            absolute
            -bottom-10
            flex flex-col
            w-full
            justify-center
            items-center
            rounded-sm
          "
        >
          <div
            class="
              text-sm
              bg-gradient-to-br
              from-gray-600
              to-gray-900
              rounded
              w-3/4
              text-center
              p-2
              text-gray-300
              2xl:text-lg
            "
          >
            {{ blog.author }}
          </div>
          <div class="flex flex-row text-xxs rounded font-light space-x-2 mt-2 h-4">
            <span v-for="(c, index) in blog.categories" :key="index">
              <p
                class="
                  text-center
                  bg-gradient-to-br
                  from-gray-600
                  to-gray-900
                  p-1
                  text-gray-300
                  rounded
                "
              >
                {{ c }}
              </p>
            </span>
          </div>
        </div>
      </div>
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blog"],
};
</script>

<style>
.blurBg {
  backdrop-filter: saturate(1.5) blur(12px);
  background-color: rgba(110, 110, 110, 0.5);
}
* {
  transition: 0.4s ease;
}
.card {
  border-radius: 0px;
  /* overflow: hidden; */
}
.card:hover .cardImg {
  transform: translateY(-30px);
}
</style>