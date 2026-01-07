<template>
    <div>
        <NuxtLink href="" class="explore-more__text">Explore More
            <Icon class="explore-more__icon" name="formkit:arrowright" />
        <div class="explore-more__underline"></div>
        </NuxtLink>
    </div>
</template>

<style scoped lang="scss">
.explore-more {
    &__icon {
        font-size: xx-large;
    }

    &__text {
        color: #4B4B4B;
        text-decoration: none;
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;
        display: flex;
        align-items: center;

        &:hover {
            color: #466543;
            text-decoration: none;
            cursor: pointer;
        }
    }

    &__underline {
        width: 0;
        height: 2px;
        background-color: #466543;
        transition: width 0.3s ease;

        &:hover {
            border-bottom: 2px solid #466543;
            width: 100%;
            margin-top: 4px;
        }
    }
}
</style>