<template>
    <div>
        <NuxtLink to="/story/" class="explore-more__text">Explore More
            <Icon class="explore-more__icon" name="formkit:arrowright" />
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
            &:hover{
                text-decoration: underline;
                text-decoration-thickness: 3px;
                text-underline-offset: 10px;
            }
        }
    }
}
</style>