<template>
  <NavComponent :activelink="activelink" />
  <section class="section-about section-evaluation">
    <h2 class="title-form text-center mb-4">سيارات فاخره</h2>
    <form class="foem-search-car">
      <input
        placeholder="ابحث باسم السياره"
        class="input-all input-search"
        type="search"
      />
      <fa @click="luxurypopup" class="rectangle-icon" icon="rectangle-list" />
    </form>
    <section class="details-content">
      <div class="row">
        <div class="col-lg-6" v-for="student in 8" :key="student">
          <a href="http://localhost:8080/?#/CarDetails">
            <div class="luxury-box">
              <div class="row">
                <div class="col-lg-3 col-md-4">
                  <img class="img-luxury" src="../assets/pexels-car.jpg" />
                </div>
                <div class="col-lg-9 col-md-8">
                  <div class="luxury-item">
                    <h4>سيارة هوندا فاخرة</h4>
                    <span class="item-honda">هوندا</span>
                  </div>
                  <div
                    class="luxury-text"
                    v-for="rent in rents"
                    :key="rent.text"
                  >
                    <fa class="text-color" icon="landmark" />
                    <h5 class="color-trans">{{ rent.text }}</h5>
                    <p class="text-color">150 رس</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  </section>
  <FooterComponent />
  <div class="popup">
    <div class="popup-edit-content">
      <div @click="stopProp" class="popup-box popup-box-two">
        <span @click="buttondone" class="exeit-poup">x</span>
        <h5>فلتر</h5>
        <form class="form-brand">
          <h5 class="title-brand">الماركه</h5>
          <div class="form-brand-box">
            <label
              class="label-brand"
              v-for="brand in brands"
              :key="brand.name"
            >
              <input
                :checked="brand.checked"
                class="input-brand"
                type="checkbox"
              />
              <div class="brand-box">
                <fa icon="check" />
              </div>
              <p class="color-trans">{{ brand.name }}</p>
            </label>
          </div>
          <h5 class="title-brand">السعر</h5>
          <div class="wrapper-range">
            <div class="slider">
              <div class="progres"></div>
            </div>
            <div class="range-input">
              <span class="text-range">350رس</span>
              <span class="text-range-2">150رس</span>
              <input
                type="range"
                class="range-min"
                min="0"
                max="10000"
                value="2500"
                v-on:input="inputrange"
              />
              <input
                type="range"
                class="range-max"
                min="0"
                max="10000"
                value="7500"
                v-on:input="inputrange"
              />
            </div>
          </div>
          <div class="button-radio-time">
            <button type="submit" @click="buttondone" class="button-all-active">
              تاكيد
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  mounted() {
    let rangeInput = document.querySelectorAll(".range-input input");
    let progres = document.querySelector(".progres");
    let textrange = document.querySelector(".text-range");
    let textrange2 = document.querySelector(".text-range-2");
    let pricegap = 1000;
    rangeInput.forEach(function (input) {
      input.addEventListener("input", (e) => {
        let minval = parseInt(rangeInput[0].value);
        let maxval = parseInt(rangeInput[1].value);
        if (maxval - minval < pricegap) {
          if (e.target.className === "range-min") {
            rangeInput[0].value = maxval - pricegap;
          } else {
            rangeInput[1].value = minval + pricegap;
          }
          rangeInput[0].value = maxval - pricegap;
        } else {
          progres.style.right = (minval / rangeInput[0].max) * 100 + "%";
          textrange2.style.right = (minval / rangeInput[0].max) * 100 + "%";
          progres.style.left = 100 - (maxval / rangeInput[1].max) * 100 + "%";
          textrange.style.left = 100 - (maxval / rangeInput[1].max) * 100 + "%";
        }
      });
    });
  },
  components: {
    NavComponent,
    FooterComponent,
  },
  data() {
    return {
      brands: [
        {
          name: "هوندا",
          checked: "checked",
        },
        {
          name: "بنتلي",
        },
        {
          name: "مرسيدس بنز",
        },
        {
          name: "رولز رويس",
        },
        {
          name: "بي إم دبليو",
        },
        {
          name: "تسلا",
        },
        {
          name: "بوجاتي",
        },
        {
          name: "نيسان",
        },
      ],
      rents: [
        {
          text: "الايجار اليومي:",
        },
        {
          text: "الايجار الشهري:",
        },
        {
          text: "الايجار السنوي:",
        },
      ],
      activelink: "text-color",
    };
  },
  methods: {
    buttondone() {
      $(".popup").fadeOut();
    },
    luxurypopup() {
      $(".popup").fadeIn();
    },
  },
};
</script>

<style scoped>
.evaluation-box {
  box-shadow: 0px 0px 5px 0px #d7d7d7;
  padding: 17px;
}
</style>
