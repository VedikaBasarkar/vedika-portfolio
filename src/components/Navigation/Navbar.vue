<template>
    <div style="">
        <transition name="fade">
        <nav class="top-0 w-full md:mb-20 z-10" style="transition-duration: 0.5s;z-index:9999999;">
            <div class="bg-white top-0 absolute w-full">
                <div class="flex flex-row justify-between h-16 px-10 md:my-6">
                    <g-link to="/" class="md:ml-10">
                        <img class="h-16" src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1664265875/website/vedika-logo_q8g9zi.svg" />
                    </g-link>
                    <div class="w-full flex flex-row items-center justify-end mr-10">
                        <router-link to="/about" exact-active-class="text-primary"><p class="m-8 hover:text-primary font-primary">About</p></router-link>
                    </div>
                </div>
            </div>
        </nav>
        </transition>
    </div>
</template>