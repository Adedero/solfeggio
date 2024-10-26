import { ref, watch } from 'vue'
import type { Ref } from 'vue';
import { defineStore } from 'pinia'
import type { Score } from '@/types/score.type';
//import { watchDebounced } from '@vueuse/core';
import { defaultScore } from '@/data/default-score';

export const useStore = defineStore('app', () => {

  const storedScore = localStorage.getItem('score');
  const score: Ref<Score> = ref(storedScore ? JSON.parse(storedScore) : defaultScore);

  const setScore = (newScore: Score) => {
    localStorage.setItem('score', JSON.stringify(newScore))
  }

  watch(score, (newValue: Score) => {
    //console.log(newValue)
    setScore(newValue)
    updateHistory(newValue)
    console.log('Score updated')
  },{
    deep: true
  })
  
  const storedHistory = localStorage.getItem('history');
  const history: Ref<Score[]> = ref(storedHistory ? JSON.parse(storedHistory) : []);
  
  function updateHistory(newScore: Score) {
    if (history.value.length === 20) {
      history.value.unshift();
    }
    history.value.push(newScore);
    localStorage.setItem('history', JSON.stringify(history.value))
  }

  const undo = () => {

  }

  const redo = () => {

  }

  const workspace = ref({});

  return { score, history, undo, redo, workspace }
})
