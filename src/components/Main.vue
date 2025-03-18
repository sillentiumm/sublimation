
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
      <div class="main-calc-flex">
        <input 
          type="file" 
          id="inp"
          accept=".jpg, .jpeg, .png, .svg, .TIFF"
          @change="downloadImg"
        />
      </div>
      <img v-if="image" :src="image" alt="" class="main-calc-img">
      <div class="main-calc-logo">
        <img src="../assets/logo.png" alt="">
      </div>
    </div>

    <div class="main-field">
      <div class="main-field-flex">
        <div class="main-field-name bg-main">Наименование</div>
        <div class="main-field-data">
          <div class="main-field-mini">
            <div class="main-field-el main-field-el-mini bg-main">Толщина</div>
            <div class="main-field-el main-field-el-mini bg-main">Кол-во</div>
            <div class="main-field-el bg-main">Цена за 1 м², ₽</div>
            <div class="main-field-el main-field-el-mini bg-main">Площадь м²</div>
            <div class="main-field-el main-field-el-mini bg-main">Стоимость, ₽</div>
            <!-- <div class="main-field-el bg-main">Цена за ед, ₽(профиль) </div> -->
            <!-- <div class="main-field-el main-field-el-mini bg-main">Кол-во</div> -->
            <!-- <div class="main-field-el bg-main">Итоговая стоимость, ₽</div> -->
            <div class="main-field-el main-field-el-mini bg-main"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-field">
      <div v-for="obj in data" class="main-field-flex" >
        <div class="main-field-name">{{ obj.name }} </div>
        <div class="main-field-data">
          <div v-for="el in obj.payload" class="main-field-mini">
            <div class="main-field-el main-field-el-mini">{{ el.depth }}</div>
            <div class="main-field-el main-field-el-mini">
              <input v-model="el.count" class="main-field-input" type="number">
            </div>
            <div class="main-field-el  bg-price">{{ el.priceSquareMeter }}</div>
            <div class="main-field-el main-field-el-mini bg-secondary">{{ parseInt(width * height * 1000) / 1000 }}</div>
            <div class="main-field-el main-field-el-mini bg-price">{{ Math.ceil(el.priceSquareMeter * width * height * el.count) }}</div>
            <!-- <div class="main-field-el">{{ el.priceProfile }}</div> -->
            <!-- <div class="main-field-el main-field-el-mini">
              <input v-model="el.countProfile" class="main-field-input" type="number">
            </div> -->
            <!-- <div class="main-field-el bg-price">{{ Math.ceil(el.priceSquareMeter * width * height * el.count + el.priceProfile * el.countProfile) }}</div> -->
            <div class="main-field-el main-field-el-mini"> 
              <input type="checkbox" v-model="el.active" class="main-field-checkbox">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-result">
      <button @click="addToCheck" class="main-result-btn" style="margin-right: 16px;">Добавить в счет</button>
      <button @click="goToResult" class="main-result-btn">Сформировать КП</button>
    </div>
      
  </div>
</template>

<script>

import { ref, reactive, onMounted } from 'vue'
import { useStore } from "../stores/store.js"
import { useRouter } from 'vue-router'

export default {

  setup() {
    const store = useStore()
    const router = useRouter()

    const data = reactive([...store.data])
    const width = ref(store.width)
    const height = ref(store.height)
    const result = reactive([])
    const image = ref(null);
    let picture = null
    let globalResult = null
    const file = reactive([])

    function addToCheck() {
      const file = {
        width: '',
        height: '',
        picture: '',
        data: {
          name: '',
          payload: ''
        }
      }
      data.forEach(el => {
        el.payload.forEach(miniEl => {
          if(miniEl.active == true) {
            // console.log(88, miniEl)
            const idx = result.findIndex(res => res.name == el.name)
            if(idx !== -1) {
              result[idx].payload.push(miniEl)
            }
            else {
              // const datafile = {name: el.name, width: width.value, height: height.value, payload: [miniEl]}
              const datafile = {name: el.name, payload: [miniEl]}
              result.push(datafile)
            }
          }
        })
      })

      globalResult = { width: width.value, height: height.value, data: [...result], picture: picture }

      // globalResult = [...result]
      result.length = 0
      store.result = [...store.result, globalResult]
      console.log(store.result)

      resetData()
    }

    function resetData() {
      data.forEach(el => {
        el.payload.forEach(miniEl => {
          width.value = 0 
          height.value = 0
          if(picture) picture = null
          if(image.value) image.value = null
          if(miniEl.active) miniEl.active = !miniEl.active
          // if(miniEl.count !== 1) miniEl.count = 1
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        })
      })
    }

    function goToResult() {
      router.push({ name: 'result' })
    }

    const downloadImg = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        image.value = e.target.result;
        picture = image.value
      };
      reader.readAsDataURL(file);
    };

    return {store, data, width, height, result, addToCheck, goToResult, downloadImg, image }
  }
}

</script>

<style scoped>
  .main {
    margin-top: 32px;
    margin-bottom: 32px;
    margin-left: 12px;
    margin-right: 12px;
  }
  .main-calc {
    /* width: 90%; */
    width: 860px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    /* align-items: center; */
    position: relative;
    margin: 0 auto;
    margin-bottom: 32px;
  }
  .main-calc-flex {
    display: flex;
    flex-direction: column;
    margin-right: 24px;
    font-size: 18px;
  }
  .main-calc-img {
    max-width: 100px;
    max-height: 100px;
  }
  .main-calc-logo {
    position: absolute;
    bottom: -16px;
    left: 12px;
  }
  .main-calc-logo img {
    width: 54px;
    height: 54px;
  }
  .main-field {
    width: 90%;
    width: 860px;
    margin: 0 auto;
  }
  .main-field-flex {
    display: flex;
    justify-content: center;
  }
  .main-field-mini {
    display: flex;
    flex: 1 1 0px;
  }
  .main-field-el {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid black;
    padding: 4px;
    width: 32%;
    min-height: 42px;
  }
  .main-field-el-mini {
    width: 17%;
  }
  .main-field-name {
    width: 20%;
    width: 40%;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px;
    border: 1px solid black;
  }
  .main-field-data {
    width: 30%;
    width: 60%;
    display: flex;
    flex-direction: column;
  }
  .main-field-input {
    height: 100%;
    width: 100%;
    padding-left: 14px;
    border: none;
    text-align: center;
  }
  .main-field-input:focus {
    outline: none;
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
    font-size: 18px;
  }


</style>

