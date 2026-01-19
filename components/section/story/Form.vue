<script setup lang="ts">
import InputForm from '~/components/ui/InputForm.vue';
import Button from '~/components/ui/Button.vue';
import TiptapEditor from '~/components/ui/TiptapEditor.vue';
import type { CreateStoryPayload, UpdateStoryPayload } from '~/types/api';

const toast = useToast();
const title = ref('')
const content = ref('')
const category = ref(1)
const cover_image = ref('')
const { $api } = useNuxtApp()



interface Props {
    title: 'write' | 'edit'
}

const props = withDefaults(defineProps<Props>(), {
    title: 'write'
});

const handleCreateStory = async () => {
    try {
        const payload: CreateStoryPayload = {
            title: title.value,
            category_id: category.value,
            content: content.value,
            cover_image: cover_image.value
        }

        const response = await $api.story.createStory(payload);
        console.log(response)
        toast.success('Successfully post a story')
        navigateTo('/dashboard')
    } catch (error) {
        console.error(error)
        toast.error('invalid format')
    }

}
const handleUpdateStory = async () => {
    try {
        const payload: UpdateStoryPayload = {
            title: title.value,
            category_id: category.value,
            content: content.value,
            cover_image: cover_image.value
        }

        const response = await $api.story.updateStory(payload);
        console.log(response)
        toast.success('Successfully update a story')
        navigateTo('/dashboard')
    } catch (error) {
        console.error(error)
        toast.error('invalid format')
    }
}


</script>
<template>
    <main class="create">
        <div class="create__navigation-wrapper">
            <NuxtLink to="/dashboard/">
                <Icon name="formkit:arrowleft" class="create__back-icon" />
            </NuxtLink>
            <h1 v-if="title === 'write'">
                Write Story
            </h1>
            <h1 v-else>
                Edit Story
            </h1>
        </div>
        <div>
            <label for="title" class="create__label">
                <span class="create__label__title">Title</span>
                <InputForm v-model="title" id="title" placeholder="Enter a story title" />
            </label>
            <label for="category" class="create__label">
                <span class="create__label__title">Category</span>
                <InputForm id="category" placeholder="Select a category" />
            </label>
            <label for="content" class="create__label">
                <span class="create__label__title">Content</span>
                <TiptapEditor />
            </label>
            <label for="cover" class="create__label">
                <span class="create__label__title">Cover Image</span>
                <div id="cover" class="create__input-image">
                    <!-- <div class="create__cancel">
                            <span class="create__cancel__button">
                                <Icon class="create__cancel__icon" name="iconoir:xmark" />
                            </span>
                        </div> -->
                    <Icon name="ph:image-thin" class="create__input-icon" />
                    <span>Choose Image</span>
                </div>
            </label>
            <div class="create__button">
                <Button action="#" variant="secondary">cancel</Button>
                <Button v-if="title === 'write'" @click="handleCreateStory" variant="primary">Post Story</Button>
                <Button v-else @click="handleUpdateStory" variant="primary">Update Story</Button>
            </div>
        </div>
    </main>
</template>
<style scoped lang="scss">
.create {
    padding: fluid(100, 180) fluid(20, 40) fluid(20, 60);
    max-width: fluid(375, 1700);
    margin-left: auto;
    margin-right: auto;

    @include tablet {
        padding-top: fluid(80, 120);
    }

    &__cancel {
        @include desktop {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            bottom: vw(130);
            left: vw(550);

            &__button {
                background-color: var(--color-primary);
                border-radius: 50%;
            }

            &__icon {
                font-size: vw(35);
                color: var(--color-white);
            }
        }
    }

    &__button {
        display: flex;
        gap: fluid(41, 41);
        margin-top: fluid(60, 60);

        @include tablet {
            justify-content: center;
        }

        @include mobile {
            flex-direction: column;
            gap: fluid(20, 20);
        }
    }

    &__navigation-wrapper {
        font-family: var(--font-display);
        font-weight: 600;
        display: flex;
        align-items: center;
        color: var(--color-text);
        gap: fluid(30, 84);
        font-size: fluid(30, 44);
        line-height: fluid(29, 58);
        margin-bottom: fluid(60, 60);

        @include tablet {
            gap: fluid(20, 40);
        }
    }

    &__back-icon {
        color: var(--color-text);
    }

    &__label {
        display: flex;
        flex-direction: column;
        gap: fluid(20, 20);
        margin-top: fluid(30, 30);

        &__title {
            font-weight: 400;
            color: var(--color-text-secondary);
            font-size: fluid(18, 18);
            line-height: fluid(23, 23);
        }
    }

    &__input-image {
        border: 2px solid var(--color-border);
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--color-text-secondary);
        flex-direction: column;
        border-radius: fluid(8, 8);
        width: fluid(300, 500);
        height: fluid(250, 400);

        @include tablet {
            width: 100%;
            max-width: 400px;
            height: 300px;
        }
    }

    &__input-icon {
        width: fluid(100, 100);
        height: fluid(100, 100);
    }
}
</style>