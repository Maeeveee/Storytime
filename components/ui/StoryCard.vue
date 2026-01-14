<script setup lang="ts">
import type { Article } from "~/types/article";
import ConfirmContent from "./modal/ConfirmContent.vue";


interface IProps {
    articleItem: Article;
    hideCategory?: boolean;
    variant?: 'default' | 'large' | 'small';
    isEdit?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
    hideCategory: false,
    variant: 'default',
    isEdit: false,
});

const modal = useModal();
const toast = useToast();

function handleDelete() {
    modal.open({
        component: ConfirmContent,
        props: {
            title: 'Delete Story',
            message: 'Are you sure want to delete this story?',
            confirmText: 'Delete',
            cancelText: 'Cancel'
        },
        onConfirm: () => {
            toast.success('Successfully delete a story')
        },
    })
}

</script>

<template>
    <NuxtLink :to="`/story/${props.articleItem.title}`" class="card" :class="`card--${variant}`">
        <div class="card__image-wrapper">
            <div v-if="isEdit" class="card__icon-wrapper">
                <NuxtLink to="/dashboard/edit" class="card__icon__background">
                    <Icon class="card__icon__text" name="lucide:edit" />
                </NuxtLink>
                <button class="card__icon__background">
                    <Icon class="card__icon__text" name="lucide:trash-2" @click="handleDelete" />
                </button>
            </div>
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
            color: var(--color-primary);
        }
    }

    &--default {
        width: 34.1875rem;
        max-width: 100%;
        height: auto;

        .card__image {
            width: 100%;
            height: auto;

            @include mobile {
                aspect-ratio: 500/420;
            }

            @include desktop {
                aspect-ratio: 547/500;
            }
        }

        .card__title {
            font-size: clamp(1.5rem, 4vw, 2.25rem);
            line-height: 1.3;
            margin-bottom: 1.25rem;
        }

        .card__description {
            min-height: 3.375rem;

            @include mobile {
                text-align: justify;
            }
        }

        @include mobile {
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

            @include mobile {
                text-align: justify;
            }
        }

        @include mobile {
            width: 100%;
        }
    }

    &--small {
        width: 34.1875rem;
        max-width: 100%;
        height: auto;

        .card__image {
            @include mobile {
                width: 160px;
                height: 160px;
            }

            @include desktop {
                width: 100%;
                height: auto;
                aspect-ratio: 547/400;
            }
        }

        .card__title {
            line-height: 1.3;

            @include mobile {
                width: 160px;
                font-size: 18px;
                min-height: 2.875rem;
                margin-top: 0.75rem;
            }

            @include desktop {
                font-size: clamp(1.5rem, 4vw, 2.25rem);
                min-height: 2.875rem;
                margin-top: 0.75rem;
                margin-bottom: 3.125rem;
            }
        }

        .card__description {
            font-weight: 400;
            min-height: 5rem;

            @include mobile {
                width: 160px;
                font-size: 0.9rem;
                max-height: 3.6em;
                display: block;
                text-overflow: ellipsis;
                word-wrap: break-word;
                overflow: hidden;
            }

            @include desktop {
                font-size: 1.125rem;
                line-height: 1.5;
            }
        }

        .card__author-avatar {
            @include mobile {
                display: none;
            }
        }

        .card__author-name {
            @include mobile {
                font-size: 14px;
            }
        }

        .card__genre-badge {
            @include mobile {
                background-color: var(--color-primary-light);
                border-radius: 8px;
                padding: 4px 8px;
                display: inline-block;
            }
        }

        .card__genre {
            @include mobile {
                font-weight: 400;
                font-size: 12px;
                line-height: 23px;
                color: var(--color-primary);
            }
        }

        @include mobile {
            width: 100%;
        }
    }

    &__icon-wrapper {
        z-index: 2;

        @include desktop {
            gap: 30px;
            position: absolute;
            margin-bottom: 40px;
            margin-right: 39px;
            display: flex;

        }

        @include mobile {
            gap: 15px;
            position: absolute;
            margin-bottom: 15px;
            margin-right: 15px;
            display: flex;
        }

    }


    &__icon {
        &__background {
            background-color: var(--color-primary);
            color: var(--color-white);
            border-radius: 50%;
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;

            @include desktop {
                width: 65px;
                height: 65px;
            }

            @include mobile {
                width: 40px;
                height: 40px;
            }

            &:hover {
                background-color: var(--color-primary-dark);
            }
        }

        &__text {

            @include desktop {
                font-size: 42px;
            }

            @include mobile {
                font-size: 22px;
            }
        }
    }

    &__image-wrapper {
        overflow: hidden;
        display: flex;
        justify-content: end;
        align-items: end;
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
        color: var(--color-text-secondary);
        margin-top: 20px;
        margin-bottom: 20px;
    }

    &__description {
        max-height: 80px;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        color: var(--color-text-secondary);
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
        color: var(--color-text);

        @include mobile {
            font-size: 18px;
            line-height: 20px;
        }

        @include desktop {
            font-size: 20px;
            line-height: 26px;
        }
    }

    &__story-info {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    &__created-at {
        font-weight: 400;
        color: var(--color-text);

        @include mobile {
            font-size: 14px;
            line-height: 20px;
            display: none;
        }

        @include desktop {
            font-size: 18px;
            line-height: 23px;
        }
    }

    &__genre-badge {
        background-color: var(--color-primary-light);
        border-radius: 8px;
        padding: 8px 12px;
        display: inline-block;
    }

    &__genre {
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: var(--color-primary);
    }
}
</style>