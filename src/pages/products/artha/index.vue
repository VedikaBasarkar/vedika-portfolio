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
                <div>Artha</div>
                <div class="hidden md:block text-3xl mt-7 md:mx-4 stroke-1 tracking-wider">Delegator<br/>Dashboard</div>
                <div class="block md:hidden text-xl md:text-3xl mt-0 stroke-1 tracking-wider">Delegator Dashboard</div>
              </Title>
              <div class="mt-2 text-sm md:text-lg font-thin"><g-link to="/">Home</g-link><g-link to="/products"> / Products</g-link><span class="text-secondary"> / Artha</span></div>
              <div class="flex flex-col md:flex-row my-4 md:my-16">
                <div class="w-full md:w-3/5">
                  <div class="text-lg md:text-xl font-medium my-4">A one-stop solution for all the accounting-related information and analysis.</div>
                  <div class="text-sm md:text-base font-thin text-justify">Artha is a multi-purpose dashboard for all the account holders in the cosmos ecosystem. It gives a summary of the accounts, tokens, and transaction history. It also manages the portfolios. It provides clean activity history and makes tax reporting easy. Artha provides a generic overview of the validators and their activity-based ranking. This makes it easy for delegators to delegate their tokens and thus ensures the security of the network.</div>
                  
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