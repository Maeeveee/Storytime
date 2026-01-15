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
        margin-bottom: vw(180);
    }

    &__title {
        font-family: var(--font-display);
        font-weight: 700;
        color: var(--color-text);

        @include desktop {
            font-size: vw(160);
            line-height: vw(194);
        }

        @include mobile {
            font-size: vw-mobile(160);
            line-height: vw-mobile(194);
        }
    }

    &__subtitle {
        font-family: var(--font-display);
        font-weight: 600;
        color: var(--color-text);

        @include desktop {
            font-size: vw(44);
            line-height: vw(58);
            margin-bottom: vw(20);
        }

        @include mobile {
            font-size: vw-mobile(44);
            line-height: vw-mobile(58);
            margin-bottom: vw-mobile(20);
        }
    }

    &__description {
        font-weight: 400;
        color: var(--color-text-secondary);
        text-align: center;

        @include desktop {
            max-width: vw(835);
            line-height: vw(32);
            font-size: vw(24);
        }

        @include mobile {
            max-width: vw-mobile(835);
            line-height: vw-mobile(32);
            font-size: vw-mobile(18);
        }
    }

    &__button {
        @include desktop {
            margin-top: vw(40);
        }

        @include mobile {
            margin-top: vw-mobile(40);
        }
    }
}

</style>