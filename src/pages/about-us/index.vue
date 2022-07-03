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