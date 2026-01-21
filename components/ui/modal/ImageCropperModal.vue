<script setup lang="ts">
import ImageCropper from '../ImageCropper.vue';
import Button from '../Button.vue';

defineProps<{
  imageSrc: string
}>()

const emit = defineEmits<{
  close: []
  confirm: [blob: Blob]
}>()

const cropperRef = ref<InstanceType<typeof ImageCropper> | null>(null)
const isCropping = ref(false)

async function handleCrop() {
  if (!cropperRef.value) return
  
  isCropping.value = true
  try {
    const blob = await cropperRef.value.getCroppedBlob()
    if (blob) {
      emit('confirm', blob)
    }
  } finally {
    isCropping.value = false
  }
}

function handleCancel() {
  emit('close')
}
</script>

<template>
  <div class="image-cropper-modal">
    <h2 class="image-cropper-modal__title">Crop Image</h2>
    
    <div class="image-cropper-modal__content">
      <ImageCropper ref="cropperRef" :src="imageSrc" :aspect-ratio="1" />
    </div>
    
    <div class="image-cropper-modal__actions">
      <Button variant="secondary" @click="handleCancel" :disabled="isCropping">
        Cancel
      </Button>
      <Button variant="primary" @click="handleCrop" :disabled="isCropping">
        {{ isCropping ? 'Cropping...' : 'Crop & Save' }}
      </Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.image-cropper-modal {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    font-weight: 700;
    color: var(--color-text);
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 24px;
    text-align: center;
    width: 100%;

    @include tablet {
      font-size: 24px;
    }
  }

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
    width: 100%;
  }

  &__actions {
    display: flex;
    justify-content: center;
    gap: 16px;
    width: 100%;
    margin-top: 8px;
  }
}
</style>
