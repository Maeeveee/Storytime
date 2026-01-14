<script setup lang="ts">
import InputForm from '~/components/ui/InputForm.vue';
import Button from '~/components/ui/Button.vue';
import TiptapEditor from '~/components/ui/TiptapEditor.vue';

const toast = useToast();

interface Props {
    title: 'write' | 'edit'
}

const props = withDefaults(defineProps<Props>(), {
    title: 'write'
});

function handleStory() {
    if (props.title === 'write') {
        toast.success('Successfully post a story')
        navigateTo('/dashboard')
    } else {
        toast.success('Successfully edit a story')
        navigateTo('/dashboard')

    }

}


</script>
<template>
    <main class="create">
        <div class="create__navigation-wrapper">
            <NuxtLink to="/dashboard/">
                <Icon name="formkit:arrowleft" class="create__back-icon" />
            </NuxtLink>
            <h1 v-if="title === 'write'" class="">
                Write Story
            </h1>
            <h1 v-else class="">
                Edit Story
            </h1>
        </div>
        <div>
            <label for="title" class="create__label">
                <span class="create__label__title">Title</span>
                <InputForm id="title" placeholder="Enter a story title" />
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
                    <input type="file">
                </div>
            </label>
            <div class="create__button">
                <Button action="#" variant="secondary">cancel</Button>
                <Button v-if="title === 'write'" @click="handleStory" variant="primary">Post Story</Button>
                <Button v-else @click="handleStory" variant="primary">Update Story</Button>
            </div>
        </div>
    </main>
</template>
<style scoped lang="scss">
.create {
    @include mobile {
        padding: 20px;
    }

    @include desktop {
        padding: 220px 110px 60px;
    }

    &__cancel {
        @include desktop {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            bottom: 130px;
            left: 550px;

            &__button {
                background-color: var(--color-primary);
                border-radius: 50%;
            }

            &__icon {
                font-size: 35px;
                color: var(--color-white);
            }
        }
    }

    &__button {
        display: flex;
        gap: 41px;
        margin-top: 60px;
    }

    &__navigation-wrapper {
        font-family: var(--font-display);
        font-weight: 600;
        display: flex;
        align-items: center;
        margin-bottom: 60px;
        color: var(--color-text);

        @include mobile {
            font-size: 30px;
            line-height: 29px;
            gap: 30px;
        }

        @include desktop {
            font-size: 44px;
            line-height: 58px;
            gap: 84px;
        }
    }

    &__back-icon {
        color: var(--color-text);
    }

    &__label {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 30px;

        &__title {
            font-weight: 400;
            font-size: 18px;
            line-height: 23px;
            color: var(--color-text-secondary);
        }
    }

    &__input-image {
        border-radius: 8px;
        border: 2px solid var(--color-border);
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--color-text-secondary);
        flex-direction: column;

        @include mobile {
            width: 300px;
            height: 250px;
        }

        @include desktop {
            width: 500px;
            height: 400px;
        }
    }

    &__input-icon {
        width: 100px;
        height: 100px;
    }
}
</style>