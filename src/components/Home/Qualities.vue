<template>
    <div class="qualities">
        <div class="split_container" ref="split_container">
            <span v-for="(word, i) in splitByWord(skillsHeader)" :key='`${word}${i}`' class="split_word"
                ref="split_word">
                <span>
                    {{ word }}&nbsp;
                </span>
            </span>

        </div>

        <div class="works">
            <img class="backdrop_image_front" src="/images/frontend.svg" alt="">
            <img class="backdrop_image_back" src="/images/backend.svg" alt="">
            <img class="backdrop_image_full" src="/images/fullstack.svg" alt="">

            <div class="frontend">
                <img src="/images/frontend.svg" alt="">
                <p class="title">
                    Front-end
                </p>
                <p class="description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque mollitia facere fugiat. Aperiam
                    vero rem fugiat dolor quia quas ab blanditiis sit quo? Earum soluta reiciendis, odit iusto totam
                    architecto.
                </p>
            </div>
            <div class="backend">
                <img src="/images/backend.svg" alt="">
                <p class="title">
                    Back-end
                </p>
                <p class="description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque mollitia facere fugiat. Aperiam
                    vero rem fugiat dolor quia quas ab blanditiis sit quo? Earum soluta reiciendis, odit iusto totam
                    architecto.
                </p>

            </div>
            <div class="fullstack">
                <img src="/images/fullstack.svg" alt="">
                <p class="title">
                    Full-stack
                </p>
                <p class="description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque mollitia facere fugiat. Aperiam
                    vero rem fugiat dolor quia quas ab blanditiis sit quo? Earum soluta reiciendis, odit iusto totam
                    architecto.
                </p>

            </div>

        </div>

        <a href="" class="book_call">Book a call now!</a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { skillsHeader } from '../../constants';
import { splitByWord } from '../../utils/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default defineComponent({
    name: "Qualities",
    mounted() {
        this.moveWordsUp();
    },
    methods: {
        splitByWord,
        moveWordsUp() {
            const splitContainer = this.$refs.split_container as HTMLDivElement;
            const words = gsap.utils.toArray(".split_word span");
            gsap.to(words, {
                y: 0,
                ease: "expo.inOut",
                // duration: 100,
                stagger: 0.02,
                scrollTrigger: {
                    trigger: splitContainer,
                    start: "top 60%",
                    end: "bottom 90%",
                    scrub: 1,
                    pin: true,
                },
            });

        }
    },
    data() {
        return {
            skillsHeader,
        }
    }
})
</script>

<style lang="scss" scoped>
.qualities {
    padding-bottom: 100vh;
    width: 80%;
    margin: auto;

    & .split_container {
        overflow: hidden;
        line-height: 1;

        & .split_word {

            line-height: 1;
            overflow: hidden;
            display: inline-block;

            &>span {
                @include header(70px, 100px);
                transform: translateY(150%);
                display: inline-block;

            }
        }
    }

    & .works {
        @include flex_base(center, center, 1rem, null);
        margin-top: 50px;
        position: relative;

        &>div {
            backdrop-filter: blur(20px);
            border: 1px solid $grey_line;
            padding: 20px;
            border-radius: 8px;
            position: relative;
            z-index: 100;

            & img {
                width: 15%;
            }

            & .title {
                margin: 17px 0;
                @include header(23px, 20px);
            }
        }

        &>img {
            position: absolute;
            z-index: -1;
            width: 6%;

        }

        & .backdrop_image_front {
            left: 0;
            bottom: 0;
            transform: translate(-30%, 40%);
        }

        & .backdrop_image_full {
            right: 0;
            bottom: 0;
            transform: translate(30%, 40%);
        }

        & .backdrop_image_back {
            top: 0;
            transform: translate(100%, -40%);
        }
    }

    & .book_call {
        @include primary_button($grey_line, $white);
        width: 100%;
        margin-top: 100px;
        padding: 100px 0;
        font-size: 100px;
        font-family: goBold;
        text-align: center;
        border-radius: 10px;
        box-shadow: inset 0 0 10px $grey_text;
        /* box-shadow: inset 0 0 10px rgb(63, 58, 58); */
        /* box-shadow: inset 0 0 10px rgb(68, 68, 68); */
    }

}
</style>