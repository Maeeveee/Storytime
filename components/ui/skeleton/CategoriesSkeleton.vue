<template>
    <div class="categories skeleton-pulse">
    </div>
</template>

<style scoped lang="scss">
.categories {
    color: var(--color-primary);
    background-color: var(--color-primary-light);
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-weight: 500;
    border-radius: fluid(12, 12);
    font-size: fluid(28, 28);
    padding: fluid(40, 60);
    margin: auto;
    border: none;

    @include tablet {
        font-size: fluid(20, 24);
        padding: fluid(30, 40);
    }
}

.skeleton-pulse {
    background: linear-gradient(90deg,
            var(--color-primary-light) 25%,
            var(--color-border) 50%,
            var(--color-primary-light) 75%);
    background-size: 200% 100%;
    animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
    0% {
        background-position: 200% 0;
    }

    100% {
        background-position: -200% 0;
    }
}
</style>