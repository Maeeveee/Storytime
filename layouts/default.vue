<script setup lang="ts">
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
        <LayoutDefaultHeader />
        <slot />
        <LayoutDefaultFooter />
    </div>
</template>