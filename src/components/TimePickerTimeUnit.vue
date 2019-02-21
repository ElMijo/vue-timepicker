<template>
    <div class="timepicker__time__unit">
        <transition-group :name="transitionName" tag="div">
          <div class="timepicker__time__unit__value" v-for="number in numbers" :key="number">{{ number }}</div>
        </transition-group>
    </div>
</template>
<script>
// import { Time } from './lib';
export default {
    name: 'VueTimePickerTimeUnit',
    props: {
        value: {
            type: Number,
            required: true
        },
        index: {
            type: Number,
            required: true
        },
    },
    data() {
        return {
            numbers: [],
            transitionName: 'timepicker__time__unit__value'
        }
    },
    created () {
        this.isInitialized = true;
        this.numbers.push(this.value);
    },
    methods: {
        setActive: function(index) { this.$emit('timeUnitActive', parseInt(index)); },
    },
    watch: {
        value: function(val, oldVal) {
            if (val !== oldVal) {
                this.transitionName = `timepicker__time__unit__value${val > oldVal ? '':'--reverse'}`;
                this.numbers.splice(0, 1);
                this.numbers.push(val);
                this.$emit('timeUnitValue', parseInt(val), parseInt(this.index));
            }
        }
    }
}
</script>
<style scoped>
</style>
