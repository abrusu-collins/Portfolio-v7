<template>
    <div class="hero">
        <div class="name_and_title">
            <div class="name">
                <span v-for="(letter, i) in splitter('Collins ')" :key='`${letter}${i}`' class="name_letters">{{ letter
                    }}</span> &nbsp;
                <span v-for="(letter, i) in splitter('abrusu')" :key='`${i}${letter}`' class="name_letters">{{ letter
                    }}</span>
            </div>
            <p class="front" ref="front">front-end</p>
            <p class="back" ref="back">back-end</p>
            <p class="full" ref="full">full-stack</p>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
    name: "Hero",
    mounted() {
        this.nameAnimation();
    },
    methods: {
        splitter(word: string): string[] {
            return word.split("");
        },
        nameAnimation() {
            const nameLetters = gsap.utils.toArray(".name_letters");
            const front = this.$refs.front as HTMLParagraphElement;
            const back = this.$refs.back as HTMLParagraphElement;
            const full = this.$refs.full as HTMLParagraphElement;
            const timeline = gsap.timeline();

            console.log(nameLetters);
            timeline.to(nameLetters, {
                y: 0,
                stagger: 0.02,
                ease: "expo.inOut",
                duration: 1,
            }).to(front, {
                x: "30%",
                y: "-60%",
                opacity: 1,
                ease: "expo.inOut",
                duration: 1,
            }).to(back, {
                x: "-30%",
                y: "-30%",
                opacity: 1,
                ease: "expo.inOut",
                duration: 1,
            }).to(full, {
                x: "300%",
                y: "-40%",
                opacity: 1,
                ease: "expo.inOut",
                duration: 1,
            })
        }

    }
})
</script>

<style lang="scss" scoped>
.hero {
    margin: 200px auto 20px auto;

    & .name_and_title {
        width: 80%;
        /* background-color: red; */
        position: relative;
        margin: auto;

        & .front,
        .back,
        .full {
            display: inline-block;
            color: $black;
            font-size: 27px;
            font-family: "Bricolage Grotesque", system-ui;
            font-weight: 800;
            padding: 10px;
            position: absolute;
            border-radius: 10px;
            opacity: 0,
        }

        & .front {
            background-color: $red_light;
            top: 0;
            rotate: -30deg;
            transform: translate(30%, -110%);
        }

        & .back {
            background-color: $yellow;
            transform: translate(-25%, 20%);
            right: 0;
            rotate: -30deg;

        }

        & .full {
            background-color: $purple;
            rotate: 10deg;
            transform: translate(300%, -90%);
        }

        & .name {
            text-align: center;
            line-height: 1;
            overflow: hidden;

            & span {
                @include header(160px, 1);
                transition: color 0.5s ease-in-out;
                overflow: hidden;
                transform: translateY(110%);
                display: inline-block;

                &:hover {
                    color: $grey_text_light;
                }
            }
        }
    }


}
</style>