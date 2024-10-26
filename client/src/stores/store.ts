import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('app', () => {
  const score = ref(JSON.parse(localStorage.getItem('score')) || {});

  const setScore = () => {

  }
  
  const history = ref(JSON.parse(localStorage.getItem('history')) || []);
  
  const updateHistory = (score) => {
    if (history.value.length === 20) {

    }
  }

  const undo = () => {

  }

  const redo = () => {

  }

  const workspace = ref({});

  return { score, history, undo, redo, workspace }
})
