<script setup lang="ts">
import  { articles } from '~/data/articles';

interface Props{
    category?: string;
    title?: string;
    hideCategory?: boolean;
    limit?: number;
}

const props = withDefaults(defineProps<Props>(),{
    category: '',
    title: '',
    hideCategory: false,
    limit: 0
})

const filteredArticles = computed(() => {
    let result = [...articles];

    if(props.category){
        result = result.filter(article => article.category === props.category);
    }

    if (props.limit > 0) {
        result = result.slice(0, props.limit);
    }

    return result;
});

const displayTitle = computed(() =>{
    if (props.title) return props.title;
    if (props.category) {
        return props.category.charAt(0).toUpperCase() + props.category.slice(1);
    } 
    return 'Latest Story'
})

</script>

<template>
    <div class="carouselHeader">
        <h2 class="title">{{ displayTitle }}</h2>
        <UiExploreMoreButton />
    </div>

    <UiDivider />

    <div class="carousel-container">
        <div v-for="article in filteredArticles" :key="article.id">
            <UiStoryCard :article-item="article" :hide-category="hideCategory"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.carouselHeader {
    margin-top: 150px;
    display: flex;
    justify-content: space-between;
}

.title {
    font-family: "Playfair Display", serif;
    font-size: 44px;
    font-weight: 600;
    line-height: 58px;
}

.carousel-container {
    display: flex;
    gap: 20px;

    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;

    padding-bottom: 16px;
    >div{
        scroll-snap-align: start;
        flex-shrink: 0;
    }

}
</style>