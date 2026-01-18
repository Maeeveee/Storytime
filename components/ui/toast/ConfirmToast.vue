<script setup lang="ts">
defineProps<{ text: string }>();
</script>
<template>
    <div class="toast">
        <div class="toast__content">
            <Icon class="toast__content__icon--primary" name="lucide:circle-check-big" />
            <h5 class="toast__content__text">{{ text }}</h5>
        </div>
        <Icon class="toast__content__icon--secondary" name="formkit:close" />
    </div>
</template>
<style scoped lang="scss">
.toast {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: fluid(8, 8);
    width: fluid(600, 600);
    height: fluid(70, 70);

    @include tablet {
        width: 100%;
        max-width: 450px;
        height: auto;
        padding: fluid(15, 20);
    }

    &__content {
        display: flex;
        align-items: center;
        gap: fluid(16, 16);

        &__icon {
            width: fluid(30, 30);
            height: fluid(30, 30);

            &--primary {
                color: var(--color-primary);
            }

            &--secondary {
                color: var(--color-text-secondary);
                margin-left: fluid(104.5, 104.5);

                @include tablet {
                    margin-left: fluid(20, 40);
                }
            }
        }

        &__text {
            font-weight: 700;
            font-size: fluid(20, 20);
            line-height: fluid(26, 26);

            @include tablet {
                font-size: fluid(16, 18);
            }
        }
    }
}
</style>
