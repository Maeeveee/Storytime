<template>
    <main>
        <UiBreadcrumb class="story-detail__breadcrumb" />
        <div class="story-detail__container">
            <div class="story-detail__header">
                <div class="story-detail__header__sub">
                    <div class="story-detail__date skeleton-pulse skeleton-date"></div>
                    <div class="story-detail__genre-badge skeleton-pulse skeleton-badge"></div>
                </div>
                <div class="story-detail__title skeleton-pulse skeleton-title"></div>
                <div class="story-detail__author-info">
                    <div class="story-detail__author-avatar skeleton-pulse"></div>
                    <div class="story-detail__author-name skeleton-pulse skeleton-name"></div>
                </div>
            </div>
            
            <div class="story-detail__cover skeleton-pulse"></div>
            
            <div class="story-detail__content">
                <div class="skeleton-paragraph">
                    <div class="skeleton-line skeleton-pulse"></div>
                    <div class="skeleton-line skeleton-pulse"></div>
                    <div class="skeleton-line skeleton-line--short skeleton-pulse"></div>
                </div>
                <div class="skeleton-paragraph">
                    <div class="skeleton-line skeleton-pulse"></div>
                    <div class="skeleton-line skeleton-pulse"></div>
                    <div class="skeleton-line skeleton-pulse"></div>
                    <div class="skeleton-line skeleton-line--medium skeleton-pulse"></div>
                </div>
                <div class="skeleton-paragraph">
                    <div class="skeleton-line skeleton-pulse"></div>
                    <div class="skeleton-line skeleton-line--short skeleton-pulse"></div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
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

.skeleton-date {
    width: fluid(100, 150);
    height: fluid(20, 26);
    border-radius: fluid(4, 4);
}

.skeleton-badge {
    width: fluid(60, 100);
    height: fluid(28, 36);
    border-radius: fluid(8, 8);
}

.skeleton-title {
    width: 70%;
    height: fluid(30, 60);
    border-radius: fluid(4, 4);

    @include mobile {
        width: 100%;
    }
}

.skeleton-name {
    width: fluid(100, 150);
    height: fluid(20, 26);
    border-radius: fluid(4, 4);
}

.skeleton-paragraph {
    margin-bottom: fluid(24, 32);
}

.skeleton-line {
    width: 100%;
    height: fluid(16, 22);
    border-radius: fluid(4, 4);
    margin-bottom: fluid(10, 14);

    &--short {
        width: 45%;
    }

    &--medium {
        width: 75%;
    }
}

.story-detail {
    &__container {
        margin: auto;
        max-width: fluid(375, 1700);
        padding-inline: fluid(16, 40);
    }

    &__breadcrumb {
        margin-top: fluid(20, 100);

        @include tablet {
            margin-top: fluid(40, 80);
        }
    }

    &__header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: fluid(30, 30);
        gap: fluid(20, 50);
        margin-bottom: fluid(30, 30);

        @include tablet {
            gap: fluid(15, 30);
        }

        &__sub {
            display: flex;
            align-items: center;
            gap: fluid(20, 20);
        }
    }

    &__title {
        text-align: center;
    }

    &__author-info {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: fluid(10, 10);
    }

    &__author-avatar {
        border-radius: 50%;
        height: fluid(30, 50);
        width: fluid(30, 50);

        @include tablet {
            height: 40px;
            width: 40px;
        }
    }

    &__cover {
        width: 100%;
        aspect-ratio: 16/9;
        border-radius: fluid(12, 16);
        margin-bottom: fluid(30, 50);

        @include mobile {
            aspect-ratio: 4/3;
        }
    }

    &__content {
        max-width: fluid(335, 900);
        margin: 0 auto;
    }

    &__genre-badge {
        display: inline-block;
    }
}
</style>
