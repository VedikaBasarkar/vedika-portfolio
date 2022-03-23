<template>
  <div>
    <transition name="fade">
      <nav
        v-if="hideNavOnScrollFunc()"
        class="fixed top-0 w-full mb-6 z-10"
        id="mainNav"
        style="transition-duration: 0.3s; z-index: 9999999"
      >
        <div
          class="h-16"
          :class="scrollPx > 50 ? 'shadow navBg' : ''"
          style="transition: ease all 0.4s"
        ></div>
        <div class="bg-transparent top-0 absolute w-full z-40">
          <div
            class="
              px-4
              md:container
              flex flex-row
              justify-between
              items-center
              h-16
            "
          >
            <div v-scroll-to="'#home'">
              <router-link to="/" class="flex flex-row items-center">
                <div class="w-32">
                  <g-image
                    alt="logo"
                    src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1639302733/Vitwit%20Website/vitwit_logo/0._logo_vitwit_ortigan_rbjh4x.svg"
                  ></g-image>
                </div>
                <!-- <p class="tracking-widest font-semibold text-2xl text-white">
                  Vitwit
                </p> -->
              </router-link>
            </div>
            <div class="w-full flex flex-row justify-end items-center">
              <div class="hidden lg:block ml-4">
                <div
                  class="flex items-center font-light text-gray-300"
                  style="transition: ease all 0.2s"
                >
                  <router-link
                    exact-active-class="text-secondary hover:text-secondary"
                    to="/"
                    class="ml-8 hover:font-semibold hover:text-gray-100 w-12"
                    ><p>Home</p></router-link
                  >
                  <router-link
                    exact-active-class="text-secondary hover:text-secondary"
                    class="
                      text-center
                      ml-8
                      hover:font-semibold hover:text-gray-100
                      w-20
                    "
                    to="/about-us"
                    ><p>About Us</p></router-link
                  >
                  <router-link
                    exact-active-class="text-secondary hover:text-secondary"
                    class="
                      text-center
                      ml-8
                      hover:font-semibold hover:text-gray-100
                      w-16
                    "
                    to="/services"
                    ><p>Services</p></router-link
                  >
                  <router-link
                    exact-active-class="text-secondary hover:text-secondary"
                    class="
                      text-center
                      ml-8
                      hover:font-semibold hover:text-gray-100
                      w-16
                    "
                    to="/products"
                    ><p>Products</p></router-link
                  >
                  <router-link
                    exact-active-class="text-secondary hover:text-secondary"
                    class="
                      text-center
                      ml-8
                      hover:font-semibold hover:text-gray-100
                      w-16
                    "
                    to="/partners"
                    ><p>Partners</p></router-link
                  >
                  <router-link
                    exact-active-class="text-secondary hover:text-secondary"
                    class="
                      text-center
                      ml-8
                      hover:font-semibold hover:text-gray-100
                      w-12
                    "
                    to="/blogs"
                    ><p>Blogs</p></router-link
                  >
                  <router-link
                    exact-active-class="text-secondary hover:text-secondary"
                    class="
                      text-center
                      ml-8
                      hover:font-bold hover:text-gray-100
                      w-12
                    "
                    to="/careers"
                    ><p>Careers</p></router-link
                  >
                  <router-link
                    exact-active-class="text-secondary hover:text-secondary"
                    class="
                      text-center
                      ml-8
                      hover:font-bold hover:text-gray-100
                      w-24
                    "
                    to="/contact"
                    ><p>Contact Us</p></router-link
                  >
                </div>
              </div>
            </div>
            <!-- Toggler -->
            <div class="lg:hidden">
              <button
                type="button"
                name="nav-button"
                class="block text-gray-500 hover: focus: focus:outline-none"
              >
                <svg
                  @click="openNav()"
                  class="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  v-if="!isOpen"
                >
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                </svg>
                <svg
                  @click="closeNav()"
                  class="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  v-if="isOpen"
                >
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            :class="isOpen ? 'block' : 'hidden'"
            class="bg-dark -mt-16 flex justify-center h-screen"
          >
            <transition :duration="{ enter: 800, leave: 800 }" name="fade">
              <div
                class="flex flex-col justify-center items-center"
                v-show="showItems"
                @click="closeNav()"
              >
                <router-link
                  exact-active-class="text-secondary hover:text-secondary"
                  to="/"
                  class="
                    px-2
                    py-1
                    text-gray-300 text-base
                    tracking-wider
                    rounded
                    navItem
                  "
                  style="text-transform: uppercase"
                  >Home</router-link
                >
                <router-link
                  exact-active-class="text-secondary hover:text-secondary"
                  to="/about-us"
                  class="
                    mt-1
                    block
                    px-2
                    py-1
                    text-gray-300
                    font-base
                    tracking-wider
                    rounded
                    navItem
                  "
                  style="text-transform: uppercase"
                  >About Us</router-link
                >
                <router-link
                  exact-active-class="text-secondary hover:text-secondary"
                  to="/services"
                  class="
                    mt-1
                    block
                    px-2
                    py-1
                    text-gray-300
                    font-base
                    tracking-wider
                    rounded
                    navItem
                  "
                  style="text-transform: uppercase"
                  >Services</router-link
                >
                <router-link
                  exact-active-class="text-secondary hover:text-secondary"
                  to="/products"
                  class="
                    mt-1
                    block
                    px-2
                    py-1
                    text-gray-300
                    font-base
                    tracking-wider
                    rounded
                    navItem
                  "
                  style="text-transform: uppercase"
                  >Products</router-link
                >
                <router-link
                  exact-active-class="text-secondary hover:text-secondary"
                  to="/partners"
                  class="
                    mt-1
                    block
                    px-2
                    py-1
                    text-gray-300
                    font-base
                    tracking-wider
                    rounded
                    navItem
                  "
                  style="text-transform: uppercase"
                  >Partners</router-link
                >
                <router-link
                  exact-active-class="text-secondary hover:text-secondary"
                  to="/blogs"
                  class="
                    mt-1
                    block
                    px-2
                    py-1
                    text-gray-300
                    font-base
                    tracking-wider
                    rounded
                    navItem
                  "
                  style="text-transform: uppercase"
                  >Blogs</router-link
                >
                <router-link
                  exact-active-class="text-secondary hover:text-secondary"
                  to="/careers"
                  class="
                    mt-1
                    block
                    px-2
                    py-1
                    text-gray-300
                    font-base
                    tracking-wider
                    rounded
                    navItem
                  "
                  style="text-transform: uppercase"
                  >Careers</router-link
                >
                <router-link
                  exact-active-class="text-secondary hover:text-secondary"
                  to="/contact"
                  class="
                    mt-1
                    block
                    px-2
                    py-1
                    text-gray-300
                    font-base
                    tracking-wider
                    rounded
                    navItem
                  "
                  style="text-transform: uppercase"
                  >Contact Us</router-link
                >
              </div>
            </transition>
          </div>
        </div>
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      showItems: false,
      scrollPx: "",
    };
  },

  mounted() {
    window.addEventListener("scroll", () => {
      if (process.isClient) {
        this.scrollPx = window.scrollY;
      }
    });
  },
  methods: {
    hideNavOnScrollFunc(){
      if(this.$route.path == '/'){
        if(this.scrollPx > 100){
          return true
        } else {
          return false
        }
      } else {
        return true
      }
    },
    openNav() {
      this.isOpen = true;
      this.showItems = true;
      document.getElementById("mainNav").style.background = "#fff";
    },
    closeNav() {
      this.showItems = false;
      this.isOpen = false;
      document.getElementById("mainNav").style.background = "";
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition > 100) {
        document.getElementById("mainNav").style.background = "#1a202c";
        document.getElementById("mainNav").style.height = "70px";
      } else {
        document.getElementById("mainNav").style.background = "";
      }
    },
  },
};
</script>
<style scoped>
.navBg {
  backdrop-filter: saturate(1.5) blur(20px);
  background-color: rgba(35, 35, 35, 0.25);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@-moz-document url-prefix() {
  .navBg {
    background-color: rgba(35, 35, 35, 0.25);
    backdrop-filter: blur(25px);
    backdrop-filter: saturate(150%);
  }
}
</style>
