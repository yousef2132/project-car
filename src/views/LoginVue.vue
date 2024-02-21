<template>
  <NavCreateaccount />
  <section class="section-about">
    <h2 class="text-center mb-4">تسجيل دخول</h2>
    <div class="img-iphone-box">
      <div class="buttons-home mt-0">
        <div class="center-elment">
          <button
            @click="btnhome"
            class="button-all button-number active-button"
          >
            رقم الجوال
          </button>
          <button @click="btnhome" class="button-all button-email">
            البريد الالكتروني
          </button>
        </div>
      </div>
      <form class="content-form">
        <div class="position-relative content-number">
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
        <div class="mb-4 position-relative content-email">
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
        <div class="mt-4 position-relative">
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
        <div class="mt-4 forgot-password">
          <a class="forgot-link" href="http://localhost:8080/?#/RecoveryPassord"
            >هل نسيت كلمة المرور؟</a
          >
        </div>
        <a href="" class="button-content" type="submit">تسجيل دخول</a>
        <a href="http://localhost:8080/?#/CreateAccount" class="done-code-text">
          <h4>ليس لديك حساب ؟</h4>
          <h4 class="text-color">انشاء حساب</h4>
        </a>
      </form>
    </div>
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
    btnhome(e) {
      $(e.target).addClass("active-button");
      $(e.target).siblings().removeClass("active-button");
      if ($(".button-email").hasClass("active-button")) {
        $(".content-number").hide();
        $(".content-email").show();
      } else {
        $(".content-email").hide();
        $(".content-number").show();
      }
    },
  },
};
</script>
