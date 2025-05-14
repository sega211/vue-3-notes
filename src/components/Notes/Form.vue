<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea
        required
        v-model="value"
        placeholder="Type something here ..."
      />
      <TagList @onItemClick="handleTagClick" :items="tags" />
      <button class="btn btnPrimary" type="submit">
        Добавить новую задачу
      </button>
    </form>
  </div>
</template>
<script>
import TagList from '@/components/UI/TagList.vue'
export default {
  components: {
    TagList
  },
  data() {
    return {
      value: '',
      tags: ['home', 'work', 'school']
    }
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', this.value)
      this.value = ''
    },
    handleTagClick(tag) {
      console.log(tag)
    }
  }
}
</script>
<style lang="scss" scoped>
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.note-form {
  max-width: 800px;
  width: 100%;
  textaria {
    margin-bottom: 0;
  }
  button {
    width: 100%;
  }
}
</style>
