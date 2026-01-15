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
        font-size: 44px;
        line-height: 58px;
        color: var(--color-text);

        @include desktop {
            margin: 170px 110px 40px 110px;
            font-size: 44px;
            line-height: 58px;
        }

        @include mobile {
            margin: 0 10px;
            display: none;
            font-size: 44px;
            line-height: 58px;
        }
    }

    &__filter {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;

        @include desktop {
            padding: 40px 110px;
            max-width: 1700px;
            font-size: 44px;
            line-height: 58px;
        }

        @include mobile {
            padding: 20px;
            font-size: 44px;
            line-height: 58px;
        }
    }

    &__input {
        &--mobile {

            @include desktop {
                display: none;
            }

            @include mobile {
                padding: 10px 15px;
                display: block;
            }
        }

        &--desktop {
            @include desktop {
                max-width: 547px;
                display: block;
            }

            @include mobile {
                display: none;
            }

        }
    }

    &__dropdown {
        display: flex;
        align-items: center;

        @include desktop {
            gap: 30px;
        }

        @include mobile {
            gap: 10px;
        }

    }

    &__selected-item {
        font-weight: 500;
        background-color: transparent;
        border: none;
        color: var(--color-text);

        @include desktop {
            font-size: 24px;
            line-height: 32px;
        }

        @include mobile {
            font-size: 18px;
            line-height: 20px;
        }


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

        @include desktop {
            font-size: 24px;
            line-height: 32px;
        }

        @include mobile {
            font-size: 18px;
            line-height: 20px;
        }

    }

    &__content {
        display: grid;

        @include desktop {
            margin: 66px 110px;
            grid-template-columns: repeat(3, 1fr);
            gap: 29px;
        }

        @include mobile {
            margin: 20px;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
        }

    }

    &__pagination {
        display: flex;
        justify-content: center;
        align-items: center;

        @include desktop {
            margin-top: 50px;

        }

        @include mobile {
            margin-top: 50px;

        }
    }
}
</style>