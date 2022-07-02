<template>
    <div class="page-title text-white mt-5">
        <slot></slot>
    </div>
</template>
<style scoped>
.page-title{
  font-size: 6rem;
  font-weight: 900;
  width: fit-content;
  text-transform: uppercase;
  /* background: linear-gradient(to left, #1b69e6, #5eead4, #99f3bd);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent; */
  color:#99f3bd;
  -webkit-text-stroke: 2px #99f3bd;
  animation: example 3s linear;
}

@keyframes example {
  /* 0%   {
      background: linear-gradient(to left, #1b69e600, #5eead400, #99f3bd00);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      width: fit-content;
      }
  25%  {
      background: linear-gradient(to left, #1b69e600, #5eead400, #99f3bd);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      width: fit-content;
      }
  70%  {
      background: linear-gradient(to left, #1b69e600, #5eead4, #99f3bd);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      width: fit-content;
      }
  100% {
      background: linear-gradient(to left, #1b69e6, #5eead4, #99f3bd);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      width: fit-content;
      } */

      0%{
          color: transparent;
      }
      15%{
          color: transparent;
      }
      100%{
          color: #99f3bd;
      }
}

@media only screen and (max-width:786px){
  .page-title{
  font-size: 3rem;
  -webkit-text-stroke-width: 1px;

  }
}
</style>