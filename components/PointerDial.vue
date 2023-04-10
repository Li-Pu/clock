<template>
    <Dial class="cursor-default">
        <div class="w-full h-full relative border-2 border-gray-100 rounded-full">
            <template v-for="anchor in anchors">
                <div v-if="anchor.showHourAnchor || anchor.showHourLabel || anchor.showMinuteAnchor"
                    class="anchor absolute text-center flex flex-col items-center"
                    :style="{ '--anchor-value': anchor.value }">
                    <slot name="hourAnchor">
                        <div v-if="anchor.showHourAnchor" class="w-1 h-3 bg-gray-100"></div>
                    </slot>
                    <slot name="minuteAnchor">
                        <div v-if="anchor.showMinuteAnchor" class="w-0.5 h-2 bg-gray-100"></div>
                    </slot>
                    <slot name="hourLabel">
                        <div v-if="anchor.showHourLabel && anchor.hourLabel" class="anchor-label text-xl">
                            {{ anchor.hourLabel }}
                        </div>
                    </slot>
                </div>
            </template>
            <slot name="center">
                <div
                    class="absolute inset-1/2 w-2.5 h-2.5 rounded-full -translate-x-1/2 -translate-y-1/2 border-2 border-gray-100">
                </div>
            </slot>
            <slot></slot>
        </div>
    </Dial>
</template>

<script setup lang="ts">

export interface Props {
    showHourAnchor?: boolean | ((hour: number) => boolean)
    showHourLabel?: boolean | ((hour: number) => boolean)
    showMinuteAnchor?: boolean | ((minute: number) => boolean)
}

const props = withDefaults(defineProps<Props>(), {
    showHourAnchor: true,
    showHourLabel: () => ((hour: number) => hour % 3 === 0),
    showMinuteAnchor: () => ((minute: number) => minute % 5 !== 0)
})

const checkBooleanValue = (a: boolean | ((...params: any[]) => boolean), ...b: any[]) => {
    if (typeof a === 'function') {
        return a(...b);
    } else {
        return a;
    }
}

const anchors = computed(() => {
    return new Array(60).fill(0).map((t, index) => {
        const value = index + 1;
        const hour = Math.ceil(value / 5);
        return {
            value,
            showHourAnchor: value % 5 === 0 && checkBooleanValue(props.showHourAnchor, hour),
            showHourLabel: value % 5 === 0 && checkBooleanValue(props.showHourLabel, hour),
            hourLabel: hour,
            showMinuteAnchor: checkBooleanValue(props.showMinuteAnchor, value),
        }
    })
})

</script>

<style scoped>
.anchor {
    inset: 0px 0px 0px 0px;
    transform: rotate(calc(6deg * var(--anchor-value)));
}

.anchor-label {
    transform: rotate(calc(-6deg * var(--anchor-value)));
}
</style>