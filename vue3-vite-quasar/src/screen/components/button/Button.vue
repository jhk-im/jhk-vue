<template>
  <q-btn
    unelevated
    no-caps
    :dense="dense ? true : false"
    :color="color"
    :size="size"
    :label="label"
    :style="style"
    :class="classes"
    :icon-right="icon"
    @click="onClick"
  />
</template>

<script lang="ts">
  import { defineComponent, reactive } from "vue";
  export default defineComponent({
    name: "Button",
    props: {
      color: {
        type: String,
        default: "",
      },
      size: {
        type: String,
        default: "",
      },
      label: {
        type: String,
        default: "",
      },
      style: {
        type: String,
        default: "",
      },
      classes: {
        type: String,
        default: "",
      },
      icon: {
        type: String,
        default: "",
      },
      dense: {
        type: Boolean,
        default: false,
      },
    },
    emits: ["btn-click"],
    setup(props, { emit }) {
      props = reactive(props);
      return {
        props,
        onClick() {
          emit("btn-click");
        },
      };
    },
    methods: {},
  });
</script>
