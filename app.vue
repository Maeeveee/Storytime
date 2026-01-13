<script setup lang="ts">
import BaseModal from './components/ui/modal/BaseModal.vue';
import ToastContainer from './components/ui/toast/ToastContainer.vue';
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <BaseModal />
    <ToastContainer />
  </div>
</template>
