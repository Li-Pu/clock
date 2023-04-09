<template>
    <div class="w-full h-full">
        <div class="w-full h-full flex items-center justify-center">
            <div class="font-mono text-9xl flex flex-row text-center">
                <span>{{ timeNumberFormat(time.hour) }}</span>
                <span :class="{ 'invisible': time.second % 2 === 0 }">:</span>
                <span>{{ timeNumberFormat(time.minute) }}</span>
                <span :class="{ 'invisible': time.second % 2 === 0 }">:</span>
                <span>{{ timeNumberFormat(time.second) }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const time = useTime();
</script>