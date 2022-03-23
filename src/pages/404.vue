<template>
        <div class="w-full bg-dark text-gray-100 h-screen">
            <div class="container md:mx-auto h-full flex justify-center items-center">
                <div class="w-full mx-10 md:w-1/3">
                    <div class="text-center">
                         <div class="mx-auto flex justify-center">
                            </div>
                            <p class="text-4xl mt-16 lg:mt-24 mb-4 font-extrabold">404 - Page Not Found</p>
                            <button class="bg-teal-500 mx-auto rounded inline-block px-12 py-3 tracking-wide uppercase text-white" @click="checkout()">Back to Home</button>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    methods:{
        checkout(){
            this.$router.push({path: '/'})
        }
    }
}
</script>

