<template>
    <div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
export interface Props {
    time: {
        hour: number
        minute: number
        second: number
        millisecond: number
    }
}
</script>