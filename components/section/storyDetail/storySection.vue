<script setup lang="ts">
import type { Article } from '~/types/article';
import ViewCoverModal from '~/components/ui/modal/ViewCoverModal.vue';
defineProps<{ articleItem: Article; }>()

function openModal() {
    document.getElementById("image")?.classList.toggle("story-section__modal__show")
}

</script>

<template>
    <section class="container">
        <div class="story-section__content-wrapper">
            <div class="story-section__image-wrapper">
                <button v-on:click="openModal" class="story-section__hide-button">
                    <img :src="articleItem.image" :alt="articleItem.title" class="story-section__image">
                    <ViewCoverModal id="image" class="story-section__modal device--mobile" />
                </button>
            </div>
            <div class="story-section__content-wrapper">
                <article class="story-section__article-text">
                    {{ articleItem.shortContent }}
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@media screen and (max-width: 768px) {
    .device {
        &--mobile {
            display: none;
        }
    }


    .story-section {
        &__content-wrapper {
            gap: 40px;
            display: flex;
            flex-direction: column;
        }

        &__hide-button {
            border: none;
            background-color: var(--color-white);
        }

        &__image {
            width: 350px;
            height: 254px;
            border-radius: 8px;
        }

        &__article-text {
            font-size: 16px;
            font-weight: 400;
            line-height: 27px;
            color: var(--color-text);
            text-align: justify;
        }
    }
}

@media screen and (min-width: 768px) {
    .story-section {
        &__modal {
            display: none;

            &__show {
                display: block;
            }
        }

        &__hide-button {
            border: none;
            background-color: var(--color-white);
        }


        &__content-wrapper {
            padding-left: 16px;
            padding-right: 16px;
            gap: 40px;
            display: flex;
        }

        &__image {
            width: 547px;
            height: 600px;
            border-radius: 8px;

            &:hover {
                cursor: pointer;
            }
        }

        &__article-text {
            font-size: 18px;
            font-weight: 400;
            line-height: 27px;
            color: var(--color-text);
        }
    }
}
</style>