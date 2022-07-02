<template>
  <div id="scroll-container bg-white">
      <MainLayout class="">
      <section class="section" id="products">
        <Projects/>
      </section>
      <!-- <section class="section" id="about">
        <About/>
      </section> -->
      <!-- <section class="section" id="blogs">
        <Contact/>
      </section> -->
      </MainLayout>
  </div>
</template>
<script>

import MainLayout from '../layouts/Main'
import About from '~/components/Sections/About'
import Projects from '~/components/Sections/Projects'
import Contact from '~/components/Sections/Contact'
export default {
  components:{
    MainLayout,
    About,
    Projects,
    Contact
  },
}
</script>


