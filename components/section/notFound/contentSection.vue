<script setup lang="ts">

</script>
<template>
    <section class="content-section">
        <h1 class="content-section__title">404</h1>
        <h5 class="content-section__subtitle">Page Not Found</h5>
        <p class="content-section__description">Oops! It looks like this page doesn't exist. Please check the URL or return to the homepage.</p>
        <UiAuthButton variant="primary" to="/" class="content-section__button">Back to Home</UiAuthButton>
    </section>
</template>
<style scoped lang="scss">
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
</style>