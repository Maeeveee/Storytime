<script setup lang="ts">
import type { Article } from '~/types/article';
import ViewCoverModal from '~/components/ui/modal/ViewCoverModal.vue';
defineProps<{ articleItem: Article; }>()

const modal = useModal();

function viewCover() {
    modal.open({
        component: ViewCoverModal
    });
}

</script>

<template>
    <section class="container">
        <div class="story-section__content-wrapper">
            <div class="story-section__image-wrapper">
                <button @click="viewCover" class="story-section__hide-button">
                    <img :src="articleItem.image" :alt="articleItem.title" class="story-section__image">
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
.story-section {
    &__content-wrapper {
        display: flex;
        gap: fluid(40, 40);
        padding-left: fluid(16, 16);
        padding-right: fluid(16, 16);

        @include tablet {
            flex-direction: column;
            align-items: center;
        }

        @include mobile {
            flex-direction: column;
        }
    }

    &__hide-button {
        border: none;
        background-color: var(--color-white);
    }

    &__image {
        border-radius: fluid(8, 8);
        width: fluid(320, 547);
        height: fluid(254, 600);

        @include tablet {
            width: 100%;
            max-width: 500px;
            height: auto;
        }

        @include desktop {
            &:hover {
                cursor: pointer;
            }
        }
    }

    &__article-text {
        font-weight: 400;
        color: var(--color-text);
        font-size: fluid(16, 18);
        line-height: fluid(27, 27);

        @include tablet {
            text-align: justify;
        }

        @include mobile {
            text-align: justify;
        }
    }
}
</style>