<template>
    <div class="projects" ref="projects">
        <div class="project_line" ref="project_line"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default defineComponent({
    name: "Projects",
    mounted() {
        this.drawLine();

    },
    methods: {
        drawLine() {
            const projectLine = this.$refs.project_line as HTMLDivElement;
            const projects = this.$refs.projects as HTMLDivElement;

            gsap.to(projectLine, {
                width: "100vw",
                ease: "expo.inOut",
                duration: 2,
                scrollTrigger: {
                    trigger: projects,
                    start: "top 50%",
                    end: "bottom 80%",
                    scrub: false,
                },
            });
        }
    }
})
</script>

<style lang="scss" scoped>
.projects {
    padding-top: 100px;
    overflow: hidden;
    height: 200vh;

    & .project_line {
        background: $grey_text;
        width: 0vw;
        height: 1px;
    }
}
</style>