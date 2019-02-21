import { shallowMount, mount } from '@vue/test-utils'
import TimePickerContainer from '../../src/components/TimePickerContainer.vue'

describe("Testing TimePickerContainer.vue", () => {
    const wrapper = shallowMount(TimePickerContainer);

    it("Component mounted", () => {
        const vm = wrapper.vm;
        expect(vm.$options.__file, "The component is not a TimePickerContainer instance").to.equal('src/components/TimePickerContainer.vue');
        expect(vm._isVue, "TimePickerContainer instance is not Vue").to.be.true;
        expect(vm._isMounted, "TimePickerContainer instance is not mounted").to.be.true;
        expect(vm._props, "TimePickerContainer instance do not have value prop").to.be.have.property('title');
    });

    it("Component render default", () => {
        expect(wrapper.isVisible(), "TimePickerContainer component is not visible").to.be.true;
        expect(wrapper.classes('timepicker'), "TimePickerContainer should have timepicker class").to.be.true;
        expect(wrapper.classes('is-open'), "TimePickerContainer should not have is-open class").to.be.false;
        expect(wrapper.find('div.timepicker__header').exists(), "TimePickerContainer should not have div timepicker__header").to.be.false;
        expect(wrapper.find('div.timepicker__time').exists(), "TimePickerContainer should have div timepicker__time").to.be.true;
        expect(wrapper.find('div.timepicker__time__container').exists(), "TimePickerContainer should have div timepicker__time__container").to.be.true;
        expect(wrapper.find('div.timepicker__time__active__bg').exists(), "TimePickerContainer should have div timepicker__time__active__bg").to.be.true;
    });

    it("Component render with props", () => {
        wrapper.setProps({ title: "Container title" });
        const header = wrapper.find('div.timepicker__header');
        expect(header.exists(), "TimePickerContainer should have div timepicker__header").to.be.true;
        expect(header.text(), "TimePickerContainer div timepicker__header text invalid value").to.be.equal("Container title");
        expect(wrapper.find('div.timepicker__time').exists(), "TimePickerContainer should have div timepicker__time").to.be.true;
        expect(wrapper.find('div.timepicker__time__container').exists(), "TimePickerContainer should have div timepicker__time__container").to.be.true;

    });

    it("Component computed methods", () => {
        const bg = wrapper.find('div.timepicker__time__active__bg');
        expect(bg.attributes('style'), "TimePickerContainer div.timepicker__time__active__bg invalid transform style when index equal to 0").to.be.equal("transform: translate3d(0px, 0, 0);");
        wrapper.vm.timeUnitIndex = 1;
        expect(bg.attributes('style'), "TimePickerContainer div.timepicker__time__active__bg invalid transform style when index equal to 1").to.be.equal("transform: translate3d(34px, 0, 0);");
        wrapper.vm.timeUnitIndex = 2;
        expect(bg.attributes('style'), "TimePickerContainer div.timepicker__time__active__bg invalid transform style when index equal to 2").to.be.equal("transform: translate3d(102px, 0, 0);");
        wrapper.vm.timeUnitIndex = 3;
        expect(bg.attributes('style'), "TimePickerContainer div.timepicker__time__active__bg invalid transform style when index equal to 3").to.be.equal("transform: translate3d(136px, 0, 0);");
    });
});
