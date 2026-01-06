<template>
    <div>
        <a href="" class="explore-more__text">Explore More
            <Icon class="explore-more__icon" name="formkit:arrowright" />
        </a>
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
        font-size: x-large;

        &:hover {
            color: #466543;
            text-decoration: none;
            cursor: pointer;
        }
    }
}
</style>