<template>
    <div class="timepicker-wrap">
        <input type="text" class="time" ref="timeInput" :value="sanitizeValue" />
        <TimePickerContainer></TimePickerContainer>
    </div>
</template>
<script>
import { Time } from './lib';
import TimePickerContainer from './TimePickerContainer.vue';

export default {
    name: 'VueTimePicker',
    props: {
        value: String
    },
    components: {
        TimePickerContainer
    },
    computed: {
        sanitizeValue() {
            return Time.isValidFormat(this.value)?this.value:'';
        }
    }
}
</script>
<style scoped>
</style>
