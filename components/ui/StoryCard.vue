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
    <article class="card" :class="`card--${variant}`">
        <div class="card__image-wrapper">
            <div v-if="isEdit" class="card__icon-wrapper">
                <NuxtLink to="/dashboard/edit" class="card__icon__background">
                    <Icon class="card__icon__text" name="lucide:edit" />
                </NuxtLink>
                <button class="card__icon__background" @click="handleDelete">
                    <Icon class="card__icon__text" name="lucide:trash-2" />
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
        <NuxtLink :to="`/story/${props.articleItem.title}`" class="card__link"></NuxtLink>
    </article>
</template>

<style scoped lang="scss">
.card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    margin-bottom: vw(40);
    position: relative;

    @include mobile {
        margin-bottom: vw-mobile(24);
    }

    &__link {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

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
        width: vw(547);
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
            font-size: fluid-type(24, 36);
            line-height: 1.3;
            margin-bottom: vw(20);

            @include mobile {
                margin-bottom: vw-mobile(12);
            }
        }

        .card__description {
            min-height: vw(54);

            @include mobile {
                text-align: justify;
                min-height: vw-mobile(40);
            }
        }

        @include mobile {
            width: 100%;
        }
    }

    &--large {
        width: vw(1123);
        max-width: 100%;
        height: auto;

        .card__image {
            width: 100%;
            height: auto;
            aspect-ratio: 1123/1066;
        }

        .card__title {
            min-height: vw(92);

            @include mobile {
                min-height: auto;
            }
        }

        .card__description {
            min-height: vw(54);

            @include mobile {
                text-align: justify;
                min-height: vw-mobile(40);
            }
        }

        @include mobile {
            width: 100%;
        }
    }

    &--small {
        width: vw(547);
        max-width: 100%;
        height: auto;

        .card__image {
            @include mobile {
                width: vw-mobile(160);
                height: vw-mobile(160);
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
                width: vw-mobile(160);
                font-size: vw-mobile(18);
                min-height: vw-mobile(46);
                margin-top: vw-mobile(12);
            }

            @include desktop {
                font-size: fluid-type(24, 36);
                min-height: vw(46);
                margin-top: vw(12);
                margin-bottom: vw(50);
            }
        }

        .card__description {
            font-weight: 400;
            min-height: vw(80);

            @include mobile {
                width: vw-mobile(160);
                font-size: vw-mobile(14);
                max-height: 3.6em;
                min-height: vw-mobile(60);
                display: block;
                text-overflow: ellipsis;
                word-wrap: break-word;
                overflow: hidden;
            }

            @include desktop {
                font-size: vw(18);
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
                font-size: vw-mobile(14);
            }
        }

        .card__genre-badge {
            @include mobile {
                background-color: var(--color-primary-light);
                border-radius: vw-mobile(8);
                padding: vw-mobile(4) vw-mobile(8);
                display: inline-block;
            }
        }

        .card__genre {
            @include mobile {
                font-weight: 400;
                font-size: vw-mobile(12);
                line-height: vw-mobile(23);
                color: var(--color-primary);
            }
        }

        @include mobile {
            width: 100%;
        }
    }

    &__icon-wrapper {
        z-index: 2;
        position: absolute;
        display: flex;

        @include desktop {
            gap: vw(30);
            margin-bottom: vw(40);
            margin-right: vw(39);

        }

        @include mobile {
            gap: vw-mobile(15);
            margin-bottom: vw-mobile(15);
            margin-right: vw-mobile(15);
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
                width: vw(65);
                height: vw(65);
            }

            @include mobile {
                width: vw-mobile(40);
                height: vw-mobile(40);
            }

            &:hover {
                background-color: var(--color-primary-dark);
            }
        }

        &__text {

            @include desktop {
                font-size: vw(42);
            }

            @include mobile {
                font-size: vw-mobile(22);
            }
        }
    }

    &__image-wrapper {
        overflow: hidden;
        display: flex;
        justify-content: end;
        align-items: end;
        border-radius: vw(8);
        flex-shrink: 0;

        @include mobile {
            border-radius: vw-mobile(8);
        }
    }

    &__image {
        width: 100%;
        height: 100%;
        border-radius: vw(8);
        object-fit: cover;
        transition: opacity 0.3s, transform 0.3s;

        @include mobile {
            border-radius: vw-mobile(8);
        }
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
        font-size: vw(36);
        line-height: vw(46);
        color: var(--color-text-secondary);
        margin-top: vw(20);
        margin-bottom: vw(20);

        @include mobile {
            font-size: vw-mobile(24);
            line-height: vw-mobile(32);
            margin-top: vw-mobile(12);
            margin-bottom: vw-mobile(12);
        }
    }

    &__description {
        max-height: vw(80);
        font-weight: 400;
        font-size: vw(18);
        line-height: vw(27);
        color: var(--color-text-secondary);

        @include mobile {
            max-height: vw-mobile(60);
            font-size: vw-mobile(14);
            line-height: vw-mobile(21);
        }
    }

    &__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: vw(20);

        @include mobile {
            margin-top: vw-mobile(12);
        }
    }

    &__author-info {
        display: flex;
        align-items: center;
        gap: vw(12);

        @include mobile {
            gap: vw-mobile(8);
        }
    }

    &__author-avatar {
        width: vw(50);
        height: vw(50);
        border-radius: 50%;
        object-fit: cover;

        @include mobile {
            width: vw-mobile(36);
            height: vw-mobile(36);
        }
    }

    &__author-name {
        font-weight: 500;
        color: var(--color-text);

        @include mobile {
            font-size: vw-mobile(18);
            line-height: vw-mobile(20);
        }

        @include desktop {
            font-size: vw(20);
            line-height: vw(26);
        }
    }

    &__story-info {
        display: flex;
        align-items: center;
        gap: vw(20);

        @include mobile {
            gap: vw-mobile(12);
        }
    }

    &__created-at {
        font-weight: 400;
        color: var(--color-text);

        @include mobile {
            font-size: vw-mobile(14);
            line-height: vw-mobile(20);
            display: none;
        }

        @include desktop {
            font-size: vw(18);
            line-height: vw(23);
        }
    }

    &__genre-badge {
        background-color: var(--color-primary-light);
        border-radius: vw(8);
        padding: vw(8) vw(12);
        display: inline-block;

        @include mobile {
            border-radius: vw-mobile(8);
            padding: vw-mobile(4) vw-mobile(8);
        }
    }

    &__genre {
        font-weight: 400;
        font-size: vw(18);
        line-height: vw(23);
        color: var(--color-primary);

        @include mobile {
            font-size: vw-mobile(14);
            line-height: vw-mobile(18);
        }
    }
}
</style>