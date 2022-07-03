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
                <div class=" text-lg font-thin"><g-link to="/">Home</g-link><span class="text-secondary"> / About Us</span></div>

                <!-- Culture and vibe -->
                <div class="flex flex-col md:flex-row my-8 md:my-16">
                <div class="w-full md:w-2/5 flex flex-col">
                    <div class="text-xl md:text-3xl font-medium mb-4 mt-4 md:mt-12">Culture & Vibe</div>
                    <div class="text-sm md:text-base lg:text-lg font-thin text-justify">
                    Learning and execution are our core cultural values. Passion is our identity, and innovation is our target. Transformation is our achievement. 
                    </div>
                    <div class="text-sm md:text-base lg:text-lg font-thin text-justify"><span class="font-bold">“Learn fast, fail fast, and win fast”</span> is our motto</div>
                
                    <!-- <div class="text-xl md:text-3xl font-medium my-4">Our transition</div>
                    <div class="text-sm md:text-base lg:text-lg font-thin leading-7 md:leading-8 text-justify">From just three computer science graduates to 20+ Blockchain experts. We are a  bootstrapped company racing towards the top Blockchain companies in the world. Witness us.</div> -->
                </div>
                <div class="w-full md:w-3/5 mt-6 md:mt-4 md:pl-10">
                    <g-image class="team-image" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1639420340/Vitwit%20Website/images/About_us_culture.png" />
                </div>
                </div>

                <div class="flex flex-col md:flex-row my-8 md:my-16">
                <div class="w-full md:w-2/5 flex flex-col">
                    <div class="text-xl md:text-3xl font-medium mb-4 mt-4 md:mt-12">Our transition</div>
                    <div class="text-sm md:text-base lg:text-lg font-thin leading-7 md:leading-8 text-justify">From just three computer science graduates to 20+ Blockchain experts. We are a  bootstrapped company racing towards the top Blockchain companies in the world. Witness us.</div>
                </div>
                <div class="w-full md:w-3/5 mt-6 md:mt-4 md:pl-10">
                    <g-image class="team-image" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1636967467/Vitwit%20Website/images/team-group.png" />
                </div>
                </div>

                <!-- our team -->
                <div class="flex flex-col my-8 md:my-16">
                    <div class="text-xl md:text-3xl font-medium my-4">Our Team</div>
                    <div class="text-sm md:text-base lg:text-lg font-thin text-justify">Our ever-enthusiastic team who walked into Vitwit as freshers with loads of interest in disruptive technology took a deep dive into any technologies they were pointed to. The team has grown along with the company and has gained solid experience in technologies. We are the pioneers in exploring the cosmos and learning it all by ourselves.
                        <br />A team that is equally dedicated as much as us is rare to find. We are always assured of the best outcomes. We as team share loads of fun as equal to knowledge sharing. Our team outing experience reached the sky. A day in the office is never a boring or dull day.
                        <br />We are a young diversified team demographically as well as personality. Every person in the team is welcome to bring their perspectives which helps us to see through things in different dimensions.
                    </div>
                </div>

                <g-image src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1636782524/Vitwit%20Website/images/_MG_2273-min_qtj2wy.jpg" class="team-image" />

                <div class="text-2xl md:text-3xl font-medium mt-20">Our Founders</div>
                <!-- Lingmurthy Madarboina : CEO -->
                <div class="flex flex-col md:flex-row mt-4 mb-8 md:mb-16">
                <div class="w-full md:w-3/5">
                    <div class="text-lg md:text-xl font-medium my-2">Lingamurthy Madaraboina</div>
                    <div class="text-base font-light mb-4">Co-founder & CEO</div>
                    <div class="text-sm md:text-base lg:text-lg font-thin text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
                    <div class="flex flex-row mt-4 md:mt-8">
                    <g-link to="https://github.com/murthyvitwit"><g-image class="mr-4 h-8" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1633601344/Vitwit%20Website/icons/github.svg" /></g-link>
                    <g-link to="https://www.linkedin.com/in/murthyvitwit/"><g-image class="mr-4 h-8" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1633601344/Vitwit%20Website/icons/linkedin.svg" /></g-link>
                    <g-link to="https://twitter.com/murthy_vitwit"><g-image class="mr-4 h-8" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1633601344/Vitwit%20Website/icons/twitter.svg" /></g-link>              
                    </div>
                </div>
                <div class="w-full md:w-2/5 mt-6 md:mt-4 md:pl-10">
                    <div class="h-80 w-full md:pl-10">
                        <g-image class="h-full w-full object-cover rounded-md shadow-md team-image" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1637308521/Vitwit%20Website/images/Murthy__wmvw4d.jpg" />
                    </div>
                </div>
                </div>

                <!-- Anilkumar Kammari:  Co-founder & CTO -->
                <div class="flex flex-col md:flex-row my-8 md:my-16">
                <div class="w-full md:w-3/5">
                    <div class="text-lg md:text-xl font-medium my-2">Anilkumar Kammari </div>
                    <div class="text-base font-light mb-4">Co-founder &amp; CTO</div>
                    <div class="text-sm md:text-base lg:text-lg font-thin text-justify">As a CTO, Anil helped a number of projects with solution designing, architecture, and scaling. Started his career as a full-stack developer, built an interest in AI, Blockchain. He was working on an Edutech project before fully moving into the blockchain. A strong believer in technology and passionate about agritech.</div>
                    <div class="flex flex-row mt-4 md:mt-8">
                    <g-link to="https://github.com/anilCSE"><g-image class="mr-4 h-8" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1633601344/Vitwit%20Website/icons/github.svg" /></g-link>
                    <g-link to="https://www.linkedin.com/in/anilcse/"><g-image class="mr-4 h-8" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1633601344/Vitwit%20Website/icons/linkedin.svg" /></g-link>
                    <g-link to="https://twitter.com/anilcse_"><g-image class="mr-4 h-8" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1633601344/Vitwit%20Website/icons/twitter.svg" /></g-link>              
                    </div>
                </div>
                <div class="w-full md:w-2/5 mt-6 md:mt-4 md:pl-10">
                    <div class="h-80 w-full md:pl-10">
                        <g-image class="h-full w-full object-cover rounded-md shadow-md team-image" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1637308540/Vitwit%20Website/images/Anil.png" />
                    </div>
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
<style scoped>
.team-image{
    filter: gray; /* IE6-9 */
    -webkit-filter: grayscale(100%);
}
.team-image:hover{
    cursor: pointer;
    filter: none;
    -webkit-filter: grayscale(0%);
}
</style>