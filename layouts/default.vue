<script setup lang="ts">
import Header from '~/components/layout/default/Header.vue'
import Footer from '~/components/layout/default/Footer.vue'

const token = useCookie('token')
const userStore = useUserStore()
const storyStore = useStoryStore()
const isLoggedIn = computed(() => !!token.value)
onMounted(async () => {
    if (isLoggedIn.value && !userStore.user) {
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