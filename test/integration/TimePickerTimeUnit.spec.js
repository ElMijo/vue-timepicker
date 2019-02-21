import { shallowMount } from '@vue/test-utils'
import TimePickerTimeUnit from '../../src/components/TimePickerTimeUnit.vue'

describe("Testing TimePickerTimeUnit.vue", () => {
    const wrapper = shallowMount(TimePickerTimeUnit, {
        propsData: {
            value: 0,
            index: 0
        }
    });

    it("Component mounted", () => {
        const vm = wrapper.vm;
        expect(vm.$options.__file, "The component is not a TimePickerTimeUnit instance").to.equal('src/components/TimePickerTimeUnit.vue');
        expect(vm._isVue, "TimePickerTimeUnit instance is not Vue").to.be.true;
        expect(vm._isMounted, "TimePickerTimeUnit instance is not mounted").to.be.true;
        expect(vm._props, "TimePickerTimeUnit instance do not have value prop").to.be.have.property('value');
        expect(vm._props, "TimePickerTimeUnit instance do not have index prop").to.be.have.property('index');
    });

    it("Component render with props", () => {
        expect(wrapper.isVisible(), "TimePickerTimeUnit component is not visible").to.be.true;
        expect(wrapper.classes('timepicker__time__unit'), "TimePickerTimeUnit should have a div with timepicker__time__unit class").to.be.true;
        expect(wrapper.find('div.timepicker__time__unit__value').exists(), "TimePickerTimeUnit should have a div with timepicker__time__unit__value class").to.be.true;
    });

    it("Component watch value and events emitted", () => {
        wrapper.setProps({value: 1});
        expect(wrapper.vm.transitionName, "TimePickerTimeUnit transitionName should be timepicker__time__unit__value").to.be.equal('timepicker__time__unit__value');
        expect(wrapper.emitted().timeUnitValue[0][0], "TimePickerTimeUnit emitted value to be 1").to.be.equal(1);
        expect(wrapper.emitted().timeUnitValue[0][1], "TimePickerTimeUnit emitted index to be 0").to.be.equal(0);
        wrapper.setProps({value: 0});
        expect(wrapper.vm.transitionName, "TimePickerTimeUnit transitionName should be timepicker__time__unit__value--reverse").to.be.equal('timepicker__time__unit__value--reverse');
        expect(wrapper.emitted().timeUnitValue[1][0], "TimePickerTimeUnit emitted value to be 0").to.be.equal(0);
        expect(wrapper.emitted().timeUnitValue[1][1], "TimePickerTimeUnit emitted index to be 0").to.be.equal(0);
    });
});
