
<template>
  <div class="main">
    <div class="main-calc">
      <div class="main-calc-flex">
        <label for="inputHeight">Высота</label>
        <input v-model="height" id="inputHeight" type="number">
      </div>
      <div class="main-calc-flex">
        <label for="inputWidth">Ширина</label>
        <input v-model="width" id="inputWidth" type="number">
      </div>
      <!-- <div class="main-calc-flex">
        <label for="inputCount">Колличество</label>
        <input v-model="count" id="inputCount" type="number">
      </div> -->
      <div class="main-calc-flex">
        <input 
          type="file" 
          id="inp"
          accept=".jpg, .jpeg, .png, .svg, .TIFF"
          @change="downloadImg"
        />
      </div>
      <img v-if="image" :src="image" alt="" class="main-calc-img">
    </div>

    <div class="main-field">
      <div class="main-field-flex">
        <div class="main-field-name">Name</div>
        <div class="main-field-data">
          <div class="main-field-mini">
            <div class="main-field-el">Толщина</div>
            <div class="main-field-el">Кол-во</div>
            <div class="main-field-el">Цена за 1 кв.м руб</div>
            <div class="main-field-el">Площадь кв.м</div>
            <div class="main-field-el">Стоимость</div>
            <div class="main-field-el">Цена за ед (профиль)</div>
            <div class="main-field-el">Кол-во</div>
            <div class="main-field-el">Итоговая стоимость</div>
            <div class="main-field-el"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-field">
      <div v-for="obj in data" class="main-field-flex" >
        <div class="main-field-name">{{ obj.name }} </div>
        <div class="main-field-data">
          <div v-for="el in obj.payload" class="main-field-mini">
            <div class="main-field-el">{{ el.depth }}</div>
            <div class="main-field-el ">
              <input v-model="el.count" class="main-field-input" type="number">
            </div>
            <div class="main-field-el bg-gray">{{ el.priceSquareMeter }}</div>
            <div class="main-field-el bg-green">{{ width * height }}</div>
            <div class="main-field-el">{{ el.priceSquareMeter * width * height * el.count }}</div>
            <div class="main-field-el">{{ el.priceProfile }} </div>
            <div class="main-field-el">
              <input v-model="el.countProfile" class="main-field-input" type="number">
            </div>
            <div class="main-field-el bg-green">{{ el.priceSquareMeter * width * height * el.count + el.priceProfile * el.countProfile}}</div>
            <div class="main-field-el"> 
              <input type="checkbox" v-model="el.active" class="main-field-checkbox">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-result">
      <button @click="goToResult" class="main-result-btn">do it</button>
    </div>
      
  </div>
</template>

<script>

import { ref, reactive } from 'vue'
import { useStore } from "../stores/store.js"
import { useRouter } from 'vue-router'

export default {

  setup() {
    const store = useStore()
    const router = useRouter()

    const data = reactive([...store.data])
    const width = ref(store.width)
    const height = ref(store.height)
    // const count = ref(0)
    const result = reactive([])
    const image = ref(null);

    function goToResult() {
      data.forEach(el => {
        el.payload.forEach(miniEl => {
          if(miniEl.active == true) {
            const idx = result.findIndex(res => res.name == el.name)
            if(idx !== -1) {
              result[idx].payload.push(miniEl)
            }
            else {
              result.push({name: el.name, payload: [miniEl]})
            }
          }
        })
      })

      store.result = result
      store.width = width
      store.height = height
      // store.count = count
      router.push({ name: 'result' })
    }

    const downloadImg = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        image.value = e.target.result;
        store.picture = image.value
      };
      reader.readAsDataURL(file);
    };

    return {store, data, width, height, result, goToResult, downloadImg, image }
  }
}

</script>

<style scoped>
  .main {
    margin-top: 32px;
    margin-bottom: 32px;
  }
  .main-calc {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
  }
  .main-calc-flex {
    display: flex;
    flex-direction: column;
    margin-right: 24px;
  }
  .main-calc-img {
    max-width: 100px;
    max-height: 100px;
  }
  .main-field {

  }
  .main-field-flex {
    display: flex;
  }
  .main-field-mini {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .main-field-el {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    padding: 4px;
    width: 11.11%;
    min-height: 42px;
  }
  .main-field-name {
    width: 20%;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px;
    /* width: 20%; */
    border: 1px solid black;
  }
  .main-field-data {
    width: 100%;
  }
  .main-field-input {
    height: 100%;
    width: 100%;
    /* margin: 8px; */
    /* padding: 8px; */
    border: none;
  }
  .main-field-input:focus {
    outline: none
  }
  .main-field-checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
  }
  .main-result {
    display: flex;
    justify-content: center;
    margin-top: 32px;
  }
  .main-result-btn {
    width: 200px;
    height: 40px;
  }


</style>

