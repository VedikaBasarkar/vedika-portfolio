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
              <Title class="flex flex-col md:flex-row flex-wrap">
                <div>Aneka</div>
                <div class="hidden md:block text-3xl mt-7 md:mx-4 stroke-1 tracking-wider">Block<br/>Explorer</div>
                <div class="block md:hidden text-xl md:text-3xl mt-0 stroke-1 tracking-wider">Block Explorer</div>
              </Title>
              <div class="mt-2 text-sm md:text-lg font-thin"><g-link to="/">Home</g-link><g-link to="/products"> / Products</g-link><span class="text-secondary"> / Aneka</span></div>
              <div class="flex flex-col md:flex-row my-4 md:my-16">
                <div class="w-full md:w-3/5">
                  <div class="text-lg md:text-xl font-medium my-4">Aneka in Sanskrit means multiple which aligns with cosmos' idea of sovereign blockchain. <br />Connecting you with the cosmos of sovereign blockchain</div>
                  <div class="text-sm md:text-base font-thin text-justify">Block Explorers are the gateways to interact with blockchain networks. Aneka is a data-driven blockchain explorer from @vitwit_ for sovereign chains built on @cosmos.  Beautiful UI and UX are the heart of Aneka. Aneka is building for Validator operators, developers, and token holders  to understand the data as easily as possible. In the coming days, Aneka willbe a blockchain agnostic block explorer for any crypto users.</div>
                  
                  <div class="flex flex-row flex-wrap w-full md:pr-3 md:my-6">
                    <div class="text-sm md:text-base font-thin text-justify">Aneka is a data explorer for the cosmos ecosystem. It allows users to view and explore the data on the blockchain. It is designed to allow users to fetch/search fine-grained data from the blockchain and derive beautiful analytics from that.</div>
                  </div>

                </div>
                <div class="w-full md:w-2/5 md:pl-4">
                  <g-image src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1640085984/Vitwit%20Website/images/Aneka_product_image.png" />
                </div>
              </div>

              <div class="text-lg md:text-xl font-medium mt-6 md:mt-16 mb-6">Partnered Networks</div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div class="flex flex-col w-full">
                    <div class="customBlurBg flex flex-col px-10 justify-center rounded-md h-40">
                      <g-image src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1633611949/Vitwit%20Website/partners_logo/akash_network_white.svg" />
                    </div>
                    <div class="text-lg md:text-xl font-medium text-center my-2">Akash network</div>
                    <div class="flex flex-row justify-center">
                      <g-link to="https://akashnet-1.aneka.io/" class="customBlurBg px-2 py-1 rounded m-1 text-secondary">Akashnet-1</g-link>
                      <g-link to="https://akashnet-1.aneka.io/" class="customBlurBg px-2 py-1 rounded m-1 text-secondary">Akashnet-2</g-link>
                    </div>
                  </div>  

                  <div class="flex flex-col w-full">
                    <div class="customBlurBg flex flex-col px-10 justify-center items-center rounded-md h-40">
                      <g-image class="w-56" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1633612820/Vitwit%20Website/partners_logo/regen_network_white.png" />
                    </div>
                    <div class="text-lg md:text-xl font-medium text-center my-2">Regen network</div>
                    <div class="flex flex-row flex-wrap justify-center mb-4">
                      <g-link to="https://regen.aneka.io/" class="customBlurBg px-2 py-1 rounded m-1 text-secondary">Regen-1</g-link>
                      <g-link to="https://redwood.regen.aneka.io/" class="customBlurBg px-2 py-1 rounded m-1 text-secondary">regen-redwood-1</g-link>
                      <g-link to="http://devnet.regen.aneka.io/" class="customBlurBg px-2 py-1 rounded m-1 text-secondary">regen-devnet-5</g-link>
                      <g-link to="https://hambach.regen.aneka.io/" class="customBlurBg px-2 py-1 rounded m-1 text-secondary">regen-hambach-1</g-link>
                    </div>
                  </div>

                  <div class="flex flex-col w-full">
                    <div class="customBlurBg flex flex-col px-10 justify-center items-center rounded-md h-40">
                      <g-image class="w-56" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1640082021/Vitwit%20Website/partners_logo/CosmWasm_Logo_White.svg" />
                    </div>
                    <div class="text-lg md:text-xl font-medium text-center my-2">Cosmwasm</div>
                    <div class="flex flex-row flex-wrap justify-center mb-4">
                      <g-link to="https://testnet.cosmwasm.aneka.io/" class="customBlurBg px-2 py-1 rounded m-1 text-secondary">pebblenet-1</g-link>
                      <g-link to="https://testnet.tgrade.aneka.io/" class="customBlurBg px-2 py-1 rounded m-1 text-secondary">tgrade-testnet-2</g-link>
                      <g-link to="https://sandynet.aneka.io/" class="customBlurBg px-2 py-1 rounded m-1 text-secondary">sandynet-1</g-link>
                      <g-link to="https://try.tgrade.aneka.io/" class="customBlurBg px-2 py-1 rounded m-1 text-secondary">tgrade-try</g-link>
                      <g-link to="https://internal.tgrade.aneka.io/" class="customBlurBg px-2 py-1 rounded m-1 text-secondary">Tgrade-internal-7</g-link>
                    </div>
                  </div>

                  <div class="flex flex-col w-full">
                    <div class="customBlurBg flex flex-col px-10 justify-center rounded-md h-40">
                      <g-image src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1640084250/Vitwit%20Website/partners_logo/comdex_logo_white.svg" />
                    </div>
                    <div class="text-lg md:text-xl font-medium text-center my-2">Comdex</div>
                    <div class="flex flex-row flex-wrap justify-center mb-4">
                      <g-link to="https://comdex.aneka.io/" class="customBlurBg px-2 py-1 rounded m-1 text-secondary">Comdex</g-link>
                    </div>
                  </div>
                
                  <div class="flex flex-col w-full">
                    <div class="customBlurBg flex flex-col px-10 justify-center items-center rounded-md h-40">
                      <g-image class="w-56" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1640082940/Vitwit%20Website/partners_logo/osmosis-logo-white.svg" />
                    </div>
                    <div class="text-lg md:text-xl font-medium text-center my-2">Osmosis</div>
                    <div class="flex flex-row flex-wrap justify-center mb-4">
                      <g-link to="https://osmosis.aneka.io/" class="customBlurBg px-2 py-1 rounded m-1 text-secondary">Osmosis</g-link>
                    </div>
                  </div>

                  <div class="flex flex-col w-full">
                    <div class="customBlurBg flex flex-col px-10 justify-center items-center rounded-md h-40">
                      <g-image class="w-56" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1640082439/Vitwit%20Website/partners_logo/Juno_Logo_White.svg" />
                    </div>
                    <div class="text-lg md:text-xl font-medium text-center my-2">Juno</div>
                    <div class="flex flex-row flex-wrap justify-center mb-4">
                      <g-link to="https://juno.aneka.io/" class="customBlurBg px-2 py-1 rounded m-1 text-secondary">Juno-1</g-link>
                    </div>
                  </div>

                  <div class="flex flex-col w-full">
                    <div class="customBlurBg flex flex-col px-10 justify-center items-center rounded-md h-40">
                      <g-image class="w-56" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1640083729/Vitwit%20Website/partners_logo/persistence_logo_white.svg" />
                    </div>
                    <div class="text-lg md:text-xl font-medium text-center my-2">Persistence</div>
                    <div class="flex flex-row flex-wrap justify-center mb-4">
                      <g-link to="https://persistence.aneka.io/" class="customBlurBg px-2 py-1 rounded m-1 text-secondary">Persistence</g-link>
                    </div>
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
.customBlurBg {
  backdrop-filter: saturate(2.5) blur(6px);
  background: linear-gradient(
    200deg,
    rgba(66, 67, 70, 0.2) 0%,
    rgba(129, 128, 128, 0.2) 100%
  );
}
</style>