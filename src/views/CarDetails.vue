<template>
  <NavComponent :activelink="activelink" />
  <section class="section-about section-evaluation">
    <h2 class="title-form text-center mb-4">تفاصيل السيارة</h2>
    <h4 class="text-center fw-bolder">سيارة هوندا فاخرة</h4>
    <div class="d-flex justify-content-center">
      <img class="img-car" src="../assets/pexels-car.jpg" />
    </div>
    <section class="details-content">
      <div class="row">
        <div class="col-lg-6" v-for="(st, i) in student" :key="i">
          <div class="details-box">
            <h5 class="title-details">{{ st.title }}</h5>
            <div
              id="details-text-box"
              :class="stitem.class"
              v-for="(stitem, i) in st.textall"
              :key="i"
            >
              <p>{{ stitem.text1 }}</p>
              <p :id="stitem.id" class="item">{{ stitem.text2 }}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="details-box">
            <div class="details-box-car">
              <h5 class="title-details p-0 m-0">تقييمات السيارة</h5>
              <div class="d-flex gap-3">
                <div class="box-star-car">
                  <fa class="text-color" icon="star" />
                  <p class="text-star-car">4.5</p>
                </div>
                <a
                  class="show-all-car"
                  href="http://localhost:8080/#/CardEvaluation"
                  >عرض الكل</a
                >
              </div>
            </div>
            <EvaluationCar />
            <EvaluationCar />
          </div>
        </div>
      </div>
    </section>
    <div class="button-mony-box">
      <a class="button-content button-portfolio" href="">طلب تاجير</a>
    </div>
  </section>
  <FooterComponent />
</template>

<script>
import EvaluationCar from "@/components/EvaluationCar.vue";
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: {
    NavComponent,
    FooterComponent,
    EvaluationCar,
  },
  data() {
    return {
      activelink: "text-color",
      student: [
        {
          title: "تفاصيل السيارة :",
          textall: [
            {
              text1: "اسم السياره",
              text2: "سياره هوندا الفاخره",
            },
            {
              text1: "ماركه السياره",
              text2: "هوندا",
              class: "detailes-item",
            },
            {
              text1: "موديل السياره",
              text2: "Ddd12",
            },
            {
              text1: "سنه الصنع",
              text2: "2019",
              class: "detailes-yellow",
            },
            {
              text1: "السائق",
              text2: "بسائق",
              class: "detailes-trans",
            },
            {
              text1: "موديل السياره",
              text2: "Ddd12",
              class: "detailes-yellow",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.evaluation-box {
  box-shadow: none;
  padding-right: 10px;
}
</style>
