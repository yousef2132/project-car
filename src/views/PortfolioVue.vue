<template>
  <NavComponent />
  <section class="section-about section-about-columns">
    <h2 class="title-form">المحفظه</h2>
    <div class="img-iphone-box">
      <img class="img-iphone" src="../assets/visa-card.png" />
    </div>
    <div>
      <h5 class="title-portfolio">رصيدك الحالى</h5>
      <h3>500.00</h3>
      <h6 class="text-center">ريال سعودى</h6>
    </div>
    <button class="button-content button-portfolio">شحن رصيد</button>
  </section>
  <FooterComponent />
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: {
    NavComponent,
    FooterComponent,
  },
};
</script>
