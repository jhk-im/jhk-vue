<template>
  <q-input
    v-model="inputValue"
    lazy-rules
    outlined
    :type="isPwd ? 'password' : 'text'"
    :label="label"
    :hint="hint"
    @update:model-value="$emit('input-value', inputValue)"
  >
    <template v-if="type === 'password'" #append>
      <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
    </template>
  </q-input>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "Input",
    props: {
      label: {
        type: String,
        default: "",
      },
      hint: {
        type: String,
        default: "",
      },
      type: {
        type: String,
        default: "text",
      },
    },
    emits: ["input-value"],
    setup(props) {
      const inputValue = ref("");

      let pwd;
      if (props.type === "password") {
        pwd = true;
      } else {
        pwd = false;
      }

      const isPwd = ref(pwd);

      return {
        inputValue,
        isPwd,
      };
    },
  });
</script>
