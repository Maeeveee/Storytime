<script setup lang="ts">
import Logo from '~/components/ui/Logo.vue';
import ConfirmContent from '~/components/ui/modal/ConfirmContent.vue';
import type { User } from '~/types/api';
import Button from '~/components/ui/Button.vue';

const isDropdownOpen = ref(false);
const isDropdownMobileOpen = ref(false)
const modal = useModal();
const toast = useToast();
const dropdownRef = ref<HTMLElement | null>(null);

const { $api } = useNuxtApp();
const user = ref<User | null>(null)
const isLoading = ref(true)

const token = useCookie('token')
const isLoggedIn = computed(() => !!token.value)

const fetchUser = async () => {
    try {
        isLoading.value = true
        const response = await $api.user.me()
        user.value = response.data
    } catch (error) {
        console.error('failed to fetch user', error)
    } finally {
        isLoading.value = false
    }
}

onMounted(() => {
    fetchUser();
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

function handleLogout() {
    isDropdownOpen.value = false
    isDropdownMobileOpen.value = false

    modal.open({
        component: ConfirmContent,
        props: {
            title: 'Logout',
            message: 'Are you sure want to logout?',
            confirmText: 'Logout',
            cancelText: 'Cancel'
        },
        onConfirm: async () => {
            try {
                await $api.auth.logout();
                token.value = null
                toast.success('You have successfully logged out');
                navigateTo('/login')
            } catch (error) {
                token.value = null
                navigateTo('/login')
            }
        },
    })
}
</script>
<template>
    <div class="nav-wrapper">
        <div class="nav" ref="dropdownRef">
            <Logo class="nav__logo" />

            <ClientOnly>
                <div class="dropdown dropdown--mobile">
                    <button class="dropdown__button" @click="isDropdownMobileOpen = !isDropdownMobileOpen">
                        <Icon name="formkit:open" class="nav__hamburger" />
                    </button>
                    <Transition name="dropdown">
                        <div v-if="isDropdownMobileOpen" class="dropdown__content">
                            <template v-if="isLoggedIn">
                                <NuxtLink to="/dashboard" class="dropdown__item dropdown__item--button">Profile
                                </NuxtLink>
                                <button class="dropdown__item dropdown__item--button"
                                    @click="handleLogout">Logout</button>
                            </template>
                            <template v-else>
                                <NuxtLink to="/login" class="dropdown__item dropdown__item--button">Login</NuxtLink>
                                <NuxtLink to="/register" class="dropdown__item dropdown__item--button">Register
                                </NuxtLink>
                            </template>
                        </div>
                    </Transition>
                </div>

                <div class="nav__button-container">
                    <template v-if="isLoggedIn">
                        <div class="nav__login">
                            <img class="nav__login__image" src="/img/user.webp" alt="User avatar">
                            <div class="dropdown">
                                <button class="dropdown__button" @click="isDropdownOpen = !isDropdownOpen">
                                    <h4 class="nav__login__name">{{ user?.name }}</h4>
                                    <Icon class="nav__login__icon" name="mdi:chevron-down" />
                                </button>
                                <Transition name="dropdown">
                                    <div v-if="isDropdownOpen" class="dropdown__content">
                                        <NuxtLink to="/dashboard" class="dropdown__item dropdown__item--button">Profile
                                        </NuxtLink>
                                        <button class="dropdown__item dropdown__item--button"
                                            @click="handleLogout">Logout</button>
                                    </div>
                                </Transition>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <Button to="/register" variant="secondary">Register</Button>
                        <Button to="/login" variant="primary">Login</Button>
                    </template>
                </div>
            </ClientOnly>
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
        background-color: var(--color-white);
        border: 1px solid var(--color-border);
        overflow: hidden;
        z-index: 100;
        border-radius: fluid(8, 8);
        box-shadow: 0 fluid(4, 4) fluid(12, 12) rgba(0, 0, 0, 0.1);
        margin-top: fluid(8, 20);
        min-width: fluid(100, 150);
    }

    &__item {
        display: block;
        text-decoration: none;
        color: var(--color-text);
        font-weight: 500;
        transition: background-color 0.2s;
        padding: fluid(8, 12) fluid(16, 20);

        &:hover {
            background-color: var(--color-border-light);
        }

        &--button {
            width: 100%;
            text-align: start;
            background: none;
            border: none;
            cursor: pointer;
            font-family: inherit;
            font-size: fluid(15, 20);
            max-width: fluid(150, 150);
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

.nav-wrapper {
    width: 100%;
    background-color: var(--color-white);
    border-bottom: var(--color-border-light) 3px solid;
    z-index: 100;

    @include desktop {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
    }
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: fluid(15, 23) fluid(20, 40);
    height: fluid(60, 100);
    width: 100%;
    max-width: 1700px;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;

    &__button-container {
        display: flex;
        gap: fluid(20, 30);

        @include mobile {
            display: none;
        }

        @include tablet {
            display: none;
        }
    }

    &__logo {
        width: fluid(120, 200);
        height: fluid(28, 46);
    }

    &__hamburger {
        font-size: fluid-type(30, 30);
        display: none;

        @include mobile {
            display: block;
        }

        @include tablet {
            display: block;
        }
    }

    &__login {
        display: flex;
        align-items: center;

        &__image {
            width: fluid(50, 65);
            margin-left: fluid(8, 10);
        }

        &__name {
            font-weight: 700;
            font-size: fluid(18, 24);
            line-height: fluid(24, 32);
        }

        &__icon {
            font-size: fluid(24, 30);
        }
    }
}
</style>