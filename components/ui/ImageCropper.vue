<script setup lang="ts">
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'

const props = withDefaults(defineProps<{
  src: string
  aspectRatio?: number
}>(), {
  aspectRatio: 1
})

const imageRef = ref<HTMLImageElement | null>(null)
const cropperInstance = ref<Cropper | null>(null)
const isReady = ref(false)

function initCropper() {
  if (imageRef.value && !cropperInstance.value) {
    cropperInstance.value = new Cropper(imageRef.value, {
      aspectRatio: props.aspectRatio,
      viewMode: 1,
      dragMode: 'move',
      autoCropArea: 0.9,
      restore: false,
      guides: true,
      center: true,
      highlight: false,
      cropBoxMovable: true,
      cropBoxResizable: true,
      toggleDragModeOnDblclick: false,
      ready() {
        isReady.value = true
      }
    })
  }
}

function onImageLoad() {
  nextTick(() => {
    initCropper()
  })
}

onUnmounted(() => {
  if (cropperInstance.value) {
    cropperInstance.value.destroy()
    cropperInstance.value = null
  }
})

function getCroppedBlob(): Promise<Blob | null> {
  return new Promise((resolve) => {
    if (!cropperInstance.value) {
      resolve(null)
      return
    }
    
    const canvas = cropperInstance.value.getCroppedCanvas({
      width: 512,
      height: 512,
      imageSmoothingEnabled: true,
      imageSmoothingQuality: 'high',
    })
    
    if (!canvas) {
      resolve(null)
      return
    }
    
    canvas.toBlob((blob) => {
      resolve(blob)
    }, 'image/jpeg', 0.9)
  })
}

defineExpose({
  getCroppedBlob
})
</script>

<template>
  <div class="image-cropper">
    <img 
      ref="imageRef" 
      :src="src" 
      alt="Image to crop" 
      class="image-cropper__image"
      @load="onImageLoad"
    />
  </div>
</template>

<style scoped lang="scss">
.image-cropper {
  width: 450px;
  height: 450px;
  
  @include tablet {
    width: 300px;
    height: 300px;
  }
  
  &__image {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
}

:deep(.cropper-container) {
  width: 100% !important;
  height: 100% !important;
}

:deep(.cropper-view-box),
:deep(.cropper-face) {
  border-radius: 50%;
}

:deep(.cropper-view-box) {
  box-shadow: 0 0 0 1px #39f;
  outline: 0;
}

:deep(.cropper-face) {
  background-color: inherit !important;
}

:deep(.cropper-dashed),
:deep(.cropper-line) {
  display: none;
}

:deep(.cropper-point) {
  width: 12px !important;
  height: 12px !important;
  background-color: #39f !important;
  border-radius: 50%;
  opacity: 1 !important;
}
</style>
