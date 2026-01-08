<script setup lang="ts">
import type { Article } from "~/types/article";

interface IProps {
    articleItem: Article;
    hideCategory?: boolean;
    variant?: 'default' | 'large' | 'small';
}

const props = withDefaults(defineProps<IProps>(), {
    hideCategory: false,
    variant: 'default'
});
</script>

<template>
    <NuxtLink to="/story-detail" class="card" :class="`card--${variant}`">
        <div class="card__image-wrapper">
            <img :src="props.articleItem.image" alt="Story Image" class="card__image">
            <div v-if="variant !== 'default'" class="">
                <UiBookmark :variant="variant" />
            </div>
        </div>
        <div class="card__content">
            <div class="card__header">
                <h2 class="card__title">{{ props.articleItem.title }}</h2>
                <p class="card__description">{{ props.articleItem.shortContent }}</p>
            </div>
            <div class="card__footer">
                <div class="card__author-info">
                    <img :src="props.articleItem.authorAvatar" alt="Author Avatar" class="card__author-avatar">
                    <span class="card__author-name">{{ props.articleItem.authorName }}</span>
                </div>
                <div class="card__story-info">
                    <span class="card__created-at">{{ props.articleItem.createdDate }}</span>
                    <div v-if="!hideCategory" class="card__genre-badge">
                        <span class="card__genre">{{ props.articleItem.category }}</span>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<style scoped lang="scss">
.card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-decoration: none;

    &:hover {
        cursor: pointer;

        .card__image {
            opacity: 0.8;
            transform: scale(1.05);
        }

        .card__title {
            color: #466543;
        }
    }

    &--default {
        width: 547px;
        height: 736px;

        .card__image {
            width: 547px;
            height: 500px;
        }

        .card__title {
            font-size: 24px;
            line-height: 32px;
            height: 64px;
        }

        .card__description {
            height: 54px;
        }
    }

    &--large {
        width: 1123px;
        height: 1318px;

        .card__image {
            width: 1123px;
            height: 1066px;
        }

        .card__title {
            height: 92px;
        }

        .card__description {
            height: 54px;
        }

    }

    &--small {
        width: 547px;
        height: 636px;

        .card__image {
            width: 547px;
            height: 400px;
        }

        .card__title {
            font-size: 36px;
            line-height: 46px;
            height: 46px;
            margin-top: 12px;
            margin-bottom: 50px;
        }

        .card__description {
            font-weight: 400;
            font-size: 18px;
            line-height: 27px;
            height: 80px;
        }

        .card__footer {
            margin-top: 12px;
        }

        .card__author-avatar {
            width: 30px;
            height: 30px;
        }

        .card__author-name,
        .card__created-at {
            font-weight: 400;
            font-size: 18px;
            line-height: 23px;
        }
    }

    &__image-wrapper {
        overflow: hidden;
        border-radius: 8px;
        flex-shrink: 0;
    }

    &__image {
        width: 547px;
        height: 500px;
        border-radius: 8px;
        object-fit: cover;
        transition: opacity 0.3s, transform 0.3s;
    }

    &__content {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    &__header {
        flex-grow: 1;
    }

    &__title {
        font-weight: 700;
        font-size: 36px;
        line-height: 46px;
        color: #4b4b4b;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    &__description {
        max-height: 80px;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        color: #4b4b4b;
    }

    &__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
    }

    &__author-info {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    &__author-avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
    }

    &__author-name {
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        color: #222222;
    }

    &__story-info {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    &__created-at {
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #222222;
    }

    &__genre-badge {
        background-color: #F0F5ED;
        border-radius: 8px;
        padding: 8px 12px;
        display: inline-block;
    }

    &__genre {
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #466543;
    }

    &__bookmark {
        position: absolute;
        top: 0;
        right: 0;
    }
}
</style>