import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('counter', () => {
  // const doubleCount = computed(() => count.value * 2)

  const data = [
    { name: "Алюминий СУБЛИМАЦИЯ", payload: [
      {depth: '1.14 мм', count:1, priceSquareMeter: 59000, priceProfile: 0, countProfile: 1, active: false},
    ]
    },
    { name: "Композитный алюминий", payload: [
      {depth: '4 мм', count:1, priceSquareMeter: 13800, priceProfile: 1000, countProfile: 1, active: false}
    ]
    },
    { name: "Композитный алюминий Tactile", payload: [
      {depth: '4 мм', count:1, priceSquareMeter: 17650, priceProfile: 1000, countProfile: 1, active: false}
    ]
    },
    { name: "МДФ", payload: [
      {depth: '16 мм', count:1, priceSquareMeter: 9100, priceProfile: 1000, countProfile: 1, active: false}
    ]
    },
    { name: "МДФ Tactile", payload: [
      {depth: '16 мм', count:1, priceSquareMeter: 12900, priceProfile: 1000, countProfile: 1, active: false}
    ]
    },
    { name: "Стекло Cristal Vision (Европа)", payload: [
      {depth: '4 мм', count:1, priceSquareMeter: 12700, priceProfile: 1000, countProfile: 1, active: false},
      {depth: '5 мм', count:1, priceSquareMeter: 13800, priceProfile: 1000, countProfile: 1, active: false},
      {depth: '6 мм', count:1, priceSquareMeter: 15200, priceProfile: 1000, countProfile: 1, active: false},
      {depth: '8 мм', count:1, priceSquareMeter: 19500, priceProfile: 1000, countProfile: 1, active: false}
    ]
    },
    { name: "Стекло Classic (Россия)", payload: [
      {depth: '4 мм', count:1, priceSquareMeter: 9950, priceProfile: 1000, countProfile: 1, active: false},
      {depth: '5 мм', count:1, priceSquareMeter: 10950, priceProfile: 1000, countProfile: 1, active: false},
      {depth: '6 мм', count:1, priceSquareMeter: 12400, priceProfile: 1000, countProfile: 1, active: false},
      {depth: '8 мм', count:1, priceSquareMeter: 16700, priceProfile: 1000, countProfile: 1, active: false}
    ]
    },
    { name: "Пластик", payload: [
      {depth: '1 мм', count:1, priceSquareMeter: 5400, priceProfile: 1000, countProfile: 1, active: false},
      {depth: '2 мм', count:1, priceSquareMeter: 6300, priceProfile: 1000, countProfile: 1, active: false}
    ]
    },
    { name: "Пластик Tactile", payload: [
      {depth: '1 мм', count:1, priceSquareMeter: 9250, priceProfile: 1000, countProfile: 1, active: false},
      {depth: '2 мм', count:1, priceSquareMeter: 10100, priceProfile: 1000, countProfile: 1, active: false}
    ]
    },
    { name: "Стекло Cristal Vision (Европа) триплекс нанесение текстуры с 1-ой стороны", payload: [
      {depth: '8 мм', count:1, priceSquareMeter: 25550, priceProfile: 1000, countProfile: 1, active: false},
      {depth: '10 мм', count:1, priceSquareMeter: 27600, priceProfile: 1000, countProfile: 1, active: false},
      {depth: '12 мм', count:1, priceSquareMeter: 30450, priceProfile: 1000, countProfile: 1, active: false},
      {depth: '16 мм', count:1, priceSquareMeter: 39000, priceProfile: 1000, countProfile: 1, active: false}
    ]
    },
    { name: "Стекло Classic (Россия) триплекс нанесение текстуры с 1-ой стороны", payload: [
      {depth: '8 мм', count:1, priceSquareMeter: 19900, priceProfile: 1000, countProfile: 1, active: false},
      {depth: '10 мм', count:1, priceSquareMeter: 21900, priceProfile: 1000, countProfile: 1, active: false},
      {depth: '12 мм', count:1, priceSquareMeter: 24800, priceProfile: 1000, countProfile: 1, active: false},
      {depth: '16 мм', count:1, priceSquareMeter: 33300, priceProfile: 1000, countProfile: 1, active: false}
    ]
    },
    { name: "Стекло Cristal Vision (Европа) триплекс нанесение текстуры с 2-ух сторон", payload: [
      {depth: '8 мм', count:1, priceSquareMeter: 27350, priceProfile: 1000, countProfile: 1, active: false},
      {depth: '10 мм', count:1, priceSquareMeter: 29400, priceProfile: 1000, countProfile: 1, active: false},
      {depth: '12 мм', count:1, priceSquareMeter: 32200, priceProfile: 1000, countProfile: 1, active: false},
      {depth: '16 мм', count:1, priceSquareMeter: 40800, priceProfile: 1000, countProfile: 1, active: false}
    ]
    },
    { name: "Стекло Classic (Россия) триплекс нанесение текстуры с 2-ух сторон", payload: [
      {depth: '8 мм', count: 1, priceSquareMeter: 21750, priceProfile: 1000, countProfile: 1, active: false},
      {depth: '10 мм', count: 1, priceSquareMeter: 23700, priceProfile: 1000, countProfile: 1, active: false},
      {depth: '12 мм', count: 1, priceSquareMeter: 26550, priceProfile: 1000, countProfile: 1, active: false},
      {depth: '16 мм', count: 1, priceSquareMeter: 35200, priceProfile: 1000, countProfile: 1, active: false}
    ]
    },
  ]

  const result = reactive([])
  const width = ref(0)
  const height = ref(0)
  // const count = ref(0)
  const picture = ref(null)

  return { data, result, width, height, picture }
})
