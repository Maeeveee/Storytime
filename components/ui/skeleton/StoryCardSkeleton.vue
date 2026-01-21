<template>
    <article class="card" :class="`card--${variant}`">
        <div class="card__image-wrapper">
            <div class="card__image skeleton-pulse"></div>
        </div>
        <div class="card__content">
            <div class="card__header">
                <div class="card__title skeleton-pulse skeleton-text"></div>
            </div>
            <div>
                <div class="card__description">
                    <div class="skeleton-line skeleton-pulse"></div>
                    <div class="skeleton-line skeleton-line--short skeleton-pulse"></div>
                </div>
                <div class="card__footer">
                    <div class="card__author-info">
                        <div class="card__author-avatar skeleton-pulse"></div>
                        <div class="card__author-name skeleton-pulse skeleton-text-sm"></div>
                    </div>
                    <div class="card__story-info">
                        <div class="card__genre-badge skeleton-pulse skeleton-badge"></div>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
interface Props {
    variant?: 'default' | 'large' | 'small'
}

withDefaults(defineProps<Props>(), {
    variant: 'default'
})
</script>

<style scoped lang="scss">
.skeleton-pulse {
    background: linear-gradient(90deg, 
        var(--color-border-light) 25%, 
        var(--color-border) 50%, 
        var(--color-border-light) 75%
    );
    background-size: 200% 100%;
    animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}

.skeleton-text {
    height: fluid(32, 46);
    border-radius: fluid(4, 4);
}

.skeleton-text-sm {
    width: fluid(80, 120);
    height: fluid(16, 20);
    border-radius: fluid(4, 4);
}

.skeleton-line {
    height: fluid(14, 18);
    border-radius: fluid(4, 4);
    margin-bottom: fluid(8, 10);
    
    &--short {
        width: 60%;
    }
}

.skeleton-badge {
    width: fluid(60, 100);
    height: fluid(24, 32);
    border-radius: fluid(8, 8);
}

.card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: fluid(24, 40);

    &--default {
        width: fluid(335, 547);
        max-width: 100%;

        @include tablet {
            width: 100%;
        }

        @include mobile {
            width: 100%;
        }

        .card__image {
            width: 100%;
            aspect-ratio: 547/500;

            @include mobile {
                aspect-ratio: 500/420;
            }

            @include tablet {
                aspect-ratio: 4/3;
            }
        }

        .card__title {
            height: fluid(32, 46);
            margin-bottom: fluid(12, 20);
        }
    }

    &--large {
        width: fluid(335, 1123);
        max-width: 100%;

        @include tablet {
            width: 100%;
        }

        @include mobile {
            width: 100%;
        }

        .card__image {
            width: 100%;
            aspect-ratio: 1123/1066;

            @include tablet {
                aspect-ratio: 4/3;
            }

            @include mobile {
                aspect-ratio: 4/3;
            }
        }

        .card__title {
            height: fluid(46, 92);
        }
    }

    &--small {
        width: fluid(160, 547);
        max-width: 100%;

        @include tablet {
            width: 100%;
        }

        @include mobile {
            width: 100%;
        }

        .card__image {
            @include mobile {
                width: 100%;
                aspect-ratio: 1/1;
            }

            @include tablet {
                width: 100%;
                aspect-ratio: 4/3;
            }

            @include desktop {
                width: 100%;
                aspect-ratio: 547/400;
            }
        }

        .card__title {
            height: fluid(24, 36);
            margin-top: fluid(12, 12);
            margin-bottom: fluid(20, 50);
        }

        .card__description {
            min-height: fluid(60, 80);
        }

        .card__author-avatar {
            @include mobile {
                display: none;
            }
        }
    }

    &__image-wrapper {
        overflow: hidden;
        border-radius: fluid(8, 8);
    }

    &__image {
        width: 100%;
        height: 100%;
        border-radius: fluid(8, 8);
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
        margin-top: fluid(12, 20);
        margin-bottom: fluid(12, 20);
    }

    &__description {
        max-height: fluid(60, 80);
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
        gap: fluid(10, 10);
    }

    &__author-avatar {
        border-radius: 50%;
        height: fluid(36, 50);
        width: fluid(36, 50);
    }

    &__story-info {
        display: flex;
        gap: fluid(12, 16);
    }

    &__genre-badge {
        border-radius: fluid(8, 8);
    }
}
</style>
