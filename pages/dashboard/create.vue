<script setup lang="ts">
import Form from '~/components/section/story/Form.vue';

definePageMeta({
    middleware: 'auth'
})
</script>
<template>
   <Form title="write"/>
</template>
<style scoped lang="scss">

</style>