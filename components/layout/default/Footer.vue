<script setup lang="ts">
const currentyear = new Date().getFullYear();
const copyright: string = `© ${currentyear} Timedoor Indonesia. All rights reserved.`;
</script>
<template>
    <div class="footer">
        <div class="footer__content">
            <h5 class="footer__text">{{ copyright }}</h5>
            <div class="footer__icons">
                <Icon name="entypo-social:facebook" class="footer__icons__icon" />
                <Icon name="entypo-social:instagram" class="footer__icons__icon" />
                <Icon name="entypo-social:youtube" class="footer__icons__icon" />
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

        @include desktop {
            margin-top: vw(200);
            padding: vw(25) vw(110) vw(35);
        }

        @include mobile {
            flex-direction: column;
            margin-top: vw-mobile(59);
            padding: vw-mobile(10);
        }
    }

    &__text {
        font-weight: 500;
        color: var(--color-text-secondary);

        @include desktop {
            font-size: vw(20);
            line-height: vw(26);
        }

        @include mobile {
            margin-top: vw-mobile(30);
            margin-bottom: vw-mobile(20);
            font-size: vw-mobile(15);
            line-height: vw-mobile(26);
        }
    }

    &__icons {
        display: flex;

        @include desktop {
            font-size: vw(40);
            gap: vw(20);
        }

        @include mobile {
            font-size: vw-mobile(30);
            gap: vw-mobile(20);
        }

        &__icon {
            &:hover {
                color: var(--color-primary);
            }
        }

    }
}
</style>
