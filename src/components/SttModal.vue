<!-- Modal.vue -->
<template>
  <transition name="modal-fade">
    <div v-if="isVisible" class="modal">
      <div class="modal-content">
        <img class="img-size" :src="sttmodal">
        <p class="font-size"> {{ modalMessage }}</p>
      </div>
    </div>
  </transition>
</template>

<script>

import images from "@/assets/images";

export default {
  data() {
    return {
      sttmodal: images.sttmodal,
      showModal: false,
      modalMessage: "듣고있어요",
    };
  },
  props: {
    isVisible: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.img-size {
  width: 80%;
}
.font-size {
  font-size: 25px;
}
</style>
