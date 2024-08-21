<template>
    <div class="hero">
        <div class="name_and_title container">
            <div class="name">
                <span v-for="(letter, i) in splitter('Collins ')" :key='`${letter}${i}`' class="name_letters">{{ letter
                    }}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                <span v-for="(letter, i) in splitter('abrusu')" :key='`${i}${letter}`' class="name_letters">{{ letter
                    }}</span>
            </div>
            <p class="front" ref="front">front-end</p>
            <p class="back" ref="back">back-end</p>
            <p class="full" ref="full">full-stack</p>

        </div>


        <div class="sub_hero container">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, culpa? Id veniam obcaecati, aliquid,
                aliquam repudiandae consequuntur harum quidem ea consequatur numquam cum qui nemo molestias tenetur
                animi doloremque? Repellendus. </p>
            <img src="/images/vector1.svg" alt="" ref="vector_img">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, culpa? Id veniam obcaecati, aliquid,
                aliquam repudiandae consequuntur harum quidem ea consequatur numquam cum qui nemo molestias tenetur
                animi doloremque? Repellendus. </p>
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
            const vectorImg = this.$refs.vector_img as HTMLImageElement;
            const hero = this.$refs.hero as HTMLDivElement;
            const timeline = gsap.timeline();
            gsap.to(vectorImg, {
                rotate: "660deg",
                ease: "none",
                duration: 6,
                scrollTrigger: {
                    trigger: hero,
                    start: "top 0%",
                    end: "bottom 90%",
                    scrub: 1,
                    pin: true,
                },
            });
            timeline.to(nameLetters, {
                y: 0,
                stagger: 0.045,
                ease: "expo.inOut",
                duration: 1,
            }).to(front, {
                x: "0%",
                y: "-40%",
                opacity: 1,
                ease: "expo.inOut",
                duration: 1,
            }).to(back, {
                x: "0%",
                y: "-50%",
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
    margin: 100px auto 20px auto;

    & .name_and_title {
        width: 80%;
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
                @include header(172.8px, 1);
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

    & .sub_hero {
        width: 80%;
        @include flex_base(center, center, 4rem, null);
        margin: 170px auto 0 auto;

        & img {
            width: 20%;
            /* background: red; */
            rotate: 180deg;
        }
    }
}
</style>