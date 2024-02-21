<template>
  <NavComponent :activelink="activelink" />
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          class="d-block w-100 home-img-carousel"
          src="../assets/pexels-car.jpg"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100 home-img-carousel"
          src="../assets/pexels-car.jpg"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100 home-img-carousel"
          src="../assets/pexels-car.jpg"
        />
      </div>
    </div>
  </div>
  <div class="container">
    <div class="buttons-home">
      <div class="center-elment">
        <button @click="btnhome" class="button-all active-button">
          بدون سائق
        </button>
        <button @click="btnhome" class="button-all">بسائق</button>
      </div>
    </div>
  </div>
  <div class="content-form-home mt-5">
    <form class="container">
      <div class="row">
        <div class="col-lg-6">
          <label class="label-all"
            >نوع التأجير <span class="red">*</span></label
          >
          <div class="select-content">
            <select class="select-all">
              <option value="">يومي</option>
              <option value="">شهري</option>
              <option value="">سنوي</option>
            </select>
          </div>
        </div>
        <div class="col-lg-6">
          <label class="label-all"
            >مده التأجير <span class="red">*</span></label
          >
          <input class="input-all" placeholder="ادخل مده الايجار" type="text" />
        </div>
      </div>
    </form>
  </div>
  <div class="title-home mt-5 mb-5">
    <h2>اختر فئه السياره</h2>
  </div>
  <div class="content-form-home mb-5">
    <div class="container">
      <div class="row cars-row">
        <div
          class="col-lg-4 col-md-4 col-sm-4"
          v-for="(arr, i) in arraycar"
          :key="i"
        >
          <div class="content-cars">
            <fa class="car-icon" icon="car-side" />
            <h5>{{ arr.text }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="donload-aplction">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h2 class="text-white title-aplction">
            هذا النص هو مثال لنص يمكن ان يستخدم هذا النص هو مثال لنص يمكن ان
            يستخدم في نفس المساحة في نفس المساحة
          </h2>
          <div class="gogle-play-content">
            <a href="" class="gogle-play" v-for="(arr, i) in arryplay" :key="i">
              <div>
                <h6 class="title-gogle">GET IT ON</h6>
                <h6 class="title-gogle-2">{{ arr.text }}</h6>
              </div>
              <img class="gogle-play-img" src="../assets/gogle-play.webp" />
            </a>
          </div>
        </div>
        <div class="col-lg-6">
          <img class="image-gogleplay" src="../assets/logoo.webp" />
        </div>
      </div>
    </div>
  </section>
  <FooterComponent />
</template>

<script>
import $ from "jquery";
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: {
    NavComponent,
    FooterComponent,
  },
  data() {
    return {
      activelink: "text-color",
      arryplay: [
        {
          text: "Google Play",
        },
        {
          text: "App Store",
        },
      ],
      arraycar: [
        {
          text: "سيارات فاخرة",
        },
        {
          text: "سيارات سيدان",
        },
        {
          text: "سيارات عائلية",
        },
        {
          text: "سيارات اقتصاديه",
        },
        {
          text: "SUV سيارات",
        },
      ],
    };
  },
  methods: {
    btnhome(e) {
      $(e.target).addClass("active-button");
      $(e.target).siblings().removeClass("active-button");
    },
  },
};
</script>
