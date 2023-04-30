<template>
    <div class="w-screen h-screen flex items-center justify-center bg-black">
        <Case class="w-[50vmin] p-2.5 aspect-square rounded-full bg-gray-100">
            <PointerDial class="w-full h-full p-2.5 bg-black rounded-full text-gray-100">
                <PointerTimeContent :time="time"/>
            </PointerDial>
        </Case>
    </div>
</template>

<script lang="ts" setup>
const time = useTime();
</script>
