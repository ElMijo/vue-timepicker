<template>
    <div class="timepicker-wrap">
        <input type="text" class="time" ref="timeInput" :value="sanitizeValue" @focus="open" />
        <TimePickerContainer ref="timePicker" :open="openPicker" :value="value" :title="containerTitle"></TimePickerContainer>
    </div>
</template>
<script>
import { Time } from './lib';
import TimePickerContainer from './TimePickerContainer.vue';

export default {
    name: 'VueTimePicker',
    props: {
        value: String,
        containerTitle: String,
    },
    components: {
        TimePickerContainer
    },
    data() {
        return {
            openPicker: false
        }
    },
    mounted () {
         this.$refs.timePicker.$on('timePickerValue', (val) => {
            this.$emit('input', val);
        });
    },
    computed: {
        sanitizeValue() {
            return Time.isValidFormat(this.value)?this.value:'';
        }
    },
    methods: {
        open() {
            this.$refs.timeInput.blur();
            this.$refs.timePicker.$el.focus();
            this.openPicker = true;
        },
    }
}
</script>
<style scoped>
</style>
