<template>
  <div class="bg-white">
      <MainLayout>
        <div class="absolute top-0 right-0 h-screen hidden md:block">
          <!-- <div class="h-3/4 bgMazeImage" />
          <g-image class="h-3/4 bgMaze-filled" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1634025708/Vitwit%20Website/backgrounds/Regular_Page_Headers_to_move_xfhq2b.svg" /> -->
          <g-image class="h-4/5 bgMaze-stroke opacity-50" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1634025708/Vitwit%20Website/backgrounds/Regular_Page_Headers_oh64cu.svg" />
        </div>
        <section>
            <div class="py-24 px-4 lg:container min-h-screen relative text-gray-300">
              <Title class="flex flex-row flex-wrap">Witval</Title>
              <div class="text-sm md:text-lg font-thin"><g-link to="/">Home</g-link><g-link to="/services"> / Services</g-link><span class="text-secondary"> / Witval</span></div>
              <div class="flex flex-col md:flex-row my-4 md:my-16">
                <div class="w-full md:w-3/5">
                  <div class="text-lg md:text-xl font-medium my-4 ">Stake, Secure, and Earn</div>
                  <div class="text-sm md:text-base font-thin md text-justify">Witval is Vitwit's validator. Being early adopters and one of the core contributors to cosmos-SDK modules, Vitwit has its deep expertise in running validators and its operations. Our ability to design and develop test nets, incentivized test nets and main nets keep us ahead in the validator community. We believe governance and delegator funds security are of paramount importance. Vitwit is a place for one-stop solutions for all validator activities. We are also running validators on behalf of our clients</div>
                  
                  <div class="flex flex-row flex-wrap w-full">
                    <div class="w-full md:w-1/2 md:pr-3 md:my-6">
                      <div class="text-lg md:text-xl font-medium my-4">Why Witval</div>
                      <div class="text-sm md:text-base font-thin md text-justify">We host our validator servers in a datacenter with uptime SLA of 99.995% and industry lowest design PUE of 1.38. We use multiple sentry nodes hosted on different cloud providers and regions to prevent any DDoS attacks. We also offer 100% protection against any slashing events.</div>
                    </div>
                    <div class="w-full md:w-1/2 md:pl-3 md:my-6">
                      <div class="text-lg md:text-xl font-medium my-4">Key Features</div>
                      <div class="text-sm md:text-base font-thin md text-justify">We are one of the fastest growing staking service providers in the ecosystem and provide our validator services for over 15 networks.</div>
                    </div>
                    <div class="w-full md:1/2 md:pr-3 md:my-6">
                      <div class="text-lg md:text-xl font-medium my-4">Partnered Network</div>
                      <ul class="list-outside list-disc ßtext-sm md:text-base font-thin md text-justify pl-4">
                        <li>Akash Network</li>
                        <li>Oasis Labs</li>
                        <li>E-money</li>
                        <li>Matic-network and 11 more</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-2/5 md:pl-10 md:mt-10">
                <g-image src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1639312891/Vitwit%20Website/vitwit%20raw%20assets/witval_sideload_vitwit_ortiganv3_bi97hi.png" />
                </div>
              </div>
            </div>
        </section>
      </MainLayout>
  </div>
</template>

<script>
import MainLayout from '../../../layouts/Main'
import Title from '../../../components/Title/title.vue'
export default {
    components:{
        Title,
        MainLayout
    },
}
</script>

<style>

</style>