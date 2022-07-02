<template>
  <div class="bg-gray-900">
      <MainLayout>
        <div class="absolute top-0 right-0 h-screen hidden md:block">
          <!-- <div class="h-3/4 bgMazeImage" />
          <g-image class="h-3/4 bgMaze-filled" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1634025708/Vitwit%20Website/backgrounds/Regular_Page_Headers_to_move_xfhq2b.svg" /> -->
          <g-image class="h-4/5 bgMaze-stroke opacity-50" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1634025708/Vitwit%20Website/backgrounds/Regular_Page_Headers_oh64cu.svg" />
        </div>
        <section>
            <div class="py-24 px-4 lg:container min-h-screen relative text-gray-300">
                <Title>Services</Title>
                <div class=" text-lg font-thin"><g-link to="/">Home</g-link><span class="text-secondary"> / Services</span></div>

                <!-- Witval - Staking Infrastructurer -->
                <div class="flex flex-col md:flex-row md:space-x-8 my-8 md:my-16">
                  <div class="w-full md:w-3/5">
                      <div class="text-xl md:text-3xl font-medium my-4">Witval - Staking Infrastructure</div>
                      <div class="text-lg md:text-xl font-normal my-1 italic">Stake, Secure, and Earn</div>
                      <div class="text-sm md:text-base lg:text-lg font-thin  md: text-justify">Witval is Vitwit's validator. Being early adopters and one of the core contributors to cosmos-sdk modules, Vitwit has it’s deep expertise in running validators and its operations. Our ability to design and develop test nets, incentivized test nets, and main nets keep us ahead in the validator community. We believe governance and delegator funds security are of paramount importance. Vitwit is a place for one-stop solutions for all validator activities. We are also running validators on behalf of our clients.</div>
                      <div class="text-sm md:text-base lg:text-lg font-thin  md: hover:text-secondary mt-6 underline"><g-link to="/services/witval">Know more...</g-link></div>
                  </div>
                  <div class="w-full lg:w-2/5 flex justify-center">
                    <g-image
                      class="w-full h-full object-contain"
                      src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1639312891/Vitwit%20Website/vitwit%20raw%20assets/witval_sideload_vitwit_ortiganv3_bi97hi.png"
                    ></g-image>
                  </div>
                </div>

                <!-- Cosmos SDK Module Development -->
                <div class="flex flex-col md:flex-row lg:space-x-8 my-8 md:my-16">
                  <div class="w-full md:w-3/5">
                      <div class="text-xl md:text-3xl font-medium my-4">Cosmos SDK Module Development</div>
                      <!-- <div class="text-lg md:text-xl font-normal my-1">A one-stop solution for all the accounting-related information and analysis.</div> -->
                      <div class="text-sm md:text-base lg:text-lg font-thin  md: text-justify">Vitwit is a place for state-of-art blockchain devs especially cosmos devs. With a deep passion for decentralization philosophy and expertise in go and rust programming languages, our devs will design and develop cosmos blockchain solutions. We have deep expertise in migrating the previous cosmos-SDK versions to the latest. Vitwit is working to bring more talent into the cosmos community. We work with our client's hand in hand to understand the vision and to achieve their objectives. Our Project Management capabilities help us to achieve on-time and effective outcomes.</div>
                      <!-- <div class="text-sm md:text-base lg:text-lg font-thin  md: hover:text-secondary mt-6 underline"><g-link to="/services/cosmos-sdk-module-developement">Know more...</g-link></div> -->
                  </div>
                  <div class="w-full lg:w-2/5 flex justify-center">
                    <g-image
                      class="w-full h-full object-contain"
                      src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1638448525/Vitwit%20Website/vitwit%20raw%20assets/cosmos_sdk_illustration_vhncl4.png"
                    ></g-image>
                  </div>
                </div>
                
                <!-- Monitoring & Alert Tools -->
                <div class="flex flex-col md:flex-row md:space-x-8 my-8 md:my-16">
                  <div class="w-full md:w-3/5">
                      <div class="text-xl md:text-3xl font-medium my-4">Monitoring & Alert Tools</div>
                      <!-- <div class="text-lg md:text-xl font-normal my-1">A one-stop solution for all the accounting-related information and analysis.</div> -->
                      <div class="text-sm md:text-base lg:text-lg font-thin  md: text-justify">For any validator operators, it's a very tedious job to keep checking their validator's health and stats continuously.  So, at Vitwit, we have developed a validator monitoring tool with the Grafana dashboard to keep track of health status at the fingertip. Also, we have developed a telegram bot to notify on validator downtime and missed blocks, etc. We are helping other validator operators from the cosmos and other communities with a custom monitoring and alert tools.</div>
                      <div class="text-sm md:text-base lg:text-lg font-thin  md: hover:text-secondary mt-6 underline"><g-link to="/services/monitoring-and-alert-tool">Know more...</g-link></div>
                  </div>
                   <div class="w-full lg:w-2/5 flex justify-center">
                    <g-image
                      class="w-full h-full object-contain"
                      src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1639311686/Vitwit%20Website/vitwit%20raw%20assets/1._monitoring_sideload_vitwit_ortiganv2_g61ozh.png"
                    ></g-image>
                  </div>
                </div>

                <!-- Blockchain Research -->
                <div class="flex flex-col md:flex-row md:space-x-8 my-8 md:my-16">
                  <div class="w-full md:w-3/5">
                      <div class="text-xl md:text-3xl font-medium my-4">Blockchain Research</div>
                      <!-- <div class="text-lg md:text-xl font-normal my-1">A one-stop solution for all the accounting-related information and analysis.</div> -->
                      <div class="text-sm md:text-base lg:text-lg font-thin  md: text-justify">At Vitwit, We firmly believe that grow and let grow. Also, we have a deep passion to extend and enhance blockchain technology in terms of validator operations, network security, scalability, and usability. Vitwit is committed to taking part in the research and development of the cosmos roadmap. 
                        We love to engage in research and development of the tech that
              helps businesses, economies, and people to sustain and grow. We want to build solutions and services for decentralization, web3.0,
              and AI. Our Vision to build the products and services that transform, empower, and support businesses, economies, and people.
                      </div>
                      <!-- <div class="text-sm md:text-base lg:text-lg font-thin  md: hover:text-secondary mt-6 underline"><g-link to="/services/blockchain-research">Know more...</g-link></div> -->
                  </div>
                  <div class="w-full lg:w-2/5 flex justify-center">
                    <g-image
                      class="w-full h-full object-contain"
                      src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1638448525/Vitwit%20Website/vitwit%20raw%20assets/blockchainservices_illustration_hp3q1l.png"
                    ></g-image>
                  </div>
                </div>

            </div>
        </section>
      </MainLayout>
  </div>
</template>

<script>
import MainLayout from '../../layouts/Main'
import Title from '../../components/Title/title.vue'
export default {
    components:{
        MainLayout,
        Title
    },
}
</script>

<style>

</style>