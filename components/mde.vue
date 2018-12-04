<template>
  <textarea ref="easymde"></textarea>
</template>

<script>
export default {
  props: { value: { type: String, default: '' } },
  mounted() {
    const EasyMDE = require('easymde');
    this.easymde = new EasyMDE({ element: this.$refs.easymde });
    this.easymde.value(this.value);
    this.easymde.codemirror.inputStyle = 'textarea';
    this.easymde.codemirror.on('change', () => {
      this.$emit('input', this.easymde.value());
    });
  },
  watch: {
    value(newVal, oldVal) {
      const cursorPos = this.easymde.codemirror.getCursor('end');
      this.easymde.value(newVal);
      this.easymde.codemirror.setCursor(cursorPos);
    },
  },
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/easymde/dist/easymde.min.css',
        },
      ],
    };
  },
};
</script>

<style></style>
