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
        <div class="all-story__input--mobile">
            <InputForm placeholder="Search Story" variant="secondary" icon-name="formkit:search" />
        </div>
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

            <div class="all-story__input--desktop">
                <InputForm placeholder="Search Story" variant="secondary" icon-name="formkit:search" />
            </div>
        </div>

        <div class="all-story__content">
            <div v-for="article in filteredArticles" :key="article.id">
                <StoryCard :article-item="article" :hide-category="hideCategory" variant="small" />
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
        font-family: var(--font-display);
        font-weight: 600;
        color: var(--color-text);
        margin: fluid(100, 170) auto fluid(20, 40);
        padding-inline: fluid(20, 40);
        max-width: fluid(375, 1700);
        font-size: fluid(30, 44);
        line-height: fluid(40, 58);

        @include tablet {
            margin-top: fluid(80, 120);
        }

        @include mobile {
            display: none;
        }
    }

    &__filter {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        padding: fluid(20, 40) fluid(20, 40);
        max-width: fluid(375, 1700);
        font-size: fluid(30, 44);
        line-height: fluid(40, 58);

        @include tablet {
            flex-wrap: wrap;
            gap: fluid(15, 20);
        }
    }

    &__input {
        &--mobile {
            padding: fluid(10, 10) fluid(15, 15);

            @include desktop {
                display: none;
            }

            @include tablet {
                display: block;
            }

            @include mobile {
                display: block;
            }
        }

        &--desktop {
            max-width: fluid(300, 547);

            @include desktop {
                display: block;
            }

            @include tablet {
                display: none;
            }

            @include mobile {
                display: none;
            }
        }
    }

    &__dropdown {
        display: flex;
        align-items: center;
        gap: fluid(10, 30);

        @include tablet {
            width: 100%;
            justify-content: flex-start;
        }
    }

    &__selected-item {
        font-weight: 500;
        background-color: transparent;
        border: none;
        color: var(--color-text);
        font-size: fluid(16, 24);
        line-height: fluid(20, 32);

        &:hover {
            color: var(--color-primary);
        }
    }

    &__item {
        color: var(--color-text);
    }

    &__label {
        font-weight: 400;
        color: var(--color-text-secondary);
        font-size: fluid(16, 24);
        line-height: fluid(20, 32);
    }

    &__content {
        display: grid;
        margin: fluid(20, 66) auto;
        padding-inline: fluid(20, 40);
        max-width: fluid(375, 1700);
        gap: fluid(15, 29);

        @include desktop {
            grid-template-columns: repeat(3, 1fr);
        }

        @include tablet {
            grid-template-columns: repeat(2, 1fr);
        }

        @include mobile {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    &__pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: fluid(50, 50);
    }
}
</style>