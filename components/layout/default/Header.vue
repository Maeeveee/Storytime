<script setup lang="ts">
import Logo from '~/components/ui/Logo.vue';
import Button from '~/components/ui/Button.vue';

const isDropdownOpen = ref(false);
const isDropdownMobileOpen = ref(false)

const dropdownRef = ref<HTMLElement | null>(null);

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});

function handleClickOutside(e: MouseEvent) {
    if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
        isDropdownOpen.value = false;
        isDropdownMobileOpen.value = false;
    }
}
</script>
<template>
    <div class="nav" ref="dropdownRef">
        <Logo class="nav__logo" />

        <div class="dropdown dropdown--mobile">
            <button class="dropdown__button" @click="isDropdownMobileOpen = !isDropdownMobileOpen">
                <Icon name="formkit:open" class="nav__hamburger" />
            </button>
            <Transition name="dropdown">
                <div v-if="isDropdownMobileOpen" class="dropdown__content">
                    <NuxtLink to="/dashboard" class="dropdown__item">Profile</NuxtLink>
                    <NuxtLink to="/register" class="dropdown__item">Logout</NuxtLink>
                </div>
            </Transition>
        </div>

        <div class="nav__button-container">
            <div class="nav__login">
                <img class="nav__login__image" src="public/img/user.webp" alt="User avatar">
                <div class="dropdown">
                    <button class="dropdown__button" @click="isDropdownOpen = !isDropdownOpen">
                        <h4 class="nav__login__name">Rizal</h4>
                        <Icon class="nav__login__icon" name="mdi:chevron-down" />
                    </button>
                    <Transition name="dropdown">
                        <div v-if="isDropdownOpen" class="dropdown__content">
                            <NuxtLink to="/dashboard" class="dropdown__item">Profile</NuxtLink>
                            <NuxtLink to="/register" class="dropdown__item">Logout</NuxtLink>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.dropdown {
    position: relative;

    &__button {
        border: none;
        background-color: transparent;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    &__content {
        position: absolute;
        top: 100%;
        right: 0;
        margin-top: 8px;
        min-width: 150px;
        background-color: var(--color-white);
        border-radius: 8px;
        border: 1px solid var(--color-border);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        z-index: 100;
    }

    &__item {
        display: block;
        padding: 12px 20px;
        text-decoration: none;
        color: var(--color-text);
        font-weight: 500;
        transition: background-color 0.2s;

        &:hover {
            background-color: var(--color-border-light);
        }
    }
}

.dropdown-enter-active,
.dropdown-leave-active {
    transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

.nav {
    display: flex;
    justify-content: space-between;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: var(--color-white);
    border-bottom: var(--color-border-light) 3px solid;

    @include mobile {
        align-items: center;
        height: 40px;
        padding: 20px;
    }

    @include desktop {
        padding: 23px 110px;
        max-width: 1700px;
        height: 60px;
        position: fixed;
    }

    &__button-container {
        @include mobile {
            display: none;
        }

        @include desktop {
            display: flex;
            gap: 30px;
        }
    }

    &__logo {
        @include mobile {
            width: 150px;
            height: 30px;
        }

        @include desktop {
            width: 254px;
            height: 59px;
        }
    }

    &__hamburger {
        @include mobile {
            display: block;
            font-size: 30px;
        }

        @include desktop {
            display: none;
        }
    }

    &__login {
        display: flex;
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
</style>