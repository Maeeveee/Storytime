<script setup lang="ts">
import InputForm from '~/components/ui/InputForm.vue';
import Button from '~/components/ui/Button.vue';
</script>
<template>
    <main class="create">
        <div class="create__navigation-wrapper">
            <NuxtLink to="/dashboard/">
                <Icon name="formkit:arrowleft" class="create__back-icon" />
            </NuxtLink>
            <h1 class="">
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
                <InputForm id="content" placeholder="Enter a content here" />
            </label>
            <label for="cover" class="create__label">
                <span class="create__label__title">Cover Image</span>
                <div id="cover" class="create__input-image">
                    <Icon name="ph:image-thin" class="create__input-icon" />
                    <span>Choose Image</span>
                </div>
            </label>
            <div class="create__button">
                <Button action="#" variant="secondary">cancel</Button>
                <Button action="#" variant="primary">Update Story</Button>
            </div>
        </div>
    </main>
</template>
<style scoped lang="scss">
@media screen and (max-width: 768px) {
    .create {
        padding: 20px;

        &__button {
            display: flex;
            gap: 41px;
            margin-top: 60px;
        }

        &__navigation-wrapper {
            font-family: var(--font-display);
            font-weight: 600;
            font-size: 30px;
            line-height: 29px;
            display: flex;
            align-items: center;
            gap: 30px;
            margin-bottom: 60px;
            color: var(--color-text);
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
            width: 300px;
            height: 250px;
            border-radius: 8px;
            border: 2px solid var(--color-border);
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--color-text-secondary);
            flex-direction: column;
        }

        &__input-icon {
            width: 100px;
            height: 100px;
        }
    }
}

@media screen and (min-width: 768px) {
    .create {
        padding: 220px 110px 60px;

        &__button {
            display: flex;
            gap: 41px;
            margin-top: 60px;
        }

        &__navigation-wrapper {
            font-family: var(--font-display);
            font-weight: 600;
            font-size: 44px;
            line-height: 58px;
            display: flex;
            align-items: center;
            gap: 84px;
            margin-bottom: 60px;
            color: var(--color-text);
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
            width: 500px;
            height: 400px;
            border-radius: 8px;
            border: 2px solid var(--color-border);
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--color-text-secondary);
            flex-direction: column;
        }

        &__input-icon {
            width: 100px;
            height: 100px;
        }
    }
}
</style>