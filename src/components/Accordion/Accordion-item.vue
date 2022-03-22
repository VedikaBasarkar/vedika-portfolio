<template>
  <li class="accordion__item">
    <div
      class="accordion__trigger text-xl md:text-3xl font-medium my-4 hover:text-secondary"
      :class="{ accordion__trigger_active: visible }"
      @click="open"
    >
      <!-- This slot will handle the title/header of the accordion and is the part you click on -->
      <div class="flex flex-row w-full">
        <div class="w-full md:w-3/5 flex flex-row justify-between cursor-pointer">
          <slot name="accordion-trigger"></slot>
          <div class="px-2">
            <g-image class="pt-2 md:pt-5 cursor-pointer" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1634761944/Vitwit%20Website/icons/up.svg" v-show="visible" />
            <g-image class="pt-2 md:pt-5 cursor-pointer" src="https://res.cloudinary.com/vitwit-technologies/image/upload/v1634761944/Vitwit%20Website/icons/down.svg" v-show="!visible" />
          </div>
        </div>
      </div>
    </div>
    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div class="accordion__content" v-show="visible">
        <ul>
          <!-- This slot will handle all the content that is passed to the accordion -->
          <slot name="accordion-content"></slot>
        </ul>
      </div>
    </transition>

    <div class="flex flex-row pb-4">
        <div class="w-full md:w-3/5 border border-solid border-t-3 border-gray-400" />
        <div class="hidden md:flex w-full md:w-2/5 border border-dashed border-t-5 border-gray-600" />
    </div>
  </li>
</template>


<script>
export default {
  props: {},
  inject: ["Accordion"],
  data() {
    return {
      index: null,
    };
  },
  computed: {
    visible() {
      return this.index == this.Accordion.active;
    },
  },
  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = null;
      } else {
        this.Accordion.active = this.index;
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    },
  },
  created() {
    this.index = this.Accordion.count++;
  },
};
</script>

<style scoped>
.accordion__item {
  cursor: pointer;
  /* padding: 10px 20px 10px 40px; */
  /* border-bottom: 1px solid #ebebeb; */
  position: relative;
}

.accordion__trigger {
  display: flex;
  justify-content: space-between;
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  /* overflow: hidden; */
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
