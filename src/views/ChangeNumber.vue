<template>
  <NavComponent />
  <section class="section-about">
    <h2 class="text-center mb-4">تغيير رقم الجوال</h2>
    <div class="img-iphone-box">
      <img class="img-iphone" src="../assets/imgiphone.jpg" />
      <h4 class="title-all-forms">
        برجاء ادخال كلمة المرور الحالية و رقم الجوال الجديد
      </h4>
      <form class="content-form">
        <div class="position-relative">
          <label class="label-content"
            >رقم الجوال <span class="red">*</span></label
          >
          <input
            class="input-all input-content input-profile"
            placeholder="برجاء ادخال رقم الجوال"
            type="number"
          />
          <FlagComponent />
          <fa icon="mobile-screen" class="icons-profile" />
        </div>
        <a
          href="http://localhost:8080/?#/ActivationcodeTwo"
          class="button-content"
          type="submit"
          >تاكيد</a
        >
      </form>
    </div>
  </section>
  <FooterComponent />
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import FlagComponent from "@/components/FlagComponent.vue";
export default {
  components: {
    NavComponent,
    FooterComponent,
    FlagComponent,
  },
};
</script>
