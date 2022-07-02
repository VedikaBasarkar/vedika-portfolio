<template>
  <div class="py-12 2xl:py-32 bg-dark">
    <div class="w-full relative">
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
        <div
          class="
            flex flex-row
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
          <div class="titleHover">
            <XyzTransition appear-visible>
                <p xyz="fade down ease-in-out-back">
                  <GradientHeading>Blogs</GradientHeading>
                </p></XyzTransition
              >
          </div>
        </div>
        <!-- Blogs -->
        <div class="relative">

          <div class="absolute bottom-0 w-full text-white blurBg rounded">
            <div
              class="
                hidden
                lg:block
                absolute
                h-32
                lg:h-56
                w-full
                blurBg2
                rounded-lg
                bottom-0
                ml-6
              "
            ></div>
          </div>
          <div
            class="
              grid grid-flow-row grid-cols-1
              lg:grid-cols-3
              lg:gap-6
              mt-10
              pb-10
            "
          >
            <div
              v-for="(blog, index) in blogs"
              :key="index"
              class="
              hidden lg:block
                my-10
                md:my-0
                h-auto
                w-full
                shadow-xl
                card
                rounded
                mt-10
                lg:mt-0
              "
            >
              <BlogCard :blog="blog"></BlogCard>
            </div>
            <div
              v-for="(blog) in blogs.slice(0,1)"
              :key="blog.id"
              class="
              block lg:hidden
                my-10
                h-auto
                w-full
                shadow-xl
                card
                rounded
              "
            >
              <BlogCard :blog="blog"></BlogCard>
            </div>
          </div>
        </div>
        <!-- Know More -->
        <div
          class="mt-4 lg:px-24 text-gray-400 text-lg font-light text-justify 2xl:text-xl 2xl:mt-12"
        >
          <g-link to="/blogs" class="flex flex-row w-full items-center">
            <p>Read more blogs</p>
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
import axios from "../../axios";
import BlogCard from "../Cards/BlogCard.vue";
import GradientHeading from "../Title/GradientTitle.vue";
export default {
  components: {
    BlogCard,
    GradientHeading
  },
  data() {
    return {
      blogs: [],
      feeds: [],
    };
  },
  created() {
    axios
      .get(
        " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fvitwit"
      )
      .then((res) => {
        this.blogs = res.data.items.slice(0, 3);
      });
  },
};
</script>
