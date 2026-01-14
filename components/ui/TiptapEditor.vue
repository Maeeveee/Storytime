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
    padding: 10px;
    border: 2px solid var(--color-border);
    border-radius: 8px;

    &:focus {
        border: 2px solid var(--color-primary);
    }
}

.button {
    padding: 5px;
    border: none;
    background-color: var(--color-white);
    cursor: pointer;
    border-radius: 8px;
    margin-bottom: 5px;
    margin-right: 5px;

    &:hover {
        background-color: var(--color-border);
    }

    &__icon {
        font-size: 20px;
        color: var(--color-text);
    }
}
</style>