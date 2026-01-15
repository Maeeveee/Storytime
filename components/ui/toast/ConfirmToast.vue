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
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;

    @include desktop {
        width: vw(600);
        height: vw(70);
    }

    @include mobile {
        width: vw-mobile(600);
        height: vw-mobile(70);
    }

    &__content {
        display: flex;
        align-items: center;

        @include desktop {
            gap: vw(16);
        }

        @include mobile {
            gap: vw-mobile(16);
        }

        &__icon {

            @include desktop {
                width: vw(30);
                height: vw(30);
            }

            @include mobile {
                width: vw-mobile(30);
                height: vw-mobile(30);
            }

            &--primary {
                color: var(--color-primary);
            }

            &--secondary {
                color: var(--color-text-secondary);

                @include desktop {
                    margin-left: vw(104.5);
                }

                @include mobile {
                    margin-left: vw-mobile(104.5);
                }
            }
        }

        &__text {
            font-weight: 700;

            @include desktop {
                font-size: vw(20);
                line-height: vw(26);
            }

            @include mobile {
                font-size: vw-mobile(20);
                line-height: vw-mobile(26);
            }
        }
    }
}
</style>
