<script setup lang="ts">
interface Props {
    currentPage: number
    totalPages: number
}

const props = defineProps<Props>()

const emit = defineEmits<{
    'page-change': [page: number]
}>()

const visiblePages = computed(() => {
    const pages: number[] = []
    const total = props.totalPages
    const current = props.currentPage
    
    let start = Math.max(1, current - 2)
    let end = Math.min(total, start + 4)
    
    if (end - start < 4) {
        start = Math.max(1, end - 4)
    }
    
    for (let i = start; i <= end; i++) {
        pages.push(i)
    }
    
    return pages
})

const goToPage = (page: number) => {
    if (page >= 1 && page <= props.totalPages && page !== props.currentPage) {
        emit('page-change', page)
    }
}

const prevPage = () => {
    if (props.currentPage > 1) {
        emit('page-change', props.currentPage - 1)
    }
}

const nextPage = () => {
    if (props.currentPage < props.totalPages) {
        emit('page-change', props.currentPage + 1)
    }
}
</script>
<template>
    <div v-if="totalPages > 1" class="container">
        <button 
            class="container__pagination" 
            :class="currentPage === 1 ? 'container__pagination--disabled' : 'container__pagination--inactive'"
            :disabled="currentPage === 1"
            @click="prevPage"
        >
            Prev
        </button>
        
        <button 
            v-for="page in visiblePages" 
            :key="page"
            class="container__pagination"
            :class="page === currentPage ? 'container__pagination--active' : 'container__pagination--inactive'"
            @click="goToPage(page)"
        >
            {{ page }}
        </button>
        
        <button 
            class="container__pagination" 
            :class="currentPage === totalPages ? 'container__pagination--disabled' : 'container__pagination--inactive'"
            :disabled="currentPage === totalPages"
            @click="nextPage"
        >
            Next
        </button>
    </div>
</template>
<style scoped lang="scss">
.container {
    display: flex;
    gap: fluid(10, 15);

    &__pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        transition: background-color 0.3s, color 0.3s;
        border-radius: fluid(8, 8);
        font-size: fluid(14, 20);
        line-height: fluid(19, 28);
        padding: fluid(8, 12) fluid(12, 20);
        border: none;
        cursor: pointer;

        &--active {
            background-color: var(--color-primary);
            color: var(--color-white);
            cursor: default;
        }

        &--inactive {
            background-color: var(--color-primary-light);
            color: var(--color-text);

            &:hover {
                background-color: var(--color-primary);
                color: var(--color-white);
            }
        }
        
        &--disabled {
            background-color: var(--color-border-light);
            color: var(--color-text-secondary);
            cursor: not-allowed;
            
            &:hover {
                background-color: var(--color-border-light);
                color: var(--color-text-secondary);
            }
        }
    }
}
</style>