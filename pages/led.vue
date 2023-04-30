<template>
    <div class="w-screen h-screen">
        <Case class="w-full h-full">
            <Dial class="w-full h-full flex items-center justify-center">
                <LEDNumberTimeContent :time="time"></LEDNumberTimeContent>
            </Dial>
        </Case>
    </div>
</template>

<script lang="ts" setup>
const time = useTime();
</script>
