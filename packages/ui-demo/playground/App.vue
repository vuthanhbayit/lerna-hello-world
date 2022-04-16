<template>
  <div class="p-4 bg-gray-200">
    <img alt="Vue logo" src="./assets/logo.png" />

    <t-button block>Button</t-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import {TButton} from '../dist'

export default defineComponent({
  components: {
    TButton
  }
})
</script>
