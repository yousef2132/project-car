<template>
  <NavComponent />
  <section class="section-about">
    <h2 class="title-form text-center mb-4">تغيير رقم الجوال</h2>
    <div class="img-iphone-box">
      <img class="img-iphone" src="../assets/imgiphone.jpg" />
      <h4 class="title-all-forms">
        برجاء ادخال كود التفعيل المرسل إليك عبر الواتس آب
      </h4>
      <form class="content-form">
        <div class="box-code">
          <input class="input-all input-code" type="text" />
          <input class="input-all input-code" type="text" />
          <input class="input-all input-code" type="text" />
          <input class="input-all input-code" type="text" />
          <input class="input-all input-code" type="text" />
        </div>
        <button @click="popupshow" class="button-content" type="submit">
          تاكيد
        </button>
        <div class="done-code-text">
          <h4>لم تستلم الكود بعد ؟</h4>
          <h4 class="text-color">اعد ارسال الكود</h4>
        </div>
      </form>
    </div>
  </section>
  <FooterComponent />
  <div class="popup">
    <div class="popup-edit-content">
      <div @click="stopProp" class="popup-box">
        <fa class="check-edit-profile" icon="check" />
        <h4 class="title-popup">تم تغيير رقم الجوال بنجاح</h4>
      </div>
    </div>
  </div>
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
  methods: {
    popupshow(e) {
      $(".popup").fadeIn(200);
      e.stopPropagation();
      setTimeout(function () {
        window.location.replace("http://localhost:8080/?#/SettingsVue");
      }, 3000);
    },
    stopProp(e) {
      e.stopPropagation();
    },
  },
  mounted() {
    $(".title-popup").text(localStorage.getItem("popup-code-email"));
    $(".title-form").text(localStorage.getItem("title-code-email"));
    $(".title-all-forms").text(localStorage.getItem("text-code-email"));
    $("body").click(function () {
      $(".popup").fadeOut(200);
    });
  },
};
</script>
