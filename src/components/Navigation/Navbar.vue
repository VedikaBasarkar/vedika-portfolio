<template>
    <div style="">
        <transition name="fade">
        <nav class="top-0 w-full mb-6 z-10" id="mainNav" style="transition-duration: 0.5s;z-index:9999999;">
            <div class="navBg h-16"></div>
            <div class="bg-white top-0 absolute w-full z-40">
                <div class="flex flex-row justify-between h-16 px-10 md:my-6">
                    <g-link to="/" class="md:ml-10">
                      <p class="font-primary text-3xl my-2 mr-8"> Vedika</p>
                    </g-link>
                    <div class="w-full flex flex-row items-center justify-end mr-10">
                        <div class="hidden md:block ml-4">
                            <div class="flex items-center font-light font-primary">
                                <router-link to="/about" exact-active-class="text-primary"><p class="m-8 hover:text-primary font-primary">About</p></router-link>
                                <!-- <router-link to="/projects" exact-active-class="text-primary"><p class="m-8 hover:text-primary font-primary">Projects</p></router-link>
                                <router-link to="/hobby" exact-active-class="text-primary"><p class="m-8 hover:text-primary font-primary">Hobby</p></router-link>
                                <router-link to="/contact" exact-active-class="text-primary"><p class="m-8 hover:text-primary font-primary">Contact</p></router-link> -->
                            </div>
                        </div>
                    </div>
                    <!-- Toggler -->
                    <div class="md:hidden mt-4">
                        <button  type="button" name="nav-button" class="block text-gray-500 hover: focus: focus:outline-none">
                        <svg @click="openNav()" class="h-6 w-6 fill-current" viewBox="0 0 24 24" v-if="!isOpen">
                            <path fill="#1f1d1c" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                        </svg>
                        <svg  @click="closeNav()" class="h-6 w-6 fill-current" viewBox="0 0 24 24" v-if="isOpen">
                            <path fill="#1f1d1c" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                        </svg>
                        </button>
                    </div>
                </div>
                <div :class="isOpen ? 'block' : 'hidden'" class="navBg flex justify-center h-screen">
                    <transition
                        :duration="{ enter: 800, leave: 800 }"
                        name="fade"
                        >
                        <div class="flex flex-col justify-center" v-show="showItems" @click="closeNav()">
                            <router-link to="/" exact-active-class="text-primary" class="px-2 py-1 text-darkPrimary font-semibold text-center  rounded navItem font-primary">Home</router-link>
                            <router-link to="/about" exact-active-class="text-primary" class="mt-1 block px-2 py-1 text-darkPrimary text-center font-semibold rounded navItem font-primary">About Us</router-link>
                            <!-- <router-link to="/project" exact-active-class="text-primary" class="mt-1 block px-2 py-1 text-darkPrimary text-center font-semibold rounded navItem font-primary">Projects</router-link>
                            <router-link to="/hobby" exact-active-class="text-primary" class="mt-1 block px-2 py-1 text-darkPrimary text-center font-semibold rounded navItem font-primary">Hobby</router-link>
                            <router-link to="/contact" exact-active-class="text-primary" class="mt-1 block px-2 py-1 text-darkPrimary text-center font-semibold rounded navItem font-primary">Contact</router-link> -->
                        </div>
                    </transition>
                </div>
            </div>
        </nav>
        </transition>
    </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
export default {
  data() {
    return {
      isOpen: false,
      showItems:false,
      scrollPx: '',
      t1: ''
    }
  },

  mounted(){
      gsap.registerPlugin(ScrollTrigger)
      window.addEventListener('scroll', () => {
      if(process.isClient){
          this.scrollPx = window.scrollY
      }
    })
  },
  methods:{
      openNav(){
          this.isOpen = true
          this.showItems = true
          document.getElementById("mainNav").style.background = "#fff";
                this.t1 = gsap.timeline({ paused:true, reversed: true })
                this.t1.to('.navItem',{ease:'elastic', y: -10, duration:4, stagger:0.1})
                this.t1.play();
      },
      closeNav(){
          this.showItems = false
          this.isOpen = false
          document.getElementById("mainNav").style.background = "";
          this.t1.reverse();
      },
      updateScroll() {
           this.scrollPosition = window.scrollY
           if(this.scrollPosition > 100){
               document.getElementById("mainNav").style.background = "#1a202c";
               document.getElementById("mainNav").style.height = "70px";
           }
           else{
               document.getElementById("mainNav").style.background = "";
           }
        }
  }
}
</script>
<style scoped>
.navBg{
    /* backdrop-filter: saturate(180%) blur(5px); */
    /* background-color: rgba(240,240,240,1); */
    background: #fff;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>