<template>
    <div class="timepicker-wrap">
        <input type="text" class="time" ref="timeInput" :value="sanitizeValue" />
    </div>
</template>
<script>
import { Time } from './lib';
export default {
    name: 'VueTimePicker',
    props: {
        value: String
    },
    computed: {
        sanitizeValue() {
            return Time.isValidFormat(this.value)?this.value:'';
        }
    },
    // data() {
    //     return {
    //         value: ''
    //     }
    // },
    methods: {
        press(event) {
            this.$data.time = event.target.value
        },
        result(event) {
            event.preventDefault();
            alert(this.$data.time)
        }
    }
}
</script>
<style scoped>
</style>
