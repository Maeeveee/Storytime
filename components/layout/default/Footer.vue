<template>
    <div class="">
        <div class="footer__content">
            <h5 class="footer__text"> © 2024 Timedoor Indonesia. All rights reserved.</h5>
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
        margin-top: 80px;
        padding: 20px 100px 20px 100px;
        min-width: 1700px;
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