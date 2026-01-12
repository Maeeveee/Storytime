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
    <NuxtLink :to="`/story/${props.articleItem.title}`" class="card" :class="`card--${variant}`">
        <div class="card__image-wrapper">
            <img :src="props.articleItem.image" alt="Story Image" class="card__image">
        </div>
        <div class="card__content">
            <div class="card__header">
                <h2 class="card__title">{{ props.articleItem.title }}</h2>
            </div>
            <div>
                <p class="card__description">{{ props.articleItem.shortContent }}</p>
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
        </div>
    </NuxtLink>
</template>

<style scoped lang="scss">
@media screen and (max-width: 768px) {
    .card {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        margin-bottom: 40px;

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
            width: 34.1875rem;
            max-width: 100%;
            height: auto;

            .card__image {
                width: 100%;
                height: auto;
                aspect-ratio: 500/420;
            }

            .card__title {
                font-size: clamp(1.5rem, 4vw, 2.25rem);
                line-height: 1.3;
                margin-bottom: 1.25rem;
            }

            .card__description {
                text-align: justify;
                min-height: 3.375rem;
            }

            @media (max-width: 768px) {
                width: 100%;
            }
        }

        &--large {
            width: 70.1875rem;
            max-width: 100%;
            height: auto;

            .card__image {
                width: 100%;
                height: auto;
                aspect-ratio: 1123/1066;
            }

            .card__title {
                min-height: 5.75rem;
            }

            .card__description {
                text-align: justify;
                min-height: 3.375rem;
            }

            @media (max-width: 768px) {
                width: 100%;
            }
        }

        &--small {
            width: 34.1875rem;
            max-width: 100%;
            height: auto;

            .card__image {
                width: 160px;
                height: 160px;
            }

            .card__title {
                width: 160px;
                font-size: 18px;
                line-height: 1.3;
                min-height: 2.875rem;
                margin-top: 0.75rem;
            }

            .card__description {
                width: 160px;
                text-align: justify;
                font-weight: 400;
                font-size: 1.125rem;
                min-height: 5rem;
                max-height: 3.6em;
                display: block;
                text-overflow: ellipsis;
                word-wrap: break-word;
                overflow: hidden;
            }

            .card__author-avatar {
                display: none;
            }

            .card__author-name{
                font-size: 14px;
            }

            .card__genre-badge {
                background-color: #F0F5ED;
                border-radius: 8px;
                padding: 4px 8px;
                display: inline-block;
            }

            .card__genre {
                font-weight: 400;
                font-size: 12px;
                line-height: 23px;
                color: #466543;
            }

            @media (max-width: 768px) {
                width: 100%;
            }
        }

        &__image-wrapper {
            overflow: hidden;
            border-radius: 8px;
            flex-shrink: 0;
        }

        &__image {
            width: 100%;
            height: 100%;
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
            font-size: 18px;
            line-height: 20px;
            color: #222222;
        }

        &__story-info {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        &__created-at {
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #222222;

            display: none;
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
    }
}

@media screen and (min-width: 768px) {
    .card {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        margin-bottom: 40px;

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
            width: 34.1875rem;
            max-width: 100%;
            height: auto;

            .card__image {
                width: 100%;
                height: auto;
                aspect-ratio: 547/500;
            }

            .card__title {
                font-size: clamp(1.5rem, 4vw, 2.25rem);
                line-height: 1.3;
                margin-bottom: 1.25rem;
            }

            .card__description {
                min-height: 3.375rem;
            }

            @media (max-width: 768px) {
                width: 100%;
            }
        }

        &--large {
            width: 70.1875rem;
            max-width: 100%;
            height: auto;

            .card__image {
                width: 100%;
                height: auto;
                aspect-ratio: 1123/1066;
            }

            .card__title {
                min-height: 5.75rem;
            }

            .card__description {
                min-height: 3.375rem;
            }

            @media (max-width: 768px) {
                width: 100%;
            }
        }

        &--small {
            width: 34.1875rem;
            max-width: 100%;
            height: auto;

            .card__image {
                width: 100%;
                height: auto;
                aspect-ratio: 547/400;
            }

            .card__title {
                font-size: clamp(1.5rem, 4vw, 2.25rem);
                line-height: 1.3;
                min-height: 2.875rem;
                margin-top: 0.75rem;
                margin-bottom: 3.125rem;
            }

            .card__description {
                font-weight: 400;
                font-size: 1.125rem;
                line-height: 1.5;
                min-height: 5rem;
            }

            @media (max-width: 768px) {
                width: 100%;
            }
        }

        &__image-wrapper {
            overflow: hidden;
            border-radius: 8px;
            flex-shrink: 0;
        }

        &__image {
            width: 100%;
            height: 100%;
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
    }
}
</style>