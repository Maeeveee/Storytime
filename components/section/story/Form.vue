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
    @include desktop {
        padding: vw(220) vw(110) vw(60);
    }

    @include mobile {
        padding: vw-mobile(20);
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

        @include desktop {
            gap: vw(41);
            margin-top: vw(60);
        }

        @include mobile {
            gap: vw-mobile(41);
            margin-top: vw-mobile(60);
        }
    }

    &__navigation-wrapper {
        font-family: var(--font-display);
        font-weight: 600;
        display: flex;
        align-items: center;
        color: var(--color-text);

        @include desktop {
            gap: vw(84);
            font-size: vw(44);
            line-height: vw(58);
            margin-bottom: vw(60);
        }

        @include mobile {
            gap: vw-mobile(30);
            font-size: vw-mobile(30);
            line-height: vw-mobile(29);
            margin-bottom: vw-mobile(60);
        }
    }

    &__back-icon {
        color: var(--color-text);
    }

    &__label {
        display: flex;
        flex-direction: column;

        @include desktop {
            gap: vw(20);
            margin-top: vw(30);
        }

        @include mobile {
            gap: vw-mobile(20);
            margin-top: vw-mobile(30);

        }

        &__title {
            font-weight: 400;
            color: var(--color-text-secondary);

            @include desktop {
                font-size: vw(18);
                line-height: vw(23);
            }

            @include mobile {
                font-size: vw-mobile(18);
                line-height: vw-mobile(23);
            }
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

        @include desktop {
            width: vw(500);
            height: vw(400);
        }

        @include mobile {
            width: vw-mobile(300);
            height: vw-mobile(250);
        }
    }

    &__input-icon {
        @include desktop {
            width: vw(100);
            height: vw(100);
        }

        @include mobile {
            width: vw-mobile(100);
            height: vw-mobile(100);
        }
    }
}
</style>