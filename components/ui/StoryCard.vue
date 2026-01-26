<script setup lang="ts">
import type { StoryListItem } from '~/types/api';
import ConfirmContent from "./modal/ConfirmContent.vue";

interface IProps {
    articleItem: StoryListItem;
    hideCategory?: boolean;
    variant?: 'default' | 'large' | 'small';
    isEdit?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
    hideCategory: false,
    variant: 'default',
    isEdit: false,
});

const emit = defineEmits<{
    deleted: []
}>()

const { $api } = useNuxtApp();
const modal = useModal();
const toast = useToast();
const isDeleting = ref(false)

async function deleteStory() {
    isDeleting.value = true
    try {
        await $api.story.deleteStory(props.articleItem.id)
        toast.success('Successfully deleted the story')
        emit('deleted')
    } catch (error) {
        console.error('Failed to delete story', error)
        toast.error('Failed to delete story')
    } finally {
        isDeleting.value = false
        modal.close()
    }
}

function handleDelete() {
    modal.open({
        component: ConfirmContent,
        props: {
            title: 'Delete Story',
            message: 'Are you sure you want to delete this story?',
            confirmText: 'Delete',
            cancelText: 'Cancel'
        },
        onConfirm: deleteStory,
    })
}

const editLink = computed(() => `/dashboard/edit/${props.articleItem.slug}`)
</script>

