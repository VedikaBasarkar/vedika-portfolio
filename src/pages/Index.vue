<template>
  <div id="scroll-container">
      <MainLayout class="">
      <section class="section" id="home">
        <Lander/>
      </section>
      <section class="section" id="about">
        <About/>
      </section>
      <!-- <section class="section" id="about">
        <BlockchainAndAI/>
      </section> -->
      <section class="section" id="products">
        <Products/>
      </section>
      <section class="section" id="about">
        <Ecosystem/>
      </section>
      <section class="section" id="stats">
        <Stats/>
      </section>
      <section class="section" id="partners">
        <Partners/>
      </section>
      <section class="section" id="blogs">
        <Blogs/>
      </section>
      <section class="section" id="blogs">
        <Community/>
      </section>
      </MainLayout>
  </div>
</template>
<script>

import MainLayout from '../layouts/Main'
import Lander from '~/components/Sections/Lander'
import About from '~/components/Sections/About'
import BlockchainAndAI from '~/components/Sections/BlockchainAndAI'
import Ecosystem from '~/components/Sections/Ecosystem'
import Products from '~/components/Sections/Products'
import Stats from '~/components/Sections/Stats'
import Partners from '~/components/Sections/Partners'
import Blogs from '~/components/Sections/Blogs'
import Community from '~/components/Sections/Community'
export default {
  components:{
    MainLayout,
    Lander,
    About,
    BlockchainAndAI,
    Ecosystem,
    Products,
    Stats,
    Partners,
    Blogs,
    Community
  },
}
</script>


