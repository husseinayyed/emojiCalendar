<script setup>
const props = defineProps({
  monthName: String,
  weeks: Array,
  days: Array,
  startDay: Number,
  mood: {
    type: Object,
    default: () => ({}),
  },
  full: Function,
  todayDate: Number,
});

const emit = defineEmits(["day-selected"]);
</script>

<template>
  <div class="calendar">
    <h1>{{ monthName }}</h1>
    <div class="grid">
      <div v-for="weekday in weeks" :key="weekday" class="weekday">
        {{ weekday }}
      </div>

      <div v-for="n in startDay" :key="`empty-${n}`" class="empty" />

      <div
        v-for="day in days"
        :key="day"
        class="day"
        :class="{ disabled: day > todayDate }"
        @click="day <= todayDate && emit('day-selected', day)"
      >
        <i
          v-if="mood[full(day)] && day <= todayDate"
          :class="['em', 'em-' + mood[full(day)].icon]"
          aria-role="presentation"
          aria-label="Mood"
        ></i>
        <p v-else>
          {{ day }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.calendar {
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 5px;
}
h1 {
  text-align: center;
  margin-top: 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
  text-align: center;
}

.weekday {
  color: #4a5568;
  font-weight: bold;
  padding: 0.5rem;
}

.day {
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.day:hover:not(.disabled) {
  background-color: #f0f0f0;
}
.day i {
  transition: 0.2s;
}
.day:hover:not(.disabled) i {
  transform: scale(1.2);
}

.disabled {
  color: #ccc;
  cursor: not-allowed;
}

.em {
  font-size: 1.5rem;
  cursor: pointer;
}

.empty {
  visibility: hidden;
}
</style>
