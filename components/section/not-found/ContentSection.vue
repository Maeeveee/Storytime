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
    margin-bottom: fluid(80, 180);

    @include tablet {
        margin-bottom: fluid(60, 100);
    }

    &__title {
        font-family: var(--font-display);
        font-weight: 700;
        color: var(--color-text);
        font-size: fluid(160, 160);
        line-height: fluid(194, 194);

        @include tablet {
            font-size: fluid(100, 140);
            line-height: fluid(120, 160);
        }
    }

    &__subtitle {
        font-family: var(--font-display);
        font-weight: 600;
        color: var(--color-text);
        font-size: fluid(44, 44);
        line-height: fluid(58, 58);
        margin-bottom: fluid(20, 20);

        @include tablet {
            font-size: fluid(32, 40);
            line-height: fluid(40, 50);
        }
    }

    &__description {
        font-weight: 400;
        color: var(--color-text-secondary);
        text-align: center;
        max-width: fluid(835, 835);
        line-height: fluid(32, 32);
        font-size: fluid(18, 24);

        @include tablet {
            max-width: 90%;
            font-size: fluid(16, 20);
        }
    }

    &__button {
        margin-top: fluid(40, 40);
    }
}
</style>