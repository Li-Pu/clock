<template>
    <div class="container relative -skew-x-6" :class="`number-${props.char}`">
        <span class="r r1 absolute rounded-full h-0 w-full top-0 left-0"></span>
        <span class="r r2 absolute rounded-full h-0 w-full top-1/2 left-0"></span>
        <span class="r r3 absolute rounded-full h-0 w-full bottom-0 left-0"></span>
        <span class="c cl cl1 absolute rounded-full h-1/2 w-0 top-0 left-0"></span>
        <span class="c cl cl2 absolute rounded-full h-1/2 w-0 bottom-0 left-0"></span>
        <span class="c cr cr1 absolute rounded-full h-1/2 w-0 top-0 right-0"></span>
        <span class="c cr cr2 absolute rounded-full h-1/2 w-0 bottom-0 right-0"></span>
    </div>
</template>

<script setup lang="ts">
export interface Props {
    char: string
}

const props = defineProps<Props>()
</script>

<style scoped>
.container {
    --led-number-character-border-width: 12px;
}

.r {
    border-left: var(--led-number-character-border-width) solid transparent;
    border-right: var(--led-number-character-border-width) solid transparent;
}

.r1 {
    border-top: var(--led-number-character-border-width) solid currentColor;
}

.r2 {
    margin-top: calc(-0.5 * var(--led-number-character-border-width));
}

.r2::before,
.r2::after {
    content: "";
    position: absolute;
    height: 0;
    width: calc(100% + 1.5 * var(--led-number-character-border-width));
    border-left: calc(0.5 * var(--led-number-character-border-width)) solid transparent;
    border-right: calc(0.5 * var(--led-number-character-border-width)) solid transparent;
}

.r2::before {
    top: 0;
    left: calc(-0.75 * var(--led-number-character-border-width));
    border-bottom: calc(0.5 * var(--led-number-character-border-width)) solid currentColor;
}

.r2::after {
    top: calc(0.5 * var(--led-number-character-border-width));
    left: calc(-0.75 * var(--led-number-character-border-width));
    border-top: calc(0.5 * var(--led-number-character-border-width)) solid currentColor;
}

.r3 {
    border-bottom: var(--led-number-character-border-width) solid currentColor;
}

.c {
    height: calc(50% - var(--led-number-character-border-width));
}

.cl {
    border-top: calc(0.5 * var(--led-number-character-border-width)) solid transparent;
    border-bottom: calc(0.5 * var(--led-number-character-border-width)) solid transparent;
    border-left: var(--led-number-character-border-width) solid currentColor;
}

.cl1 {
    top: calc(0.5 * var(--led-number-character-border-width));
    border-top-width: var(--led-number-character-border-width);
}

.cl2 {
    bottom: calc(0.5 * var(--led-number-character-border-width));
    border-bottom-width: var(--led-number-character-border-width);
}

.cr {
    border-top: calc(0.5 * var(--led-number-character-border-width)) solid transparent;
    border-bottom: calc(0.5 * var(--led-number-character-border-width)) solid transparent;
    border-right: var(--led-number-character-border-width) solid currentColor;
}

.cr1 {
    top: calc(0.5 * var(--led-number-character-border-width));
    border-top-width: var(--led-number-character-border-width);
}

.cr2 {
    bottom: calc(0.5 * var(--led-number-character-border-width));
    border-bottom-width: var(--led-number-character-border-width);
}

.number-1 .r1,
.number-1 .r2,
.number-1 .r3,
.number-1 .cl1,
.number-1 .cl2,
.number-2 .cl1,
.number-2 .cr2,
.number-3 .cl1,
.number-3 .cl2,
.number-4 .r1,
.number-4 .r3,
.number-4 .cl2,
.number-5 .cl2,
.number-5 .cr1,
.number-6 .cr1,
.number-7 .r2,
.number-7 .r3,
.number-7 .cl1,
.number-7 .cl2,
.number-9 .cl2,
.number-0 .r2 {
  animation: changeDigital 200ms 0ms 1 ease-in forwards;
}

@keyframes changeDigital {
  form {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>