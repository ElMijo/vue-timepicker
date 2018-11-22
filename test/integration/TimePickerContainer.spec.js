import { shallowMount } from '@vue/test-utils'
import TimePickerContainer from '../../src/components/TimePickerContainer.vue'

describe("Testing TimePickerContainer.vue", () => {
    const wrapper = shallowMount(TimePickerContainer);

    it("Component mounted", () => {
        const vm = wrapper.vm;
        expect(vm.$options.__file, "The component is not a TimePickerContainer instance").to.equal('src/components/TimePickerContainer.vue');
        expect(vm._isVue, "TimePickerContainer instance is not Vue").to.be.true;
        expect(vm._isMounted, "TimePickerContainer instance is not mounted").to.be.true;
        // expect(vm._props, "TimePickerContainer instance do not have value prop").to.be.have.property('value');
    });

    it("Component render", () => {
        expect(wrapper.isVisible(), "TimePickerContainer component is not visible").to.be.true;
        expect(wrapper.classes('timepicker'), "TimePickerContainer should have timepicker class").to.be.true;
        expect(wrapper.classes('is-open'), "TimePickerContainer should not have is-open class").to.be.false;
    });
});
