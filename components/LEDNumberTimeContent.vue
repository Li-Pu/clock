<template>
    <BaseTimeContent class="font-mono text-9xl flex flex-row text-center" :style="style">
        <TimeText class="flex flex-row items-center" :value="props.time.hour" v-slot="{ text }">
            <LEDNumberCharacter v-for="(char, index) in text.split('')" :index="index" :char="char"
                class="character min-w-[80px] min-h-[128px] ml-6" />
        </TimeText>
        <div class="w-[32px] flex flex-col justify-center items-center ml-6" :class="{ 'invisible': time.second % 2 === 0 }">
            <div class="colon w-[16px] h-[16px] rounded-full"></div>
            <div class="colon mt-[32px] w-[16px] h-[16px] rounded-full"></div>
        </div>
        <TimeText class="flex flex-row items-center" :value="props.time.minute" v-slot="{ text }">
            <LEDNumberCharacter v-for="(char, index) in text.split('')" :index="index" :char="char"
                class="character min-w-[80px] min-h-[128px] ml-6" />
        </TimeText>
        <div class="w-[32px] flex flex-col justify-center items-center ml-6" :class="{ 'invisible': time.second % 2 === 0 }">
            <div class="colon w-[16px] h-[16px] rounded-full"></div>
            <div class="colon mt-[32px] w-[16px] h-[16px] rounded-full"></div>
        </div>
        <TimeText class="flex flex-row items-center" :value="props.time.second" v-slot="{ text }">
            <LEDNumberCharacter v-for="(char, index) in text.split('')" :index="index" :char="char"
                class="character min-w-[80px] min-h-[128px] ml-6" />
        </TimeText>
    </BaseTimeContent>
</template>

<script setup lang="ts">

export interface Props {
    time: {
        hour: number
        minute: number
        second: number
        millisecond: number
    },
    color: string
}

const props = withDefaults(defineProps<Props>(), {
    color: 'black'
})

const style = computed(() => {
    return {
        '--led-number-content-color': props.color,
        'border-color': props.color
    }
})

</script>

<style scoped>
.colon {
    background-color: var(--led-number-content-color);
}

.character {
    color: var(--led-number-content-color);
}
</style>