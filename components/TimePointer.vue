<template>
    <div class="absolute w-full h-full pointer-container" :style="{ '--pointer-degree': degree }">
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
            <slot>
            </slot>
        </div>
    </div>
</template>

<script setup lang="ts">

export interface Props {
    value: number
    calcDegreeMethod: (value: number) => number
}

const props = withDefaults(defineProps<Props>(), { value: 0 })
const degree = computed(() => props.calcDegreeMethod(props.value));

</script>

<style scoped>
.pointer-container {
    transform: rotate(calc(1deg * var(--pointer-degree)));
}
</style>