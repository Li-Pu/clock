<template>
    <BaseTimeContent class="relative w-full h-full">
        <TimePointer :value="hour" :calc-degree-method="(t) => t * 30">
            <slot name="hourPointer">
                <div class="w-1 h-20 bg-red-800"></div>
            </slot>
        </TimePointer>
        <TimePointer :value="props.time.minute" :calc-degree-method="(t) => t * 6">
            <slot name="minutePointer">
                <div class="w-1 h-32 bg-green-800"></div>
            </slot>
        </TimePointer>
        <TimePointer :value="props.time.second" :calc-degree-method="(t) => t * 6">
            <slot name="secondPointer">
                <div class="w-0.5 h-40 bg-blue-800"></div>
            </slot>
        </TimePointer>
    </BaseTimeContent>
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

const hour = computed(() => {
    return props.time.hour + props.time.minute / 60;
})

</script>