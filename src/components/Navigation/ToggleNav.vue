<template>
    <div>
        <div id="myNav" class="overlay">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
        <div class="overlay-content text-xl">
            <g-link to="/about">About</g-link>
            <!-- <g-link to="/projects">Projects</g-link> -->
            <g-link to="/art-and-hobby">Art and Hobby</g-link>
            <g-link to="/contact">Contact</g-link>
        </div>
        </div>
        <div class="flex flex-row justify-between h-16 px-10 md:my-6">
            <g-link to="/" class="md:ml-10">
                <p class="font-primary text-3xl my-2 mr-8">Vedika</p>
            </g-link>
            <div class="mr-10 flex items-center">
                <div style="font-size:30px;cursor:pointer" @click="openNav()">&#9776; </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
  
  methods:{
        openNav(){
            console.log('went into function');
            document.getElementById('myNav').style.height = "100%";
        },
        closeNav() {
            document.getElementById("myNav").style.height = "0%";
        }
    }
}
</script>

<style scoped>


.overlay {
  width: 100%;
  height: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0);
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.overlay a:hover, .overlay a:focus {
  color: #fff;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

@media screen and (max-height: 450px) {
  .overlay a {
    font-size: 20px
    }
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}
</style>