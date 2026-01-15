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

        @include desktop {
            gap: vw(40);
            padding-left: vw(16);
            padding-right: vw(16);
        }

        @include mobile {
            gap: vw-mobile(40);
            flex-direction: column;
        }
    }

    &__hide-button {
        border: none;
        background-color: var(--color-white);
    }

    &__image {
        border-radius: 8px;

        @include desktop {
            width: vw(547);
            height: vw(600);

            &:hover {
                cursor: pointer;
            }
        }

        @include mobile {
            width: vw-mobile(320);
            height: vw-mobile(254);
        }
    }

    &__article-text {
        font-weight: 400;
        color: var(--color-text);

        @include desktop {
            font-size: vw(18);
            line-height: vw(27);
        }

        @include mobile {
            font-size: vw-mobile(16);
            line-height: vw-mobile(27);
            text-align: justify;
        }
    }
}
</style>