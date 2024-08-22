<template>
    <div class="qualities">
        <p>
             <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, officia. Facere provident architecto
            veritatis -->
        
            I bring ideas to life by handling every aspect of development, from concept  to completion.</p>

        <div class="works">
            <img class="backdrop_image_front" src="/images/frontend.svg" alt="">
            <img class="backdrop_image_back" src="/images/backend.svg" alt="">
            <img class="backdrop_image_full" src="/images/fullstack.svg" alt="">

            <div class="frontend">
                <img src="/images/frontend.svg" alt="">
                <!-- <img class="backdrop_image_front" src="/images/frontend.svg" alt=""> -->

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
                <!-- <img class="backdrop_image_back" src="/images/backend.svg" alt=""> -->

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
                <!-- <img class="backdrop_image_full" src="/images/fullstack.svg" alt=""> -->

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
export default {
    name: "Qualities"
}
</script>

<style lang="scss" scoped>
.qualities {
    padding-bottom: 100vh;
    width: 80%;
    margin: auto;

    &>p {
        /* text-align: center; */
        @include header(70px, 100px);
    }

    & .works {
        @include flex_base(center, center, 1rem, null);
        margin-top: 50px;
        position: relative;

        &>div {
            backdrop-filter: blur(20px);
            /* background-color: red; */
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

            /* & .backdrop_image_front {
                position: absolute;
                left: 0;
                bottom: 0;
                z-index: -100;
                width: 40%;
                transform: translate(-30%, 40%);
            } */
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

    & .book_call{
        @include primary_button($grey_line, $white);
        width: 100%;
        margin-top: 100px;
        padding: 100px 0;
        /* @include header(10px, 100px); */
        font-size: 100px;
  font-family: goBold;
text-align: center;
border-radius: 10px;
    }

}
</style>