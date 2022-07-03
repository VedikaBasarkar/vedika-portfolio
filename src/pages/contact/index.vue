<template>
  <div class="bg-white">
      <MainLayout>
        
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
.customBlurBg {
  backdrop-filter: saturate(2.5) blur(6px);
  background: linear-gradient(
    200deg,
    rgba(66, 67, 70, 0.2) 0%,
    rgba(129, 128, 128, 0.2) 100%
  );
}
</style>