<template>
    <article class="card" :class="`card--${variant}`">
        <div class="card__image-wrapper">
            <div v-if="isEdit" class="card__icon-wrapper">
                <NuxtLink :to="editLink" title="Edit story" class="card__icon__background">
                    <Icon class="card__icon__text" name="lucide:edit" />
                </NuxtLink>
                <button class="card__icon__background" title="Delete story" @click.prevent="handleDelete"
                    :disabled="isDeleting">
                    <Icon class="card__icon__text" :name="isDeleting ? 'eos-icons:loading' : 'lucide:trash-2'" />
                </button>
            </div>
            <img :src="props.articleItem.cover_image" alt="Story Image" class="card__image">
        </div>
        <div class="card__content">
            <div class="card__header">
                <h2 class="card__title">{{ props.articleItem.title }}</h2>
            </div>
            <div>
                <div v-html="props.articleItem.content_preview" class="card__description"></div>
                <div class="card__footer">
                    <div class="card__author-info">
                        <img :src="props.articleItem.author.profile_image || 'https://ui-avatars.com/api/?name=' + props.articleItem.author.name"
                            alt="Author Avatar" class="card__author-avatar">
                        <span class="card__author-name">{{ props.articleItem.author.name }}</span>
                    </div>
                    <div class="card__story-info">
                        <span class="card__created-at">{{ $dayjs(props.articleItem.created_at).format('DD MMMM YYYY')
                        }}</span>
                        <div v-if="!hideCategory" class="card__genre-badge">
                            <span class="card__genre">{{ props.articleItem.category.name }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <NuxtLink :to="`/story/${props.articleItem.slug}`" class="card__link"></NuxtLink>
    </article>
</template>

<style scoped lang="scss">
.card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    margin-bottom: fluid(24, 40);
    position: relative;

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
        width: fluid(335, 547);
        max-width: 100%;
        height: auto;
        box-sizing: border-box;

        @include desktop {
            margin: vw(10);
        }

        @include tablet {
            width: 100%;
            max-width: 100%;
            margin: vw(10);
        }

        @include mobile {
            width: 100%;
            max-width: 100%;
            margin: vw-mobile(10);
        }

        .card__image {
            width: 100%;
            height: auto;
            max-width: 100%;

            @include mobile {
                aspect-ratio: 500/420;
            }

            @include tablet {
                aspect-ratio: 4/3;
            }

            @include desktop {
                aspect-ratio: 547/500;
            }
        }

        .card__title {
            font-size: fluid-type(24, 36);
            line-height: 1.3;
        }

        .card__description {
            min-height: fluid(40, 54);
            @include clamp-text-3;

            @include mobile {
                text-align: justify;
            }

            @include tablet {
                text-align: justify;
            }
        }
    }

    &--large {
        width: fluid(305, 1053);
        max-width: 100%;
        height: auto;
        box-sizing: border-box;

        @include tablet {
            width: 100%;
            max-width: 100%;
        }

        @include mobile {
            width: 100%;
            max-width: 100%;
        }

        .card__image {
            width: 100%;
            height: auto;
            max-width: 100%;
            aspect-ratio: 1123/1066;

            @include tablet {
                aspect-ratio: 4/3;
            }

            @include mobile {
                aspect-ratio: 4/3;
            }
        }

        .card__title {
            min-height: fluid(46, 92);

            @include mobile {
                min-height: auto;
            }

            @include tablet {
                min-height: auto;
            }
        }

        .card__description {
            min-height: fluid(40, 54);

            @include mobile {
                text-align: justify;
            }

            @include tablet {
                text-align: justify;
            }
        }
    }

    &--small {
        width: fluid(160, 547);
        max-width: 100%;
        height: auto;
        box-sizing: border-box;

        @include tablet {
            width: 100%;
            max-width: 100%;
        }

        @include mobile {
            width: 100%;
            max-width: 100%;
        }

        .card__image {
            @include mobile {
                width: 100%;
                height: auto;
                aspect-ratio: 1/1;
            }

            @include tablet {
                width: 100%;
                height: auto;
                aspect-ratio: 4/3;
            }

            @include desktop {
                width: 100%;
                height: auto;
                aspect-ratio: 547/400;
            }
        }

        .card__title {
            line-height: 1.3;
            font-size: fluid(18, 36);
            min-height: fluid(46, 46);
            margin-top: fluid(12, 12);

            @include mobile {
                width: 100%;
            }

            @include tablet {
                width: 100%;
            }
        }

        .card__description {
            font-weight: 400;
            min-height: fluid(60, 80);
            font-size: fluid(14, 18);
            line-height: 1.5;
            @include clamp-text-3;

            @include mobile {
                width: 100%;
                max-height: 3.6em;
                display: block;
                text-overflow: ellipsis;
                word-wrap: break-word;
                overflow: hidden;
            }

            @include tablet {
                width: 100%;
            }
        }

        .card__author-avatar {
            @include mobile {
                display: none;
            }

            @include tablet {
                display: block;
            }
        }

        .card__author-name {
            width: fluid(90, 200);

            @include clamp-text-1;

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
    }

    &__icon-wrapper {
        z-index: 2;
        position: absolute;
        display: flex;
        gap: fluid(15, 30);
        margin-bottom: fluid(15, 40);
        margin-right: fluid(15, 39);
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
            width: fluid(40, 65);
            height: fluid(40, 65);

            &:hover {
                background-color: var(--color-primary-dark);
                cursor: pointer;
            }
        }

        &__text {
            font-size: fluid(22, 42);
        }
    }

    &__image-wrapper {
        overflow: hidden;
        display: flex;
        justify-content: end;
        align-items: end;
        border-radius: fluid(8, 8);
        flex-shrink: 0;
    }

    &__image {
        width: 100%;
        height: 100%;
        border-radius: fluid(8, 8);
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
        font-size: fluid(24, 36);
        line-height: fluid(32, 46);
        color: var(--color-text-secondary);
        margin-top: fluid(12, 20);
        margin-bottom: fluid(12, 20);
    }

    &__description {
        max-height: fluid(60, 80);
        font-weight: 400;
        font-size: fluid(14, 18);
        line-height: fluid(21, 27);
        color: var(--color-text-secondary);
    }

    &__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: fluid(12, 20);
    }

    &__author-info {
        display: flex;
        align-items: center;
        gap: fluid(8, 12);
    }

    &__author-avatar {
        width: fluid(36, 50);
        height: fluid(36, 50);
        border-radius: 50%;
        object-fit: cover;
    }

    &__author-name {
        @include clamp-text-1;
        font-weight: 500;
        color: var(--color-text);
        font-size: fluid(18, 20);
        line-height: fluid(20, 26);
    }

    &__story-info {
        display: flex;
        align-items: center;
        gap: fluid(12, 20);
    }

    &__created-at {
        @include clamp-text-1;

        font-weight: 400;
        color: var(--color-text);
        font-size: fluid(14, 18);
        line-height: fluid(20, 23);

        @include mobile {
            display: none;
        }

        @include tablet {
            display: block;
        }
    }

    &__genre-badge {
        background-color: var(--color-primary-light);
        border-radius: fluid(8, 8);
        padding: fluid(4, 8) fluid(8, 12);
        display: inline-block;
    }

    &__genre {
        font-weight: 400;
        font-size: fluid(14, 18);
        line-height: fluid(18, 23);
        color: var(--color-primary);
    }
}
</style>