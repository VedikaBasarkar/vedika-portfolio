<template>
    <div style="">
        <transition name="fade">
        <nav class="top-0 w-full mb-6 z-10" style="transition-duration: 0.5s;z-index:9999999;">
            <div class="text-white top-0 absolute w-full z-40">
                <div class="flex flex-row justify-between h-16 px-8 md:px-10 md:my-2">
                    <g-link to="/" class="md:ml-10">
                        <img class="w-14 my-8" src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1664214053/website/logo.png" />
                    </g-link>
                    <div class="w-full flex flex-row items-center justify-end md:mr-10 mt-10">
                        <div class="flex items-center font-light font-primary">
                            <router-link to="/about"><p class="m-8 hover:text-dark font-primary">About</p></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </transition>
    </div>
</template>

<style scoped>
.glass-css{
    background: rgba(255, 255, 255, 0.23);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.4px);
    -webkit-backdrop-filter: blur(6.4px);
    border: 1px solid rgba(255, 255, 255, 0.11);
    color: white
}
</style>