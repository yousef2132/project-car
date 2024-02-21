<template>
  <NavComponent :activelink="activelink" />
  <section class="section-about section-evaluation">
    <h2 class="title-form text-center mb-4">تقييمات السيارة</h2>
    <div class="button-mony-box">
      <div class="box-star-car">
        <fa class="text-color" icon="star" />
        <p class="text-star-car">4.5</p>
      </div>
    </div>
    <section class="details-content mt-5">
      <div class="row">
        <div class="col-lg-6" v-for="sudent in 4" :key="sudent">
          <EvaluationCar />
        </div>
      </div>
    </section>
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
    };
  },
};
</script>

<style scoped>
.evaluation-box {
  box-shadow: 0px 0px 5px 0px #d7d7d7;
  padding: 17px;
}
</style>
