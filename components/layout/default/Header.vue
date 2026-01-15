<script setup lang="ts">
import Logo from '~/components/ui/Logo.vue';
import ConfirmContent from '~/components/ui/modal/ConfirmContent.vue';

const isDropdownOpen = ref(false);
const isDropdownMobileOpen = ref(false)

const modal = useModal();
const toast = useToast();

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
        onConfirm: () => {
            toast.success('You have successfully logged out');
            navigateTo('/login')
        },
    })
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
                    <NuxtLink to="/dashboard" class="dropdown__item dropdown__item--button">Profile</NuxtLink>
                    <button class="dropdown__item dropdown__item--button" @click="handleLogout">Logout</button>
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
                            <NuxtLink to="/dashboard" class="dropdown__item dropdown__item--button">Profile</NuxtLink>
                            <button class="dropdown__item dropdown__item--button" @click="handleLogout">Logout</button>
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
        background-color: var(--color-white);
        border-radius: 8px;
        border: 1px solid var(--color-border);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        z-index: 100;

        @include desktop {
            margin-top: vw(20);
            min-width: vw(150);
        }

        @include mobile {
            margin-top: vw-mobile(8);
            min-width: vw-mobile(100);
        }

    }

    &__item {
        display: block;
        text-decoration: none;
        color: var(--color-text);
        font-weight: 500;
        transition: background-color 0.2s;

        @include desktop {
            padding: vw(12) vw(20);
        }

        @include mobile {
            padding: vw-mobile(8) vw-mobile(16);
        }


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

            @include desktop {
                font-size: vw(20);
                max-width: vw(150);
            }

            @include mobile {
                font-size: vw-mobile(15);
                max-width: vw-mobile(150);
            }
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

    @include desktop {
        padding: vw(23) vw(110);
        max-width: vw(1700);
        height: vw(60);
        position: fixed;
    }

    @include mobile {
        align-items: center;
        height: vw-mobile(40);
        padding: vw-mobile(20);
    }

    &__button-container {
        @include desktop {
            display: flex;
            gap: vw(30);
        }

        @include mobile {
            display: none;
        }
    }

    &__logo {
        @include desktop {
            width: vw(254);
            height: vw(59);
        }

        @include mobile {
            width: vw-mobile(150);
            height: vw-mobile(30);
        }
    }

    &__hamburger {
        @include desktop {
            display: none;
        }

        @include mobile {
            display: block;
            font-size: vw-mobile(30);
        }
    }

    &__login {
        display: flex;
        align-items: center;

        &__image {
            @include desktop {
                width: vw(65);
                margin-left: vw(10);
            }
        }

        &__name {
            @include desktop {
                font-weight: 700;
                font-size: vw(24);
                line-height: vw(32);
            }
        }

        &__icon {
            @include desktop {
                font-size: vw(30);
            }
        }
    }
}
</style>