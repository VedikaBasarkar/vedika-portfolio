<template>
    <div class="gradientHeading font-semibold
                  leading-tight
                  text-4xl
                  lg:text-6xl
                  2xl:text-8xl
                  tracking-wide">
        <slot></slot>
    </div>
</template>
<style scoped>
.gradientHeading {
  background-color: #191919;
  background-image: linear-gradient(90deg, #99F3BD, #5EEAD4, #1F74FF);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}
</style>