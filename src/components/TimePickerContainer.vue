<template>
    <div class="timepicker"  tabindex="0" :class="{'is-open': open}">
        <div class="timepicker__header" v-if="title">{{ title }}</div>
        <div class="timepicker__time">
            <div class="timepicker__time__container">
                <TimeUnit :value="time[0]" :index="0"></TimeUnit>
                <TimeUnit :value="time[1]" :index="1"></TimeUnit>
                <div class="timepicker__time__separator">:</div>
                <TimeUnit :value="time[2]" :index="2"></TimeUnit>
                <TimeUnit :value="time[3]" :index="3"></TimeUnit>
                <div class="timepicker__time__active__bg" :style="transform"></div>
            </div>
        </div>
    </div>
</template>
<script>
import { Time, Number } from './lib';
import TimeUnit from './TimePickerTimeUnit.vue';
export default {
    name: 'VueTimePickerContainer',
    components: {
        TimeUnit,
    },
    props: {
        title: String,
        open: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: '00:00'
        },
    },
    data() {
        return {
            time:[0,0,0,0],
            timeUnitIndex: 0
        }
    },
    created () {
        // const vm = this;
        this.time = Time.parseTime(this.value);
    },
    mounted() {
        window.addEventListener('keyup', this.keyup);
        window.addEventListener('keydown', this.keydown);
        // window.addEventListener('keyup', e => {
        //   if (e.keyCode === escKey) {
        //     this.close(true);
        //   }
        // });
    },
    beforeDestroy () {
        window.removeEventListener('keyup', this.keyup);
        window.removeEventListener('keydown', this.keydown);
        // window.addEventListener('keyup', this.close);
    },
    computed: {
        transform () {
            const digitWith = 34;
            const offset = this.timeUnitIndex * digitWith + (this.timeUnitIndex < 2 ? 0 : digitWith)
            return { transform: `translate3d(${offset}px, 0, 0)` };
        },

    },
    methods: {
        keyup: function() {
            const vm = this;
            if (vm.open) {
                console.log("key up");
            }
        },
        keydown: function(event) {
            const vm = this;
            const num = Number.keyToNum(event.keyCode);
            if (vm.open) {
                this.time[this.timeUnitIndex] = num;
                this.$emit('timePickerValue', `${this.time[0]}${this.time[1]}:${this.time[2]}${this.time[3]}`);
            }
        }
    }
}
</script>
<style scoped>
</style>
