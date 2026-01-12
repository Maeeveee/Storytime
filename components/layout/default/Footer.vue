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
@media screen and (max-width: 768px) {
    .footer {
        &__content {
            margin-top: 200px;
            padding:10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-top: #4b4b4b 1px solid;
        }

        &__text {
            margin-top: 30px;
            margin-bottom: 40px;
            font-weight: 500;
            font-size: 15px;
            line-height: 20px;
            color: #4b4b4b;
        }

        &__icons {
            font-size: 30px;
            display: flex;
            gap: 20px;

            &__icon {
                &:hover {
                    color: var(--color-primary);
                }
            }
        }
    }
}

@media screen and (min-width: 768px) {
    .footer {
        &__content {
            margin-top: 200px;
            padding: 0 110px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-top: #4b4b4b 1px solid;
        }

        &__text {
            margin-top: 30px;
            margin-bottom: 40px;
            font-weight: 500;
            font-size: 20px;
            line-height: 26px;
            color: #4b4b4b;
        }

        &__icons {
            font-size: 40px;
            display: flex;
            gap: 20px;

            &__icon {
                &:hover {
                    color: var(--color-primary);
                }
            }
        }
    }
}
</style>
