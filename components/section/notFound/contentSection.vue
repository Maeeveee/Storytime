<script setup lang="ts">
import Button from '~/components/ui/Button.vue';

interface ErrorContent {
    title: string;
    subtitle: string;
    description: string;
}


const errorContent: Record<number, ErrorContent> = {
    404: {
        title: '404',
        subtitle: "Page not found",
        description: "Oops! It looks like this page doesn't exist. Please check the URL or return to the homepage.",
    },
    500: {
        title: '500',
        subtitle: 'Internal server error',
        description: "Sorry! Something went wrong on our end. Please try again later or contact support if the issue persists."
    }
}

const props = defineProps<{ statusCode: number }>()

const errorData = computed(() => {
    return errorContent[
        props.statusCode
    ] ?? {
        title: `${props.statusCode}`,
        subtitle: "Error",
        description: "Something went wrong"
    }
})

</script>
<template>
    <section class="content-section">
        <h1 class="content-section__title">{{ errorData.title }}</h1>
        <h5 class="content-section__subtitle">{{ errorData.subtitle }}</h5>
        <p class="content-section__description">{{ errorData.description }}</p>
        <Button to="/" variant="primary" class="content-section__button">Back to Home</Button>
    </section>
</template>
<style scoped lang="scss">
.content-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @include desktop {
        margin-bottom: 180px;
    }

    &__title {
        font-family: var(--font-display);
        font-weight: 700;
        font-size: 160px;
        line-height: 194px;
        color: var(--color-text);
    }

    &__subtitle {
        font-family: var(--font-display);
        font-weight: 600;
        font-size: 44px;
        line-height: 58px;
        margin-bottom: 20px;
        color: var(--color-text);
    }

    &__description {
        max-width: 835px;
        font-weight: 400;
        line-height: 32px;
        color: var(--color-text-secondary);
        text-align: center;

        @include mobile {
            font-size: 18px;
        }

        @include desktop {
            font-size: 24px;
        }
    }

    &__button {
        margin-top: 40px;
    }
}
</style>