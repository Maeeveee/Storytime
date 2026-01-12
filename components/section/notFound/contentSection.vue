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
@media screen and (max-width: 768px) {
    .content-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &__title {
            font-family: "Playfair Display", serif;
            font-weight: 700;
            font-size: 160px;
            line-height: 194px;
            color: #222222;
        }

        &__subtitle {
            font-family: "Playfair Display", serif;
            font-weight: 600;
            font-size: 44px;
            line-height: 58px;
            margin-bottom: 20px;
            color: #222222;
        }

        &__description {
            max-width: 835px;
            font-weight: 400;
            font-size: 18px;
            line-height: 32px;
            color: #4b4b4b;
            text-align: center;
        }

        &__button {
            margin-top: 40px;
        }

    }
}

@media screen and (min-width: 768px) {
    .content-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 180px;

        &__title {
            font-family: "Playfair Display", serif;
            font-weight: 700;
            font-size: 160px;
            line-height: 194px;
            color: #222222;
        }

        &__subtitle {
            font-family: "Playfair Display", serif;
            font-weight: 600;
            font-size: 44px;
            line-height: 58px;
            margin-bottom: 20px;
            color: #222222;
        }

        &__description {
            max-width: 835px;
            font-weight: 400;
            font-size: 24px;
            line-height: 32px;
            color: #4b4b4b;
            text-align: center;
        }

        &__button {
            margin-top: 40px;
        }

    }
}
</style>