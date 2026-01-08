<script setup lang="ts">

interface IProps{
    variant?: 'large' | 'small';
}

const props =withDefaults(defineProps<IProps>(),{
    variant: 'large'
});

</script>

<template>
    <div class="bookmark" :class="`bookmark--${variant}`">
        <Icon name="formkit:bookmark" class="bookmark__icon"/>
    </div>
</template>

<style scoped lang="scss">
    .bookmark{
        background-color: var(--color-primary);
        border-radius: 50%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;

        &--large{
            height: 100px;
            width: 100px;
            margin: 20px;
            font-size: 60px;
        }

        &--small{
            height: 65px;
            width: 65px;
            margin: 6.5px;
            font-size: 52px;

        }

        &__icon{
            color: var(--color-primary-light);

        }
}
</style>