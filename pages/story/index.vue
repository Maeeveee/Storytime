<script setup lang="ts">
import { articles } from '~/data/articles';
import Breadcrumb from '~/components/ui/Breadcrumb.vue';
import InputForm from '~/components/ui/InputForm.vue';
import StoryCard from '~/components/ui/StoryCard.vue';
import Pagination from '~/components/ui/Pagination.vue';
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
    limit: 12
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

const categories = computed(() => {
    const uniqueCategories = Array.from(new Set(articles.map(article => article.category)));
    return uniqueCategories.map(category => ({ category }));
})

</script>
<template>
    <main class="all-story">
        <h1 class="all-story__title">All Story</h1>
        <Breadcrumb />
        <InputForm class="all-story__input--mobile" placeholder="Search story..." icon-name="formkit:search" />
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
                    <option v-for="category in categories" :key="category.category" :value="category.category"
                        class="all-story__item">{{ category.category }}</option>
                </select>
            </div>
            <InputForm class="all-story__input--dekstop" placeholder="Search story..." icon-name="formkit:search" />
        </div>

        <div class="all-story__content">
            <div v-for="article in filteredArticles" :key="article.id">
                <StoryCard :article-item="article" :hide-category="hideCategory" variant="small"/>
            </div>
        </div>
        <div class="all-story__pagination">
            <Pagination />
        </div>
    </main>
</template>
<style scoped lang="scss">
@media screen and (max-width: 768px) {
    .all-story {
        &__title {
            margin: 0 10px;
            font-family: var(--font-display);
            font-weight: 600;
            font-size: 44px;
            line-height: 58px;

            display: none;
        }

        &__filter {
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: auto;
        }

        &__input {
            margin: auto;

            &--mobile {
                display: block;
                margin-top: 20px;

            }

            &--dekstop {
                display: none;
            }
        }

        &__dropdown {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        &__selected-item {
            font-weight: 500;
            font-size: 18px;
            line-height: 20px;
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
            font-size: 18px;
            line-height: 20px;
            color: var(--color-text-secondary);
        }


        &__content {
            margin: 20px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
        }

        &__pagination {
            margin-top: 50px;
            display: flex;
            justify-content: center;
            align-items: center;

        }
    }
}

@media screen and (min-width: 768px) {

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

            &--mobile{
                display: none;
            }

            &--dekstop{
                display: block;
            }
        }

        &__dropdown {
            display: flex;
            align-items: center;
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
}
</style>