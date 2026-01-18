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
        font-size: fluid(18, 24);
    }

    &__text {
        color: var(--color-text-secondary);
        text-decoration: none;
        font-weight: 400;
        display: flex;
        align-items: center;
        font-size: fluid(18, 24);
        line-height: fluid(32, 32);

        &:hover {
            color: var(--color-primary);
            text-decoration: none;
            cursor: pointer;

            &:hover {
                text-decoration: underline;
                text-decoration-thickness: fluid(3, 3);
                text-underline-offset: fluid(10, 10);
            }
        }
    }
}
</style>