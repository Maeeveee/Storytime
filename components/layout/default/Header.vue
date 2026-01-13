<script setup lang="ts">
import Logo from '~/components/ui/Logo.vue';
import Button from '~/components/ui/Button.vue';
import AccountModal from '~/components/ui/modal/AccountModal.vue';

function dropdownToggle() {
    document.getElementById("dropdown")?.classList.toggle("dropdown__show")
}
function dropdownToggleMobile() {
    document.getElementById("dropdown_mobile")?.classList.toggle("dropdown__show")
}

</script>
<template>
    <div class="nav">
        <Logo class="nav__logo" />

        <div class="dropdown">
            <button class="dropdown__button" v-on:click="dropdownToggleMobile()">
                <Icon name="formkit:open" class="nav__hamburger" />
            </button>
            <AccountModal id="dropdown_mobile" class="dropdown__content" />
        </div>
        <div class="nav__button-container">
            <div class="not-login">
                <!-- <Button to="/register" variant="secondary">Register</Button>
                <Button to="/login" variant="primary">Login</Button> -->
            </div>

            <div class="nav__login">
                <img class="nav__login__image" src="/img/user.webp" alt="test">
                <div class="dropdown">
                    <button class="dropdown__button" v-on:click="dropdownToggle()">
                        <h4 class="nav__login__name">Rizal</h4>
                        <Icon class="nav__login__icon" name="mdi:chevron-down" />
                    </button>
                    <AccountModal id="dropdown" class="dropdown__content" />
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
@media screen and (max-width:768px) {
    .dropdown {
        &__button {
            border: none;
            background-color: white;
            display: flex;
        }

        &__content {
            display: none;
        }


        &__show {
            display: block;

        }
    }

    .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background-color: white;
        border-bottom: #f3f3f3 3px solid;
        padding: 20px;

        &__button-container {
            display: none;
        }

        &__logo {
            width: 150px;
            height: 30px;
        }

        &__hamburger {
            display: block;
            font-size: 30px;
        }
    }
}

@media screen and (min-width: 768px) {
    .dropdown {
        &__button {
            border: none;
            background-color: white;
            display: flex;
        }

        &__content {
            display: none;
        }


        &__show {
            display: block;

        }
    }

    .nav {
        display: flex;
        justify-content: space-between;
        padding: 23px 110px 23px 110px;
        max-width: 1700px;
        height: 60px;
        margin: auto;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background-color: white;
        border-bottom: #f3f3f3 3px solid;

        &__button-container {
            display: flex;
            gap: 30px;
        }

        &__logo {
            width: 254px;
            height: 59px;
        }

        &__hamburger {
            display: none;
        }

        &__login {
            display: flex;
            justify-content: center;
            align-items: center;

            &__image {
                width: 65px;
                margin-right: 10px;
            }

            &__name {
                font-weight: 700;
                font-size: 24px;
                line-height: 32px;
            }

            &__icon {
                font-size: 30px;
            }
        }

    }

}
</style>