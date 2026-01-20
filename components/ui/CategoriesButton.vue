<script setup lang="ts">
const props = defineProps<{ category?: string, categoryId?: any}>();

const category = props.categoryId
 
const router = useRouter()

const handleCategories = async () => {
    await router.push({ path: '/story/', query: { categoryType: category } })
}
console.log(props.category)
console.log(category)
</script>

<template>
    <div class="categories">
        <button v-on:click="handleCategories" class="categories__button">{{ $props.category }}</button>
    </div>
</template>

<style lang="scss" scoped>
.categories {
    &__button {
        color: var(--color-primary);
        background-color: var(--color-primary-light);
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        font-weight: 500;
        border-radius: fluid(12, 12);
        font-size: fluid(28, 28);
        width: fluid(135, 135);
        height: fluid(38, 38);
        padding: fluid(40, 60);
        margin: auto;

        @include tablet {
            font-size: fluid(20, 24);
            padding: fluid(30, 40);
        }

        &:hover {
            background-color: #D9E6D3;
            color: var(--color-text);
            cursor: pointer;
        }
    }
}
</style>