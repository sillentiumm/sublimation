
<template>
  <div class="result">
    <div class="result-container">
      <div class="result-left bg-secondary">
        <div class="result-area bg-price">
          <div class="result-area-el">
            <span>Ширина, м</span>
            <span>{{ store.width }}</span>
          </div>
          <div class="result-area-el">
            <span>Высота, м</span>
            <span>{{ store.height }}</span>
          </div>
        </div>
        <div v-if="store.picture" class="result-img">
          <img :src="store.picture" alt="" >
        </div>
      </div>

      <div class="result-right">
        <div class="result-header">
          <div class="result-header-logo">
            <img src="../assets/monoart-logo.svg" alt="">
            <div>monoart</div>
          </div>
          <div class="result-header-descr">
            <span>
              Изготовление арт-панелей и фотокартин
            </span>
          </div>
          <div class="result-header-site">
            <span>www.monoart.ru</span>
          </div>
        </div>

        <div class="result-field result-field-logo">
          <div class="result-field-flex">
            <div class="result-field-name bg-main">Наименование</div>
            <div class="result-field-data">
              <div class="result-field-mini">
                <div class="result-field-el bg-main">Толщина</div>
                <div class="result-field-el result-field-el-mini bg-main">Кол-во</div>
                <div class="result-field-el bg-main">Цена за 1 м², ₽</div>
                <div class="result-field-el bg-main">Площадь м²</div>
                <div class="result-field-el bg-main">Стоимость, ₽</div>
                <div class="result-field-el bg-main">Цена за ед (профиль) </div>
                <div class="result-field-el result-field-el-mini bg-main">Кол-во</div>
                <div class="result-field-el bg-main">Итоговая стоимость, ₽</div>
              </div>
            </div>
          </div>
        </div>

        <div class="result-field">
          <div v-for="obj in result" class="result-field-flex" >
            <div class="result-field-name">{{ obj.name }} </div>
            <div class="result-field-data">
              <div v-for="el in obj.payload" class="result-field-mini">
                <div class="result-field-el">{{ el.depth }}</div>
                <div class="result-field-el result-field-el-mini">{{ el.count }} </div>
                <div class="result-field-el bg-price">{{ el.priceSquareMeter }}</div>
                <div class="result-field-el bg-secondary">{{ parseInt(store.width * store.height * 1000) / 1000 }}</div>
                <div class="result-field-el bg-price">{{ Math.ceil(el.priceSquareMeter * store.width * store.height * el.count) }}</div>
                <div class="result-field-el">{{ el.priceProfile }}</div>
                <div class="result-field-el result-field-el-mini">{{ el.countProfile }}</div>
                <div class="result-field-el bg-price">{{ Math.ceil(el.priceSquareMeter * store.width * store.height * el.count + el.priceProfile * el.countProfile) }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { ref, reactive } from 'vue'
import { useStore } from "../stores/store.js"

export default {

setup() {
  const store = useStore()
  const result = reactive([...store.result])

  return {store, result }
}
}
</script>

<style scoped>
  .result {
    width: 100vw;
  }
  .result-container {
    width: 90%;
    display: flex;
    border: 2px solid black;
    margin: 0 auto;
    margin-top: 12px;
    margin-bottom: 12px;
  }
  .result-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    min-height: 100px;
  }
  .result-area {
    display: flex;
    justify-content: center;
    /* background-color: lightgray; */
    border: 1px solid black;
  }
  .result-area-el {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 8px;
  }
  .result-img {
    max-width: 80%;
    max-height: 80%;
  }
  .result-img img {
    max-width: 100%;
    max-height: 100%;
  }

  .result-right {
    width: 90%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
  .result-header {
    display: flex;
  }
  .result-header-logo, .result-header-descr, .result-header-site {
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    border: 1px solid black;
    padding: 8px;
  }
  .result-header-logo {
    display: flex;
    justify-content: space-between;
    width: 31.4%;
  }
  .result-header-logo img {
    height: 50%;
    padding-left: 4px;
  }
  .result-header-descr {
    width: 40%;
  }
  .result-header-site {
    width: 28.6%;
    text-decoration: underline;
    color: blue;
  }
  .result-field {
    height: 100%;
  }
  .result-field-logo {
    height: auto;
  }
  .result-field-flex {
    /* height: 100%; */
    display: flex;
    position: relative;
  }
  .result-field-el {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid black;
    padding: 4px;
    width: 14.4%;
    min-height: 40px;
  }
  .result-field-el-mini {
    width: 7.2%;
  }

  .result-field-name {
    width: 20%;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px;
    border: 1px solid black;
  }
  .result-field-data {
    width: 80%;
    flex: 1 1 0px;
    display: flex;
    flex-direction: column;
  }
  .result-field-mini {
    display: flex;
    justify-content: center;
    width: 100%;
    flex: 1 1 0px;
  }


</style>