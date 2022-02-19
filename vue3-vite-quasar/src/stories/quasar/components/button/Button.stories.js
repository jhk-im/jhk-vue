import Button from "../../../../screen/components/button/Button.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Quasar/Components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    color: { control: "color" },
    size: { control: { type: "select", options: ["md", "xs"] } },
    onClick: {
      action: "click",
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Button },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Button v-bind="args" />',
});

export const LoginButton = Template.bind({});
LoginButton.args = {
  color: "purple-6",
  size: "md",
  label: "LoginButton",
  style: "color: #de350b",
  classes: "q-px-md q-py-md full-width",
  icon: "login",
  dense: false,
};

export const LogOutButton = Template.bind({});
LogOutButton.args = {
  label: "로그아웃",
  icon: "logout",
  color: "red-5",
  class: "q-px-md q-py-xs",
  dense: true,
  style: "font-weight: bold",
};
