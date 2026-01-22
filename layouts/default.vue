<script setup lang="ts">
import Header from '~/components/layout/default/Header.vue'
import Footer from '~/components/layout/default/Footer.vue'

const userStore = useUserStore()
const storyStore = useStoryStore()

onMounted(async () => {
    if (userStore.isLoggedIn && !userStore.user) {
        try {
            await userStore.fetchUser()
        } catch (error) {
            console.error('failed to fetch user', error)
        }
    }
    storyStore.fetchCategories()
});
</script>
<template>
    <div>
        <Header />
        <slot />
        <Footer />
    </div>
</template>