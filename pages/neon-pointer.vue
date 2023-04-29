<template>
    <div class="w-screen h-screen flex items-center justify-center bg-black">
        <Case
            class="relative w-[50vmin] p-2.5 aspect-square rounded-full bg-gradient-to-br from-teal-500 via-amber-500 to-pink-500 animate-color-rotate-infinite">
            <PointerDial class="relative w-full h-full p-2.5 z-50 bg-black rounded-full shadow-white-md"
                borderClassNames="border-red-500">
                <PointerTimeContent :time="time">
                    <template v-slot:hourPointer>
                        <div class="relative w-1 h-20 rounded-full bg-red-500 z-100"></div>
                        <span class="absolute top-0 left-0 w-full h-full bg-red-500 rounded-full blur-sm"></span>
                        <span class="absolute top-0 left-0 w-full h-full bg-red-500 rounded-full blur"></span>
                    </template>
                    <template v-slot:minutePointer>
                        <div class="relative w-1 h-32 rounded-full bg-green-500 z-110"></div>
                        <span class="absolute top-0 left-0 w-full h-full bg-green-500 rounded-full blur-sm"></span>
                        <span class="absolute top-0 left-0 w-full h-full bg-green-500 rounded-full blur"></span>
                    </template>
                    <template v-slot:secondPointer>
                        <div class="relative w-0.5 h-40 rounded-full bg-blue-500 z-120"></div>
                        <span class="absolute top-0 left-0 w-full h-full bg-blue-500 rounded-full blur-sm"></span>
                        <span class="absolute top-0 left-0 w-full h-full bg-blue-500 rounded-full blur"></span>
                    </template>
                </PointerTimeContent>
                <template v-slot:hourAnchor="{ anchor }">
                    <div v-if="anchor.showHourAnchor"
                        :class="['rounded-full', time.second === anchor.value % 60 ? 'w-1 h-4 bg-blue-600' : 'w-1 h-4 bg-red-600']">
                    </div>
                </template>
                <template v-slot:minuteAnchor="{ anchor }">
                    <div v-if="anchor.showMinuteAnchor"
                        :class="['rounded-full', time.second === anchor.value % 60 ? 'w-1 h-3 bg-blue-400' : 'w-0.5 h-2 bg-red-400']">
                    </div>
                </template>
                <template v-slot:hourLabel="{ anchor }">
                    <div v-if="anchor.showHourLabel && anchor.hourLabel" class="anchor-label text-xl text-red-500">
                        {{ anchor.hourLabel }}
                    </div>
                </template>
                <template v-slot:center>
                    <div
                        class="absolute inset-1/2 w-2.5 h-2.5 rounded-full -translate-x-1/2 -translate-y-1/2 border-2 border-red-500">
                    </div>
                </template>
            </PointerDial>
            <span class="absolute top-0 left-0 w-full h-full bg-image-inherit rounded-full blur-md"></span>
            <span class="absolute top-0 left-0 w-full h-full bg-image-inherit rounded-full blur-xl"></span>
        </Case>
    </div>
</template>

<script lang="ts" setup>
const time = useTime();
</script>

<style scoped>
.anchor-label {
    transform: rotate(calc(-6deg * var(--anchor-value)));
}
</style>
