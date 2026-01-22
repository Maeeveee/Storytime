<script setup lang="ts">
import Header from '~/components/layout/default/Header.vue'
import Footer from '~/components/layout/default/Footer.vue'

const route = useRoute()

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
    if (route.path === '/' || route.path === '/story/' || route.path === '/dashboard/create' || route.path === '/dashboard/edit/') {
        if (route.path === '/dashboard/edit/' && route.params) {
            try {
                await storyStore.fetchCategories()
                console.log('fetch categories')
            } catch (error) {
                console.error('failed fetch', error)
            }
        }
        try {
            await storyStore.fetchCategories()
            console.log('fetch categories')
        } catch (error) {
            console.error('failed fetch', error)
        }
    }
    console.log(route.params)
    console.log('halo')
});
</script>
<template>
    <div>
        <Header />
        <slot />
        <Footer />
    </div>
</template>