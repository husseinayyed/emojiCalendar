<script setup>
import { ref, computed, onMounted } from "vue";
import Calendar from "./components/Calendar.vue";
import Popup from "./components/Popup.vue";

// Reactive state
const currentDate = ref(new Date());
const showPopup = ref(false);
const selectedDay = ref(0);
const moodData = ref({});

// Constants
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Computed properties
const currentYear = computed(() => currentDate.value.getFullYear());
const currentMonth = computed(() => currentDate.value.getMonth());
const currentDay = computed(() => currentDate.value.getDate());

const startDay = computed(() => {
  return new Date(currentYear.value, currentMonth.value, 1).getDay();
});

const daysInMonth = computed(() => {
  const daysCount = new Date(
    currentYear.value,
    currentMonth.value + 1,
    0
  ).getDate();
  return Array.from({ length: daysCount }, (_, i) => i + 1);
});

const monthName = computed(() => monthNames[currentMonth.value]);

// Methods
const getDateKey = (day) => `${currentYear.value}-${currentMonth.value}-${day}`;

const togglePopup = () => {
  showPopup.value = !showPopup.value;
};

const handleDaySelection = (dayIndex) => {
  selectedDay.value = dayIndex;
  togglePopup();
};

const saveMood = (selection) => {
  moodData.value[getDateKey(selectedDay.value)] = { icon: selection[1] };
  localStorage.setItem("moodData", JSON.stringify(moodData.value));
  togglePopup();
};

// Lifecycle
onMounted(() => {
  const savedData = JSON.parse(localStorage.getItem("moodData")) || {};
  moodData.value = savedData;
});
</script>

<template>
  <Calendar
    :month-name="monthName"
    :weeks="weekdays"
    :days="daysInMonth"
    :start-day="startDay"
    :mood="moodData"
    :full="getDateKey"
    :today-date="currentDay"
    @day-selected="handleDaySelection"
  />
  <Transition name="fade-scale">
    <Popup v-show="showPopup" @hide="togglePopup" @save="saveMood" />
  </Transition>
</template>
<style>
* {
  user-select: none;
  box-sizing: border-box;
}
@viewport {
  width: device-width;
  zoom: 1;
}

html,
body {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  margin: 0;
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.35s ease;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
  transform: translateY(50px);
}
</style>
