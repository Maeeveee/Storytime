<script setup lang="ts">
import InputForm from '~/components/ui/InputForm.vue';
import Button from '~/components/ui/Button.vue';
import TiptapEditor from '~/components/ui/TiptapEditor.vue';
import type { CreateStoryPayload, UpdateStoryPayload, Category, StoryDetail } from '~/types/api';

interface Props {
    title: 'write' | 'edit'
    story?: StoryDetail
}

const props = withDefaults(defineProps<Props>(), {
    title: 'write'
});

const toast = useToast();
const { $api } = useNuxtApp()

const storyId = ref<number | string | null>(null)
const storyTitle = ref('')
const content = ref('')
const categoryId = ref<number | string>('')
const coverImageUrl = ref('')
const coverFile = ref<File | null>(null)
const coverPreview = ref('')
const categories = ref<Category[]>([])
const isLoading = ref(false)

const fetchCategories = async () => {
    try {
        const response = await $api.category.getCategories()
        categories.value = response.data
    } catch (error) {
        console.error('Failed to fetch categories', error)
    }
}

onMounted(() => {
    fetchCategories()
    
    if (props.story && props.title === 'edit') {
        storyId.value = props.story.id
        storyTitle.value = props.story.title
        content.value = props.story.content
        categoryId.value = props.story.category.id
        coverImageUrl.value = props.story.cover_image || ''
        coverPreview.value = props.story.cover_image || ''
    }
})

const handleCoverChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    const file = target.files?.[0]
    if (file) {
        coverFile.value = file
        coverPreview.value = URL.createObjectURL(file)
    }
}

const uploadCover = async (storyId: number | string): Promise<boolean> => {
    if (!coverFile.value) return true
    try {
        await $api.story.uploadCover(storyId, coverFile.value)
        return true
    } catch (error) {
        console.error('Failed to upload cover', error)
        return false
    }
}

const handleCreateStory = async () => {
    if (!storyTitle.value || !content.value || !categoryId.value) {
        toast.error('Please fill all required fields')
        return
    }

    isLoading.value = true
    try {
        const payload: CreateStoryPayload = {
            title: storyTitle.value,
            category_id: Number(categoryId.value),
            content: content.value,
        }

        const response = await $api.story.createStory(payload)
        
        if (coverFile.value && response.data?.id) {
            await uploadCover(response.data.id)
        }
        
        toast.success('Successfully posted a story!')
        navigateTo('/dashboard')
    } catch (error) {
        console.error(error)
        toast.error('Failed to create story')
    } finally {
        isLoading.value = false
    }
}

const handleUpdateStory = async () => {
    if (!storyId.value) {
        toast.error('Story ID not found')
        return
    }
    
    isLoading.value = true
    try {
        const payload: UpdateStoryPayload = {
            title: storyTitle.value,
            category_id: Number(categoryId.value),
            content: content.value,
        }

        await $api.story.updateStory(storyId.value, payload)
        
        if (coverFile.value) {
            await uploadCover(storyId.value)
        }
        
        toast.success('Successfully updated a story!')
        navigateTo('/dashboard')
    } catch (error) {
        console.error(error)
        toast.error('Failed to update story')
    } finally {
        isLoading.value = false
    }
}

