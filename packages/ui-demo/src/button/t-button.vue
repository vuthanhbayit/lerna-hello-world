<template>
  <component
      :is="tag"
      class="button buttonPrimary"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { onMounted, computed, defineComponent, PropType } from '@vue/composition-api'
import {sleep} from "@vt7/utils-demo";
export type Size = 'xs' | 'sm' | 'md' | 'lg'
export type Color = 'primary' | 'secondary' | 'outline'
export type Type = 'button' | 'submit' | 'reset'

export default defineComponent({
  name: 'TButton',

  props: {
    size: { type: String as PropType<Size>, default: 'md' },
    color: { type: String as PropType<Color>, default: '' },
    type: { type: String as PropType<Type>, default: 'button' },
    block: { type: Boolean, default: false },
    rounded: { type: Boolean, default: false },
    circle: { type: Boolean, default: false },
    nuxt: { type: Boolean, default: false },
    href: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
  },

  setup(props) {
    const tag = computed(() => {
      return props.nuxt ? 'nuxt-link' : 'button'
    })

    onMounted(async () => {
      await sleep(1000)
      console.log('sleep', 1000)
      await sleep(2000)
      console.log('sleep', 2000)
      await sleep(3000)
      console.log('sleep', 3000)
      await sleep(4000)
      console.log('sleep', 4000)
    })

    return { tag }
  },
})
</script>
