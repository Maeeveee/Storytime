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
        @include desktop {
            font-size: vw(24);
        }

        @include mobile {
            font-size: vw-mobile(18);
        }
    }

    &__text {
        color: var(--color-text-secondary);
        text-decoration: none;
        font-weight: 400;
        display: flex;
        align-items: center;

        @include desktop {
            font-size: vw(24);
            line-height: vw(32);
        }

        @include mobile {
            font-size: vw-mobile(18);
            line-height: vw-mobile(32);
        }


        &:hover {
            color: var(--color-primary);
            text-decoration: none;
            cursor: pointer;

            &:hover {
                text-decoration: underline;
                text-decoration-thickness: 3px;
                text-underline-offset: 10px;
            }
        }
    }
}
</style>