<template>
    <div>
        <NuxtLink to="/story/" class="explore-more__text">Explore More
            <Icon class="explore-more__icon" name="formkit:arrowright" />
            <div class="explore-more__underline"></div>
        </NuxtLink>
    </div>
</template>

<style scoped lang="scss">
.explore-more {
    &__icon {
        @include mobile {
            font-size: 18px;
        }

        @include desktop {
            font-size: 24px;
        }
    }

    &__text {
        color: var(--color-text-secondary);
        text-decoration: none;
        font-weight: 400;
        line-height: 32px;
        display: flex;
        align-items: center;

        @include mobile {
            font-size: 18px;
        }

        @include desktop {
            font-size: 24px;
        }

        &:hover {
            color: var(--color-primary);
            text-decoration: none;
            cursor: pointer;
        }
    }

    &__underline {
        width: 0;
        height: 2px;
        background-color: var(--color-primary);
        transition: width 0.3s ease;

        &:hover {
            border-bottom: 2px solid var(--color-primary);
            width: 100%;
            margin-top: 4px;
        }
    }
}
</style>