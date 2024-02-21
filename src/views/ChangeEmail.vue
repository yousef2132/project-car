<template>
  <NavComponent />
  <section class="section-about">
    <h2 class="text-center mb-4">تغيير البريد الالكتروني</h2>
    <div class="img-iphone-box">
      <img class="img-iphone" src="../assets/imgiphone.jpg" />
      <h4 class="title-all-forms">
        برجاء ادخال كلمة المرور الحالية و البريد الالكتروني الجديد
      </h4>
      <form class="content-form">
        <div class="mb-4 position-relative">
          <label class="label-content"
            >كلمة المرور <span class="red">*</span></label
          >
          <input
            class="input-all input-content input-profile input-pass"
            placeholder="الرجاء ادخال إسم المستخدم"
            type="password"
          />
          <fa icon="lock" class="icons-profile" />
          <fa @click="eyeshow" class="eye-password-hidin" icon="eye-slash" />
          <fa @click="eyehidden" class="eye-password" icon="eye" />
        </div>
        <div class="mb-4 position-relative">
          <label class="label-content"
            >البريد الالكتروني الجديد <span class="red">*</span></label
          >
          <input
            class="input-all input-content input-profile input-pass"
            placeholder="الرجاء ادخال إسم المستخدم"
            type="password"
          />
          <fa icon="envelope" class="icons-profile" />
        </div>
        <a
          @click="codestorage"
          href="http://localhost:8080/?#/ActivationCode"
          class="button-content"
          type="submit"
          >استمرار</a
        >
      </form>
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
  methods: {
    eyeshow(e) {
      $(e.target).hide();
      $(e.target).siblings(".eye-password").show();
      $(e.target).siblings(".input-pass").prop("type", "text");
    },
    eyehidden(e) {
      $(e.target).hide();
      $(e.target).siblings(".eye-password-hidin").show();
      $(e.target).siblings(".input-pass").prop("type", "password");
    },
    codestorage() {
      localStorage.setItem(
        "popup-code-email",
        "تم تغييرالبريد الالكتروني بنجاح"
      );
      localStorage.setItem("title-code-email", "كود التفعيل");
      localStorage.setItem(
        "text-code-email",
        "برجاء ادخال كود التفعيل المرسل إليك عبر البريد الالكتروني"
      );
      $(".title-form").text(localStorage.getItem("title-code-email"));
      $(".title-all-forms").text(localStorage.getItem("text-code-email"));
    },
  },
};
</script>
