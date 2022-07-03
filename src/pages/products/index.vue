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
                <div class=" text-lg font-thin"><g-link to="/">Home</g-link><span class="text-secondary"> / Products</span></div>

                <!-- Aneka Block Explorer -->
                <div class="flex flex-col space-y-6 lg:space-y-0 md:flex-row my-8 lg:space-x-8 md:my-16">
                  <div class="w-full md:w-3/5">
                      <div class="text-xl md:text-3xl font-medium my-4">Aneka Block Explorer</div>
                      <div class="text-lg md:text-xl font-normal my-1">A one-stop solution for all the accounting-related information and analysis</div>
                      <div class="text-sm md:text-base lg:text-lg font-thin  text-justify">Block Explorers are the gateways to interact with blockchain networks. Aneka is a data-driven blockchain explorer from @vitwit_ for sovereign chains built on @cosmos.  Beautiful UI and UX are the heart of Aneka. Aneka is building for Validator operators, developers, and token holders  to understand the data as easily as possible. In the coming days, Aneka willbe a blockchain agnostic block explorer for any crypto users.</div>
                      <div class="text-sm md:text-base lg:text-lg font-thin   hover:text-secondary mt-6 underline"><g-link to="/products/aneka">Know more...</g-link></div>
                  </div>
                  <div class="w-full lg:w-2/5 flex justify-center">
                    <g-image
                    class="w-full h-full object-contain"
                    src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1638448526/Vitwit%20Website/vitwit%20raw%20assets/Aneka_Dashboard_wkbm2c.png"
                  ></g-image>
                  </div>
                </div>

                <!-- Aneka Block Explorer -->
                <div class="flex flex-col space-y-6 lg:space-y-0 md:flex-row my-8 lg:space-x-8 md:my-16">
                  <div class="w-full md:w-3/5">
                      <div class="text-xl md:text-3xl font-medium my-4">Artha - Delegator Dashboard</div>
                      <div class="text-lg md:text-xl font-normal my-1">A one-stop solution for all the accounting-related information and analysis.</div>
                      <div class="text-sm md:text-base lg:text-lg font-thin  text-justify">Artha is a multi-purpose dashboard for all the account holders in the cosmos ecosystem. It gives a summary of the accounts, tokens, and transaction history. It also manages the portfolios. It provides clean activity history and makes tax reporting easy. Artha provides a generic overview of the validators and their activity-based ranking. This makes it easy for delegators to delegate their tokens and thus ensures the security of the network.</div>
                      <div class="text-secondary text-2xl mt-4">Artha is coming soon to serve...</div>
                  </div>
                   <div class="w-full lg:w-2/5 flex justify-center">
                    <g-image
                    class="w-full h-full object-contain"
                    src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1638448526/Vitwit%20Website/vitwit%20raw%20assets/Artha_Dashboard_fdb49y.png"
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
export default {
    components:{
        MainLayout,
    },
}
</script>

<style>

</style>