<template>
  <div class="bg-dark relative overflow-hidden font-primary">
      <Navbar/>
        <transition name="fade" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut" mode="out-in" appear>
          <main>
            <slot></slot>
          </main>
        </transition>

        <div
        v-if="scrollPx > 150"
        class="scrollToTopBlurBg fixed rounded bottom-0 right-0 mr-4 mb-4 2xl:mb-8 2xl:mr-8 justify-center items-center"
        style="z-index:999999; transition: ease all 0.5s;animation-timing-function: ease-in-out"
      >
        <button
          @click="scrollToTop()"
          class=" flex justify-center items-center w-10 h-10 rounded"
        >
        hi
        </button>
        </div>
      <Footer/>
  </div>
</template>

<script>
import Navbar from '~/components/Navigation/Navbar.vue'
import Footer from '~/components/Navigation/Footer.vue'
export default {
    components:{
        Navbar,
        Footer,
    },
    data() {
      return{
        scrollPx: 0,
      }
    },
     mounted() {
    window.addEventListener("scroll", () => {
      this.scrollPx = window.scrollY;
    });
  },
   methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
}
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
.scrollToTopBlurBg {
  backdrop-filter: saturate(180%) blur(6px);
  background-color: rgba(73, 72, 72, 0.48);
}
</style>