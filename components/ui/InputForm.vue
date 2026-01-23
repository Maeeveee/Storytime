<script setup lang="ts">
const props = defineProps<{
    placeholder: string,
    iconName?: string,
    variant?: 'primary' | 'secondary',
    type?: string
    title?: string
}>();
const model = defineModel<string>();

const emit = defineEmits<{
    search: [value: string]
}>();

const isPasswordVisible = ref(false)
const isPasswordType = computed(() => props.type === 'password')

const inputType = computed(() => {
    if (isPasswordType.value) {
        return isPasswordVisible.value ? 'text' : 'password'
    }
    return props.type ?? 'text'
})

const currentTitle = computed(() => {
    if (isPasswordType.value) {
        return isPasswordVisible.value ? 'Hide password' : 'Show password'
    }
    return props.title ?? 'Hide password'
})


const currentIcon = computed(() => {
    if (isPasswordType.value) {
        return isPasswordVisible.value ? 'formkit:eye' : 'formkit:hidden'
    }
    return props.iconName
})

const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && model.value) {
        emit('search', model.value)
    }
}

const handleIconClick = () => {
    if (isPasswordType.value) {
        isPasswordVisible.value = !isPasswordVisible.value
    } else if (model.value) {
        emit('search', model.value)
    }
}
</script>

<template>
    <div class="input__wrapper">
        <input v-model="model" :type="inputType" :placeholder="placeholder" class="input"
            :class="[`input--${variant ?? 'primary'}`, iconName || isPasswordType ? 'input--with-icon' : '']" @keydown="handleKeydown" />
        <button v-if="iconName || isPasswordType" type="button" :title="currentTitle" class="input__icon-btn" @click="handleIconClick">
            <Icon class="input__icon" :name="currentIcon!" />
        </button>
    </div>
</template>

<style scoped lang="scss">
.input {
    border: 2px solid var(--color-border);
    width: 100%;
    height: 100%;
    font-family: var(--font-primary);
    border-radius: fluid(8, 8);
    padding: fluid(15, 24) fluid(15, 30);
    font-size: fluid(18, 24);
    line-height: fluid(20, 32);

    &--primary {
        max-height: fluid(23, 23);

        &:focus {
            border-color: var(--color-primary);
        }
    }

    &--secondary {
        max-height: fluid(32, 32);
    }

    &--with-icon {
        padding-right: fluid(50, 60);
    }

    &:focus {
        outline: none;
    }

    &__icon-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: fluid(15, 15);
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover .input__icon {
            color: var(--color-primary);
        }
    }

    &__icon {
        color: var(--color-text-secondary);
        font-size: fluid(25, 30);
        transition: color 0.2s;
    }

    &__wrapper {
        position: relative;
        width: 100%;
        display: flex;
    }
}
</style>
