<template>
    <nav>
        <div class="nav_inner">
            <p class="initla">ca<span>.</span> </p>

            <div class="gh_time">
                <img src="../../../public/images/gha.webp" alt="">
                <p class="time">{{ time }} </p>

            </div>

            <a href="" class="open_menu">
                <IconHamburger />
            </a>
        </div>
    </nav>
</template>

<script lang="ts">
import moment from 'moment';
import IconHamburger from '../icons/IconHamburger.vue';
interface Data {
    time: string | null,
}
export default {
    name: "Navbar",
    components: { IconHamburger },
    data(): Data {
        return {
            time: null,
        }
    },
    mounted() {
        this.getTime();
    },
    methods: {
        getTime() {

            setInterval(() => {
                this.time = moment(new Date()).format("HH:mm:ss a");
            }, 1000);
        }
        ,
    }
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

    & .nav_inner {
        width: 80%;
        margin: auto;
        font-size: 20px;
        @include flex_base(center, space-between, null, null);

        & .gh_time {
            @include flex_base(center, center, 10px, null);
            /* display: inline-grid; */
            /* background-color: red; */
            /* overflow: hidden; */

            & img {
                width: 80px;
            }

            & .time {
                /* background-color: red; */
            }
        }

        & .open_menu {
            background-color: $white;
            border-radius: 50%;
            height: 50px;
            width: 50px;
            @include flex_base(center, center, null, null);
        }
    }
}
</style>