<template>
    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg_size" fill="#4a87ce">
        <path
            d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </svg> -->

    <svg xmlns="http://www.w3.org/2000/svg" fill="#0f0f0f" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0f0f0f"
        class="svg_size">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
    </svg>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: "IconHamBurger"
})

</script>

<!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg> -->
  
  <!-- //shuffle function
function shuffle(array) {
  for (i = 0; i <= array.length - 1; i++) {
    let randonNumber = Math.floor(Math.random() * (i + 1));
    let valueAtRandomIndex = array[randonNumber];
    array[randonNumber] = array[i];
    array[i] = valueAtRandomIndex;
  }
  return array;
} -->