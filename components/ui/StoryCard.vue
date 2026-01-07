<script setup lang="ts">
interface IProps {
    ArticleItem: Article;
}

interface Article {
    id: number;
    image: string;
    title: string;
    shortContent: string;
    authorName: string;
    authorAvatar: string;
    createdDate: string;
    category: string;
}

const props = defineProps<IProps>();

</script>

<template>
    <div class="card">
        <div class="card__image">
            <img :src="props.ArticleItem.image" alt="Story Image" class="card__image">
        </div>
        <div class="card__content">
            <div class="card__header">
                <h2 class="card__title">{{ props.ArticleItem.title }}</h2>
                <p class="card__description">{{ props.ArticleItem.shortContent }}</p>
            </div>
            <div class="card__footer">
                <div class="card__author-info">
                    <img :src="props.ArticleItem.authorAvatar" alt="Author Avatar" class="card__author-avatar">
                    <span class="card__author-name">{{ props.ArticleItem.authorName }}</span>
                </div>
                <div class="card__story-info">
                    <span class="card__created-at">{{ props.ArticleItem.createdDate }}</span>
                    <div class="card__genre-badge">
                        <span class="card__genre">{{ props.ArticleItem.category }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(547px, 1fr));
    gap: 20px;

    &:hover {
        cursor: pointer;
    }

    &__image {
        width: 547px;
        height: 500px;
        border-radius: 8px;

        &:hover {
            opacity: 0.7;
        }
    }

    &__title {
        font-weight: 700;
        font-size: 36px;
        font-weight: 46px;
        color: #4b4b4b;
        margin-top: 20px;
        margin-bottom: 20px;

        &:hover {
            color: #466543;
        }
    }

    &__description {
        max-height: 80px;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        color: #4b4b4b;
    }

    &__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        bottom: 0;
        margin-top: 20px;
    }

    &__author-info {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    &__author-avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    &__author-name {
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        color: #222222;
    }

    &__story-info {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    &__created-at {
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #222222;
    }

    &__genre-badge {
        background-color: #F0F5ED;
        border-radius: 8px;
        padding: 8px 12px 8px 12px;
        display: inline-block;
    }

    &__genre {
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #466543;
    }
}
</style>