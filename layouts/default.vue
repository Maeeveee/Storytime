<script setup lang="ts">
import Header from '~/components/layout/default/Header.vue'
import Footer from '~/components/layout/default/Footer.vue'

const route = useRoute()
const userStore = useUserStore()
const storyStore = useStoryStore()

const routesNeedingCategories = ['/', '/story', '/dashboard/create']

const needsCategories = computed(() => {
    const path = route.path
    return routesNeedingCategories.some(r => path === r || path.startsWith(r + '/')) ||
           path.startsWith('/dashboard/edit')
})

onMounted(async () => {
    if (userStore.isLoggedIn && !userStore.user) {
        try {
            await userStore.fetchUser()
        } catch (error) {
            console.error('Failed to fetch user:', error)
        }
    }

    if (needsCategories.value && storyStore.categories.length === 0) {
        try {
            await storyStore.fetchCategories()
        } catch (error) {
            console.error('Failed to fetch categories:', error)
        }
    }
})

watch(() => route.path, async () => {
    if (needsCategories.value && storyStore.categories.length === 0) {
        try {
            await storyStore.fetchCategories()
        } catch (error) {
            console.error('Failed to fetch categories:', error)
        }
    }
})
</script>
<template>
    <div>
        <Header />
        <slot />
        <Footer />
    </div>
</template>