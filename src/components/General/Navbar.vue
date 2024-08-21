<template>
    <nav>
       <div class="nav_inner">
        <p class="initla">ca<span>.</span> </p>

<div class="gh_time">
    <!-- <img src="../../../public/images/gh.svg" alt=""> -->
    <!-- <img src="../../../public/images/GHA.svg" alt=""> -->
    <img src="../../../public/images/gha.webp" alt="">
    <p class="time">2:20PM</p>

</div>

<a href="" class="open_menu"><IconHamburger/></a>
       </div>
    </nav>
</template>

<script lang="ts">
import IconHamburger from '../icons/IconHamburger.vue';

export default {
    name: "Navbar",
    components:{IconHamburger}
}
</script>

<style lang="scss" scoped>
nav {
    backdrop-filter: blur(20px);
    /* height: 10vh; */
    /* background: red; */
    position: sticky;
    top: 0;
    z-index: 100;
    border-bottom: 0.4px solid $grey_line;
 & .nav_inner{
    width: 80%;
    margin: auto;
    font-size: 20px;
    @include flex_base(center, space-between, null, null);
    & .gh_time{
        @include flex_base(center, center, 10px, null);
        /* display: inline-grid; */
        /* background-color: red; */
        /* overflow: hidden; */

        & img{
            width: 80px;
        }
        & .time{
            /* background-color: red; */
        }
    }

    & .open_menu{
        background-color: $white;
        border-radius: 50%;
        height: 50px;
        width: 50px;
        @include flex_base(center, center, null,null);
    }
 }
}
</style>