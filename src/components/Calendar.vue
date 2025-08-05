<script setup>
const props = defineProps({
  monthName: String,
  weeks: Array,
  days: Array,
  startDay: Number,
  mood: {
    type: Object,
    default: () => ({})
  },
  full: Function,
  todayDate: Number
})

const emit = defineEmits(['day-selected'])
</script>

<template>
  <div class="calendar">
    <h1>{{ monthName }}</h1>
    <div class="grid">
      <div 
        v-for="weekday in weeks" 
        :key="weekday" 
        class="weekday"
      >
        {{ weekday }}
      </div>
      
      <div 
        v-for="n in startDay" 
        :key="`empty-${n}`" 
        class="empty"
      />
      
      <div
        v-for="day in days"
        :key="day"
        class="day"
        :class="{ disabled: day > todayDate }"
      >
        <template v-if="mood[full(day)] && day <= todayDate">
          <i
            :class="['em', 'em-' + mood[full(day)].icon]"
            @click="emit('day-selected', day)"
            aria-role="presentation"
            aria-label="Mood"
          ></i>
        </template>
        <p
          v-else
          @click="day <= todayDate && emit('day-selected', day)"
        >
          {{ day }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.calendar {
  max-width: 600px;
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
  text-align: center;
}

.weekday {
  font-weight: bold;
  padding: 0.5rem;
}

.day {
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.day:hover:not(.disabled) {
  background-color: #f0f0f0;
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