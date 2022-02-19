import Input from "../../../../screen/components/input/Input.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Quasar/Components/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    inputValue: { action: "input-value" },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Input },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Input v-bind="args" />',
});

export const TextInput = Template.bind({});
TextInput.args = {
  label: "텍스트를 입력해주세요.",
  hint: "",
  type: "text",
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  label: "비밀번호를 입력해주세요.",
  hint: "영문숫자포함 11자리 입력해주세요.",
  type: "password",
};
