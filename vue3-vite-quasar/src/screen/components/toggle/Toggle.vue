<template>
  <q-toggle
    v-model="isToggle"
    :label="label"
    :color="color"
    :checked-icon="checkedIcon"
    :unchecked-icon="uncheckedIcon"
    @click="$emit('toggle-btn', isToggle)"
  />
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "Toggle",
    props: {
      label: {
        type: String,
        default: "",
      },
      color: {
        type: String,
        default: "",
      },
      checkedIcon: {
        type: String,
        default: "",
      },
      uncheckedIcon: {
        type: String,
        default: "",
      },
      checked: {
        type: Boolean,
        default: false,
      },
    },
    emits: ["toggle-btn"],
    setup(props) {
      const isToggle = ref(props.checked);
      return {
        isToggle,
      };
    },
  });
</script>
