<template>
  <NavCreateaccount />
  <section class="section-about">
    <h2 class="text-center mb-4">انشاء حساب</h2>
    <div class="img-profile">
      <div class="img-edit-profile">
        <img class="img-profile-item" src="../assets/user.webp" />
        <input
          ref="fileInput"
          @change="pickfile"
          class="input-edit-profile"
          type="file"
        />
        <fa class="icon-square" icon="pen-to-square" />
      </div>
    </div>
    <form class="content-form">
      <div class="mb-4 position-relative">
        <label class="label-content"
          >اسم المستخدم <span class="red">*</span></label
        >
        <input
          class="input-all input-content input-profile"
          placeholder="الرجاء ادخال إسم المستخدم"
          type="text"
        />
        <fa icon="user" class="icons-profile" />
      </div>
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
      <div class="mt-4 mb-4 position-relative">
        <label class="label-content">
          البريد الالكتروني <span class="red">*</span></label
        >
        <input
          class="input-all input-content input-profile"
          placeholder="برجاء ادخال البريد الالكتروني"
          type="email"
        />
        <fa icon="envelope" class="icons-profile" />
      </div>
      <div class="mb-4 position-relative">
        <label class="label-content"
          >كلمه المرور <span class="red">*</span></label
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
          >تاكيد كلمه المرور <span class="red">*</span></label
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
      <a href="http://localhost:8080/?#/about" class="linkto-about">
        <input class="checkbox-linkto-about" type="checkbox" />
        <h5>الموافقة على الشروط و الأحكام</h5>
      </a>
      <a
        @click="imgprofile"
        href="http://localhost:8080/?#/ActivationcodeTwo"
        class="button-content"
        type="submit"
        >تاكيد</a
      >
      <a href="http://localhost:8080/?#/LoginVue" class="done-code-text">
        <h4>لديك حساب بالفعل ؟</h4>
        <h4 class="text-color">تسجيل دخول</h4>
      </a>
    </form>
  </section>
  <FooterComponent />
</template>

<script>
import $ from "jquery";
import NavCreateaccount from "@/components/NavCreateaccount.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import FlagComponent from "@/components/FlagComponent.vue";
export default {
  components: {
    NavCreateaccount,
    FooterComponent,
    FlagComponent,
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
    pickfile() {
      let input = this.$refs.fileInput;
      let file = input.files;
      let previewImage = "";
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          previewImage = e.target.result;
          $(".img-profile-item").prop("src", previewImage);
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
    },
    imgprofile() {
      localStorage.setItem("img-profile", $(".img-profile-item").prop("src"));
    },
  },
};
</script>
