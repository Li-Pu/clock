<template>
    <div class="clock-container">
        <div class="clock-content">
            <div class="clock-text">
                <span class="time-text hour">{{ time.hour }}</span>
                <span class="gap">{{ time.second % 2 === 0 ? '' : ':' }}</span>
                <span class="time-text minute">{{ time.minute }}</span>
                <span class="gap">{{ time.second % 2 === 0 ? '' : ':' }}</span>
                <span class="time-text second">{{ time.second }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const time = useTime();
</script>

<style scoped>
.clock-container {
    width: 100vw;
    height: 100vh;
}

.clock-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.clock-text {
    font-size: 100px;
}

.clock-text .gap {
    display: inline-block;
    width: 0.5em;
    text-align: center;
    vertical-align: baseline;
}

.clock-text .time-text {
    display: inline-block;
    width: 1.2em;
}
</style>