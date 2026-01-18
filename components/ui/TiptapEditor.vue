<script setup>
import InputForm from './InputForm.vue';
const editor = useEditor({
    content: "<p>type your wonderful story here!</p>",
    extensions: [TiptapStarterKit],
});

onBeforeUnmount(() => {
    unref(editor).destroy();
});
</script>
<template>
    <div class="custom-input">
        <div v-if="editor">
            <button class="button" @click="editor.chain().focus().toggleBold().run()"
                :disabled="!editor.can().chain().focus().toggleBold().run()">
                <Icon class="button__icon" name="fluent:text-bold-16-filled" />
            </button>
            <button class="button" @click="editor.chain().focus().toggleItalic().run()"
                :disabled="!editor.can().chain().focus().toggleItalic().run()">
                <Icon class="button__icon" name="fluent:text-italic-16-filled" />
            </button>
            <button class="button" @click="editor.chain().focus().toggleStrike().run()"
                :disabled="!editor.can().chain().focus().toggleStrike().run()">
                <Icon class="button__icon" name="fluent:text-strikethrough-16-filled" />
            </button>
            <button class="button" @click="editor.chain().focus().toggleLink().run()">
                <Icon class="button__icon" name="heroicons:link-16-solid" />
            </button>
            <button class="button" @click="editor.chain().focus().toggleBulletList().run()">
                <Icon class="button__icon" name="fluent:text-bullet-list-16-filled" />
            </button>
            <button class="button" @click="editor.chain().focus().toggleOrderedList().run()">
                <Icon class="button__icon" name="fluent:text-number-list-16-filled" />
            </button>
        </div>
        <TiptapEditorContent :editor="editor" />
    </div>
</template>

<style scoped lang="scss">
.custom-input {
    border: 2px solid var(--color-border);
    border-radius: fluid(8, 8);
    padding: fluid(10, 10);

    @include tablet {
        padding: fluid(8, 12);
    }

    &:focus {
        border: 2px solid var(--color-primary);
    }
}

.button {
    border: none;
    background-color: var(--color-white);
    cursor: pointer;
    border-radius: fluid(8, 8);
    padding: fluid(5, 5);
    margin-bottom: fluid(5, 5);
    margin-right: fluid(5, 5);

    &:hover {
        background-color: var(--color-border);
    }

    &__icon {
        color: var(--color-text);
        font-size: fluid(20, 20);
    }
}
</style>