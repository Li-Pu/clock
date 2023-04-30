<template>
    <div>
        <slot :text="text">{{ text }}</slot>
    </div>
</template>

<script setup lang="ts">

export interface Props {
    value: number
    formatMethod?: (value: number) => string
}

const props = withDefaults(defineProps<Props>(), { value: 0, formatMethod: timeNumberFormat })
const text = computed(() => props.formatMethod(props.value));

</script>