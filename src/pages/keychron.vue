<template>
 <MainLayout class="">
    <div class="container">
        <!-- <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662097175/website/keychron/1_tnszxs.jpg" /> -->
        <div class="item-group" xyz="fade down-100% back-5 stagger-6">
            <div class="square xyz-in bg-red-300 p-10">hi</div>
            <div class="square xyz-in bg-red-300 p-10">hello</div>
            <div class="square xyz-in bg-red-300 p-10">heyo</div>
        </div>
        <!-- <XyzTransitionGroup
        class="item-group"
        xyz="down-100% back-5 stagger-6"
        >
            <div class="square" v-if="false">hi</div>
            <div class="square" v-if="false">hello</div>
            <div class="square" v-if="false">bye</div>
        </XyzTransitionGroup> -->

    </div>
    </MainLayout>
</template>
<script>
import '@animxyz/core'
import MainLayout from '../layouts/Main.vue'
export default {
  components:{
    MainLayout,
  },
}
</script>