const handleCancel = () => {
    navigateTo('/dashboard')
}
</script>
<template>
    <main class="create">
        <div class="create__navigation-wrapper">
            <NuxtLink to="/dashboard/">
                <Icon name="formkit:arrowleft" class="create__back-icon" />
            </NuxtLink>
            <h1 v-if="props.title === 'write'">Write Story</h1>
            <h1 v-else>Edit Story</h1>
        </div>
        <div>
            <label for="title" class="create__label">
                <span class="create__label__title">Title</span>
                <InputForm v-model="storyTitle" id="title" placeholder="Enter a story title" />
            </label>
            <label for="category" class="create__label">
                <span class="create__label__title">Category</span>
                <select v-model="categoryId" id="category" class="create__select">
                    <option value="" disabled>Select a category</option>
                    <option v-for="cat in categories" :key="cat.id" :value="cat.id">
                        {{ cat.name }}
                    </option>
                </select>
            </label>
            <label for="content" class="create__label">
                <span class="create__label__title">Content</span>
                <TiptapEditor v-model="content" />
            </label>
            <label for="cover" class="create__label">
                <span class="create__label__title">Cover Image</span>
                <div class="create__cover-wrapper">
                    <label class="create__input-image" :class="{ 'create__input-image--has-preview': coverPreview }">
                        <input type="file" accept="image/*" @change="handleCoverChange" class="create__file-input" />
                        <template v-if="coverPreview">
                            <img :src="coverPreview" alt="Cover preview" class="create__cover-preview" />
                        </template>
                        <template v-else>
                            <Icon name="ph:image-thin" class="create__input-icon" />
                            <span>Choose Image</span>
                        </template>
                    </label>
                </div>
            </label>
            <div class="create__button">
                <Button @click="handleCancel" variant="secondary">Cancel</Button>
                <Button 
                    v-if="props.title === 'write'" 
                    @click="handleCreateStory" 
                    variant="primary"
                    :disabled="isLoading"
                >
                    {{ isLoading ? 'Posting...' : 'Post Story' }}
                </Button>
                <Button 
                    v-else 
                    @click="handleUpdateStory" 
                    variant="primary"
                    :disabled="isLoading"
                >
                    {{ isLoading ? 'Updating...' : 'Update Story' }}
                </Button>
            </div>
        </div>
    </main>
</template>
<style scoped lang="scss">
.create {
    padding: fluid(100, 180) fluid(20, 40) fluid(20, 60);
    max-width: fluid(375, 1700);
    margin-left: auto;
    margin-right: auto;

    @include tablet {
        padding-top: fluid(80, 120);
    }

    &__cancel {
        @include desktop {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            bottom: vw(130);
            left: vw(550);

            &__button {
                background-color: var(--color-primary);
                border-radius: 50%;
            }

            &__icon {
                font-size: vw(35);
                color: var(--color-white);
            }
        }
    }

    &__button {
        display: flex;
        gap: fluid(41, 41);
        margin-top: fluid(60, 60);

        @include tablet {
            justify-content: center;
        }

        @include mobile {
            flex-direction: column;
            gap: fluid(20, 20);
        }
    }

    &__navigation-wrapper {
        font-family: var(--font-display);
        font-weight: 600;
        display: flex;
        align-items: center;
        color: var(--color-text);
        gap: fluid(30, 84);
        font-size: fluid(30, 44);
        line-height: fluid(29, 58);
        margin-bottom: fluid(60, 60);

        @include tablet {
            gap: fluid(20, 40);
        }
    }

    &__back-icon {
        color: var(--color-text);
    }

    &__label {
        display: flex;
        flex-direction: column;
        gap: fluid(20, 20);
        margin-top: fluid(30, 30);

        &__title {
            font-weight: 400;
            color: var(--color-text-secondary);
            font-size: fluid(18, 18);
            line-height: fluid(23, 23);
        }
    }

    &__select {
        border: 2px solid var(--color-border);
        width: 100%;
        max-width: fluid(300, 400);
        font-family: var(--font-primary);
        border-radius: fluid(8, 8);
        padding: fluid(15, 20) fluid(15, 20);
        font-size: fluid(16, 18);
        line-height: fluid(20, 24);
        background-color: var(--color-white);
        cursor: pointer;

        &:focus {
            outline: none;
            border-color: var(--color-primary);
        }
    }

    &__file-input {
        display: none;
    }

    &__input-image {
        border: 2px dashed var(--color-border);
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--color-text-secondary);
        flex-direction: column;
        border-radius: fluid(8, 8);
        width: fluid(300, 500);
        height: fluid(250, 400);
        cursor: pointer;
        transition: border-color 0.2s, background-color 0.2s;
        overflow: hidden;

        &:hover {
            border-color: var(--color-primary);
            background-color: var(--color-primary-light);
        }

        &--has-preview {
            border-style: solid;
            padding: 0;
        }

        @include tablet {
            width: 100%;
            max-width: 400px;
            height: 300px;
        }
    }

    &__cover-preview {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &__input-icon {
        width: fluid(80, 100);
        height: fluid(80, 100);
    }
}
</style>