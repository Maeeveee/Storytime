<script setup lang="ts">
const currentyear = new Date().getFullYear();
const copyright: string = `© ${currentyear} Timedoor Indonesia. All rights reserved.`;
</script>
<template>
    <div class="footer">
        <div class="footer__content">
            <h5 class="footer__text">{{ copyright }}</h5>
            <div class="footer__icons">
                <span title="facebook">
                    <Icon name="entypo-social:facebook" class="footer__icons__icon" />
                </span>
                <span title="instagram">
                    <Icon name="entypo-social:instagram" class="footer__icons__icon" />
                </span>
                <span title="youtube">
                    <Icon name="entypo-social:youtube" class="footer__icons__icon" />
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.footer {
    &__content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid var(--color-text-secondary);
        margin-top: fluid(59, 200);
        padding: fluid(10, 25) fluid(20, 40) fluid(10, 35);
        max-width: fluid(375, 1700);
        margin-left: auto;
        margin-right: auto;

        @include tablet {
            flex-direction: column;
            gap: fluid(15, 20);
        }

        @include mobile {
            flex-direction: column;
        }
    }

    &__tooltip-container {
        position: relative;
        display: inline-block;

        &__text {
            visibility: hidden;
            background-color: #333;
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 5px 10px;
            position: absolute;
            z-index: 1;
            bottom: 125%;
            left: 50%;
            transform: translateX(-50%);
            white-space: nowrap;
        }

        &:hover {
            visibility: visible;
        }
    }


    &__text {
        font-weight: 500;
        color: var(--color-text-secondary);
        font-size: fluid(14, 20);
        line-height: fluid(20, 26);

        @include tablet {
            order: 2;
            margin-top: fluid(10, 15);
        }

        @include mobile {
            margin-top: fluid(20, 30);
            margin-bottom: fluid(15, 20);
        }
    }

    &__icons {
        display: flex;
        font-size: fluid(30, 40);
        gap: fluid(20, 20);

        @include tablet {
            order: 1;
        }

        &__icon {
            &:hover {
                color: var(--color-primary);
            }
        }
    }
}
</style>
