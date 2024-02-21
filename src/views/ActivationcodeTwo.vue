<template>
  <NavCreateaccount />
  <section class="section-about">
    <h2 class="title-form text-center mb-4">كود التفعيل</h2>
    <div class="img-iphone-box">
      <img class="img-iphone" src="../assets/imgiphone.jpg" />
      <h4 class="title-all-forms">
        برجاء ادخال كود التفعيل المرسل إليك عبر الواتس آب
      </h4>
      <form class="content-form">
        <div class="box-code">
          <input class="input-all input-code" type="number" />
          <input class="input-all input-code" type="number" />
          <input class="input-all input-code" type="number" />
          <input class="input-all input-code" type="number" />
          <input class="input-all input-code" type="number" />
        </div>
        <a href="" class="button-content" type="submit"> تاكيد </a>
        <div class="done-code-text">
          <h4>لم تستلم الكود بعد ؟</h4>
          <h4 class="text-color">اعد ارسال الكود</h4>
        </div>
        <div class="text-center mt-3">
          <a class="linkto-number" href="http://localhost:8080/?#/ChangeNumber"
            >تغيير رقم الجوال</a
          >
        </div>
      </form>
    </div>
  </section>
  <FooterComponent />
</template>

<script>
import NavCreateaccount from "@/components/NavCreateaccount.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: {
    NavCreateaccount,
    FooterComponent,
  },
};
</script>
