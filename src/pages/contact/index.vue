<template>
  <div class="bg-dark">
      <MainLayout>
        <!-- <div class="absolute top-0 right-0 h-screen hidden md:block">
          <g-image class="h-4/5 bgMaze-stroke opacity-50" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1634025708/Vitwit%20Website/backgrounds/Regular_Page_Headers_oh64cu.svg" />
        </div> -->
        <div class="absolute opacity-20 left-0 top-0 h-full transform -translate-y-10 lg:translate-x-1/2 lg:-translate-y-1/4">
      <g-image class="min-h-screen w-full" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1634126756/Vitwit%20Website/backgrounds/Blobs-Free/lhs_green_free_wf9rja.svg"></g-image>
    </div>
        <section>
            <div class="py-16 px-4 lg:container min-h-screen relative text-gray-300">
                <Title>Contact Us</Title>
                <div class="text-sm lg:text-lg font-thin"><g-link to="/">Home</g-link><span class="text-secondary"> / Contact Us</span></div>
                <div class="flex flex-row-reverse flex-wrap justify-center">
                  <div class="w-full md:w-1/2">
                    <g-image class="mt-10 md:mt-0" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1638448525/Vitwit%20Website/vitwit%20raw%20assets/contact_us_illustration_ef01ik.png" />
                  </div>
                  <div class="w-full md:w-1/2 p-2">
                     <div class="customBlurBg rounded-md p-6 my-4">
                      <div class="my-1 flex flex-row"><p class="font-semibold mr-1">Business Email: </p> contact@vitwit.com</div>
                      <div class="my-1 flex flex-row"><p class="font-semibold mr-1">Career Email: </p> careers@vitwit.com</div>
                      <div class="my-1 flex flex-row"><p class="font-semibold mr-1">Phone No: </p> +91 85001 92539</div>
                    </div>
                      <div class="block md:hidden text-secondary text-lg mt-10">Drop us enquiry here</div>
                      <ContactForm />
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
import ContactForm from '../../components/Forms/contactForm.vue'

export default {
    components:{
        MainLayout,
        ContactForm,
        Title
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