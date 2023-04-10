<template>
    <div class="font-mono text-9xl flex flex-row text-center">
        <TimeText :value="props.time.hour"></TimeText>
        <span :class="{ 'invisible': time.second % 2 === 0 }">:</span>
        <TimeText :value="props.time.minute"></TimeText>
        <span :class="{ 'invisible': time.second % 2 === 0 }">:</span>
        <TimeText :value="props.time.second"></TimeText>
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

const props = defineProps<Props>()

</script>