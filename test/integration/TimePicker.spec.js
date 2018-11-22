import { mount } from '@vue/test-utils'
import TimePicker from '../../src/components/TimePicker.vue'

describe("Testing TimePicker.vue", () => {
    const wrapper = mount(TimePicker);

    it("Component mounted", () => {
        const vm = wrapper.vm;
        expect(vm.$options.__file, "The component is not a TimePicker instance").to.equal('src/components/TimePicker.vue');
        expect(vm._isVue, "TimePicker instance is not Vue").to.be.true;
        expect(vm._isMounted, "TimePicker instance is not mounted").to.be.true;
        expect(vm._props, "TimePicker instance do not have value prop").to.be.have.property('value');
    });

    it("Component render", () => {
        expect(wrapper.isVisible(), "TimePicker component is not visible").to.be.true;
        expect(wrapper.classes('timepicker-wrap'), "TimePicker wrap do not have timepicker-wrap class").to.be.true;
        expect(wrapper.contains('input.time'), "TimePicker component do not have input").to.be.true;
        expect(wrapper.contains('div.timepicker'), "TimePicker should have a timepicker container").to.be.true;
    });
});
