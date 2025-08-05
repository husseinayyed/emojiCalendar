<template>
  <div class="overlay">
    <div class="popup">
      <button class="close"><i
            class="em em-x"
            aria-role="presentation"
            aria-label="close"
            @click="hide"
          ></i></button>
      <h2>How are you feeling?</h2>
      <div class="buttons">
        <div
          class="option"
          v-for="(m, index) in moods"
          :key="index"
          @click="selectMood(m)"
        >
          <i
            :class="['em', 'em-' + m[1]]"
            aria-role="presentation"
            :aria-label="m.label"
          ></i>
          <span class="label">{{ m[0] }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(['save','hide'])
const moods = [
  ["Happy", "smile"],
  ["Neutral", "neutral_face"],
  ["Sad", "cry"],
  ["Angry", "angry"],
  ["Surprised", "open_mouth"],
  ["Confused", "confused"],
  ["Anxious", "cold_sweat"],
  ["Sick", "face_vomiting"],
  ["Tired", "weary"],
  ["Cool", "sunglasses"]
];

function selectMood(selected) {
  emit('save',selected)
}
function hide(){
  emit('hide')
}
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background-color: transparent;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem; /* in case screen is very small */
  overflow-y: auto;
}

.popup {
  background: white;
  padding: 24px;
  border-radius: 12px;
  position: relative;
  text-align: center;
  width: 100%;
  max-width: 620px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
}

.close {
  position: absolute;
  top: 10px;
  right: 12px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: default; /* or pointer if clickable */
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
}

.option {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  justify-content: center;
  padding: 6px 12px;
  border-radius: 8px;
  transition: background-color 0.2s ease;
}

.option:hover {
  background-color: #f0f0f0;
}

.label {
  font-size: 1rem;
}
</style>
