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
              <Title class="flex flex-row flex-wrap"><div class="text-2xl md:text-6xl">Blockchain research</div></Title>
              <div class="text-sm md:text-lg font-thin"><g-link to="/">Home</g-link><g-link to="/services"> / Services</g-link><span class="text-secondary"> / Blockchain Research</span></div>
              <div class="flex flex-col md:flex-row my-4 md:my-16">
                <div class="w-full md:w-3/5">
                  <div class="text-lg md:text-xl font-medium my-4">Grow and Let Grow</div>
                  <div class="text-sm md:text-base font-thin md text-justify">At Vitwit, We firmly believe that grow and let grow. Also, we have a deep passion to extend and enhance blockchain technology in terms of validator operations, network security, scalability, and usability. Vitwit is committed to taking part in the research and development of the cosmos roadmap.</div>
                  
                  <div class="flex flex-row flex-wrap w-full">
                    <!-- <div class="w-full md:w-1/2 md:pr-3 md:my-6">
                      <div class="text-lg md:text-xl font-medium my-4">Application</div>
                      <div class="text-sm md:text-base font-thin md text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>
                    <div class="w-full md:w-1/2 md:pl-3 md:my-6">
                      <div class="text-lg md:text-xl font-medium my-4">Key Features</div>
                      <div class="text-sm md:text-base font-thin md text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                    </div> -->
                    <div class="w-full md:1/2 md:pr-3 md:my-6">
                      <div class="text-lg md:text-xl font-medium my-4">Partnered Network</div>
                      <ul class="list-outside list-disc text-sm md:text-base font-thin md text-justify pl-4">
                        <li>Akash</li>
                        <li>Regen</li>
                        <li>Polygon</li>
                        <li>Chainflow</li>
                      </ul>
                    </div>
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

</style>