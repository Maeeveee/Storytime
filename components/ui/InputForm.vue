<script setup lang="ts">
// import { ref, computed } from 'vue';
// import { ClassicEditor, Essentials, Paragraph, Bold, Italic } from 'ckeditor5';
// import { Ckeditor } from '@ckeditor/ckeditor5-vue';
// import 'ckeditor5/ckeditor5.css';
defineProps<{ placeholder: string, iconName?: string, variant?: 'primary' | 'secondary', editor?: 'true' | 'false' }>();
const model = defineModel<string>();

// const config = computed(() => {
//     return {
//         plugins: [Essentials, Paragraph, Bold, Italic],
//         toolbar: ['undo', 'redo', '|', 'bold', 'italic', '|', 'formatPainter']
//     }
// })

</script>

<template>
    <div class="input__wrapper">
        <input v-if="editor === 'false'" v-model="model" type="text" :placeholder="placeholder" class="input"
            :class="[`input--${variant ?? 'primary'}`, iconName ? 'input--with-icon' : '']" />
        <Icon class="input__icon" v-if="iconName" :name="iconName" />

        <!-- <Ckeditor v-else <input v-model="model" :editor="ClassicEditor" :config="config" />/> -->
    </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 768px) {
    .input {
        border: 2px solid #CCCCCC;
        border-radius: 8px;
        padding: 15px;
        font-size: 18px;
        line-height: 20px;
        width: 100%;
        height: 100%;

        &--primary {
            max-height: 23px;

            &:focus {
                border-color: #466543;
            }
        }

        &--secondary {
            max-height: 32px;
        }

        &--with-icon {
            padding-right: 50px;
        }


        &:focus {
            outline: none;
        }

        &__icon {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 25px;
            color: #4b4b4b;
        }

        &__wrapper {
            position: relative;
            width: 100%;
            display: flex;
        }

    }

}

@media screen and (min-width: 768px) {
    .input {
        border: 2px solid #CCCCCC;
        border-radius: 8px;
        padding: 24px 30px 24px 30px;
        font-size: 24px;
        line-height: 32px;
        width: 100%;
        height: 100%;

        &--primary {
            max-height: 23px;

            &:focus {
                border-color: #466543;
            }
        }

        &--secondary {
            max-height: 32px;
        }

        &--with-icon {
            padding-right: 60px;
        }


        &:focus {
            outline: none;
        }

        &__icon {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 30px;
            color: #4b4b4b;
        }

        &__wrapper {
            position: relative;
            width: 100%;
            display: flex;
        }

    }

}
</style>
