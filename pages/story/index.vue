<script setup lang="ts">
import Breadcrumb from '~/components/ui/Breadcrumb.vue';
import InputForm from '~/components/ui/InputForm.vue';
import StoryCard from '~/components/ui/StoryCard.vue';
import StoryCardSkeleton from '~/components/ui/skeleton/StoryCardSkeleton.vue';
import Pagination from '~/components/ui/Pagination.vue';
import type { StoryListItem, Category } from '~/types/api';

const { $api } = useNuxtApp();
const stories = ref<StoryListItem[]>([]);
const categories = ref<Category[]>([])
const isLoading = ref(true);

const route = useRoute()
const router = useRouter()

const searchQuery = ref('')
const selectedCategory = ref(route.query.categoryId || '')
const sortOrder = ref('newest')
const currentPage = ref(1)
const totalPages = ref(1)
const limit = 12

const fetchStories = async () => {
    isLoading.value = true
    try {
        const params: Record<string, string | number> = {
            limit: limit,
            page: currentPage.value
        }

        if (searchQuery.value) {
            params.search = searchQuery.value
        }

        if (selectedCategory.value) {
            params.category_id = String(selectedCategory.value)
            router.push({ path: '/story/', query: { categoryId: params.category_id } })
        }

        if (sortOrder.value) {
            params.sort_by = sortOrder.value
        }

        const response = await $api.story.getStories(params)
        stories.value = response.data
        if (response.meta) {
            totalPages.value = response.meta.last_page
            currentPage.value = response.meta.current_page
        }
    } catch (error) {
        console.error('failed to fetch stories', error)
    } finally {
        isLoading.value = false
    }
}

const fetchCategories = async () => {
    try {
        const response = await $api.category.getCategories()
        categories.value = response.data
    } catch (error) {
        console.error('failed to fetch categories', error)
    }
}

let searchTimeout: ReturnType<typeof setTimeout> | null = null
const handleSearch = (value: string | undefined) => {
    if (searchTimeout) clearTimeout(searchTimeout)
    searchTimeout = setTimeout(() => {
        searchQuery.value = value || ''
    }, 500)
}

watch([selectedCategory, sortOrder, searchQuery], () => {
    currentPage.value = 1
    fetchStories()
})

onMounted(() => {
    if (route.query.query) {
        searchQuery.value = route.query.query as string
    }
    fetchStories()
    fetchCategories()
})
</script>
<template>
    <main class="all-story">
        <h1 class="all-story__title">All Story</h1>
        <Breadcrumb />
        <div class="all-story__input--mobile">
            <InputForm placeholder="Search Story" variant="secondary" icon-name="formkit:search"
                @update:modelValue="handleSearch" />
        </div>
        <div class="all-story__filter">
            <div class="all-story__dropdown">
                <label for="order" class="all-story__label">Sort By</label>
                <select v-model="sortOrder" name="sort by order" id="order" class="all-story__selected-item">
                    <option value="newest" class="all-story__item">Newest</option>
                    <option value="popular" class="all-story__item">Popular</option>
                    <option value="a-z" class="all-story__item">A - Z</option>
                    <option value="z-a" class="all-story__item">Z - A</option>
                </select>
                <label for="category" class="all-story__label">Category</label>
                <select v-model="selectedCategory" name="sort by category" id="category"
                    class="all-story__selected-item">
                    <option value="" class="all-story__item">All Categories</option>
                    <option v-for="category in categories" :key="category.id" :value="category.id"
                        class="all-story__item">{{ category.name }}</option>
                </select>
            </div>

            <div class="all-story__input--desktop">
                <InputForm placeholder="Search Story" variant="secondary" icon-name="formkit:search"
                    @update:modelValue="handleSearch" />
            </div>
        </div>

        <div v-if="isLoading" class="all-story__content">
            <div v-for="i in 6" :key="i">
                <StoryCardSkeleton variant="small" />
            </div>
        </div>
        <div v-else-if="stories.length === 0" class="all-story__empty">
            <p class="all-story__not-found">No stories found.</p>
        </div>
        <div v-else class="all-story__content">
            <div v-for="article in stories" :key="article.id">
                <StoryCard :article-item="article" variant="small" />
            </div>
        </div>
        <div class="all-story__pagination">
            <Pagination :current-page="currentPage" :total-pages="totalPages"
                @page-change="(page: number) => { currentPage = page; fetchStories(); }" />
        </div>
    </main>
</template>
<style scoped lang="scss">
.all-story {
    &__empty {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: fluid(30, 44);
        margin-block: fluid(150, 80);
    }

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