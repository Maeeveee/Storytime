const loadingKeys = ref<Set<string>>(new Set())

export function useLoading() {
    const isLoading = computed(() => loadingKeys.value.size > 0)

    function startLoading(key: string = 'default') {
        loadingKeys.value = new Set([...loadingKeys.value, key])
    }

    function stopLoading(key: string = 'default') {
        const newSet = new Set(loadingKeys.value)
        newSet.delete(key)
        loadingKeys.value = newSet
    }

    function isKeyLoading(key: string): boolean {
        return loadingKeys.value.has(key)
    }

    function clearAll() {
        loadingKeys.value = new Set()
    }

    return {
        isLoading: readonly(isLoading),
        loadingKeys: readonly(loadingKeys),
        startLoading,
        stopLoading,
        isKeyLoading,
        clearAll
    }
}
