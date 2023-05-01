<template>
    <div class="w-screen h-screen flex items-center justify-center bg-black">
        <Case class="w-[826px] h-52 p-5 rounded-2xl flex items-center justify-center bg-gradient-to-br from-teal-500 via-amber-500 to-pink-500 animate-color-rotate-infinite">
            <Dial class="absolute p-5 rounded-xl z-50 flex items-center justify-center bg-black">
                <LEDNumberTimeContent class="bg-clip-text text-transparent bg-gradient-to-br from-teal-500 via-amber-500 to-pink-500 animate-color-rotate-infinite" :time="time" color="red"></LEDNumberTimeContent>
            </Dial>
            <span class="absolute w-full h-full bg-image-inherit rounded-2xl blur-md"></span>
            <span class="absolute w-full h-full bg-image-inherit rounded-2xl blur-xl"></span>
        </Case>
    </div>
</template>

<script lang="ts" setup>
const time = useTime();
</script>