import Toggle from "../../../../screen/components/toggle/Toggle.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Quasar/Components/Toggle",
  component: Toggle,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Toggle },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Toggle v-bind="args" />',
});

export const IdToggle = Template.bind({});
IdToggle.args = {
  label: "아이디 기억하기",
  color: "purple-5",
  checkedIcon: "check",
  uncheckedIcon: "clear",
  checked: false,
};
