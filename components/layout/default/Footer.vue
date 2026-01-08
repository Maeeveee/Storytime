<script setup lang="ts">
const currentyear = new Date().getFullYear();

const copyright: string = `© ${currentyear} Timedoor Indonesia. All rights reserved.`;

</script>
<template>
    <div class="footer">
        <div class="footer__content">
            <h5 class="footer__text"> {{ copyright }}</h5>
            <div class="footer__icons">
                <Icon name="entypo-social:facebook" />
                <Icon name="entypo-social:instagram" />
                <Icon name="entypo-social:youtube" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.footer {
    &__content {
        margin-top: 200px;
        padding: 0 110px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: #4B4B4B 1px solid;

    }

    &__text {
        margin-top: 30px;
        margin-bottom: 40px;
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        color: #4B4B4B;
    }

    &__icons {
        font-size: 40px;
        display: flex;
        gap: 20px;
    }
}
</style>