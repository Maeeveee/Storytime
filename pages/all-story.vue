<script setup lang="ts">
import Breadcrumb from '~/components/ui/Breadcrumb.vue';
import InputForm from '~/components/ui/InputForm.vue';
import StoryCard from '~/components/ui/StoryCard.vue';
import Pagination from '~/components/ui/Pagination.vue';
import { articles } from '~/data/articles';
interface Props {
    category?: string;
    title?: string;
    hideCategory?: boolean;
    limit?: number;
}

const props = withDefaults(defineProps<Props>(), {
    category: '',
    title: '',
    hideCategory: false,
    limit: 0
})

const filteredArticles = computed(() => {
    let result = [...articles];

    if (props.category) {
        result = result.filter(article => article.category === props.category);
    }

    if (props.limit > 0) {
        result = result.slice(0, props.limit);
    }

    return result;
});
</script>
<template>
    <main class="all-story">
        <h1 class="all-story__title">All Story</h1>
        <Breadcrumb />
        <div class="all-story__filter">
            <div class="all-story__dropdown">
                <label for="order" class="all-story__label">Sort By</label>
                <select name="sort by order" id="order" class="all-story__selected-item">
                    <option value="newest" class="all-story__item">Newest</option>
                    <option value="popular" class="all-story__item">Popular</option>
                    <option value="ascending" class="all-story__item">A - Z</option>
                    <option value="descending" class="all-story__item">Z - A</option>
                </select>
                <label for="category" class="all-story__label">Category</label>
                <select name="sort by category" id="category" class="all-story__selected-item">
                    <option value="comedy" class="all-story__item">Comedy</option>
                    <option value="romance" class="all-story__item">Romance</option>
                    <option value="horror" class="all-story__item">Horror</option>
                    <option value="adventure" class="all-story__item">Adventure</option>
                    <option value="fiction" class="all-story__item">Fiction</option>
                    <option value="fantasy" class="all-story__item">Fantasy</option>
                    <option value="drama" class="all-story__item">Drama</option>
                    <option value="heartfelt" class="all-story__item">Heartfelt</option>
                    <option value="mystery" class="all-story__item">Mystery</option>
                </select>
            </div>
            <InputForm class="all-story__input" placeholder="Search story..." icon-name="formkit:search" />
        </div>

        <div class="all-story__content">
            <div v-for="article in filteredArticles" :key="article.id">
                <StoryCard :article-item="article" :hide-category="hideCategory" />
            </div>
        </div>
        <div class="all-story__pagination">
            <Pagination />
        </div>
    </main>
</template>
<style scoped lang="scss">
.all-story {
    &__title {
        margin: 170px 110px 40px 110px;
        font-family: var(--font-display);
        font-weight: 600;
        font-size: 44px;
        line-height: 58px;
    }

    &__filter {
        padding: 40px 110px;
        max-width: 1700px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;
    }

    &__input {
        max-width: 547px;
    }

    &__dropdown {
        display: flex;
        gap: 30px;
    }

    &__selected-item {
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        background-color: transparent;
        border: none;

        &:hover {
            color: var(--color-primary);
        }
    }

    &__item {
        color: var(--color-text);
    }

    &__label {
        font-weight: 400;
        font-size: 24px;
        line-height: 32px;
        color: var(--color-text-secondary);
    }


    &__content {
        margin: 66px 110px 66px 110px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 29px;
    }

    &__pagination {
        margin-top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

    }
}
</style>