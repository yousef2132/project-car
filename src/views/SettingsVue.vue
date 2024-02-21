<template>
  <NavComponent />
  <section class="section-about">
    <h2 class="text-center mb-4">الاعدادات</h2>
    <div class="content-form">
      <a href="http://localhost:8080/?#/EditProfile">
        <div class="links-seting-box">
          <p class="text-seting">تعديل الملف الشخصي</p>
          <span class="leftto-seating"></span>
        </div>
      </a>
      <a href="http://localhost:8080/?#/MobileNumber">
        <div class="links-seting-box">
          <p class="text-seting">تغيير رقم الجوال</p>
          <span class="leftto-seating"></span>
        </div>
      </a>
      <a href="http://localhost:8080/?#/ChangeEmail">
        <div class="links-seting-box">
          <p class="text-seting">تغيير البريد الالكتروني</p>
          <span class="leftto-seating"></span>
        </div>
      </a>
      <a href="http://localhost:8080/?#/ChangePassword">
        <div class="links-seting-box">
          <p class="text-seting">تغيير كلمة المرور</p>
          <span class="leftto-seating"></span>
        </div>
      </a>
      <a href="http://localhost:8080/?#/NotificationsVue">
        <div class="links-seting-box">
          <p class="text-seting">اعدادات الاشعارات</p>
          <span class="leftto-seating"></span>
        </div>
      </a>
      <a href="" @click="deleateclick">
        <div class="links-seting-box links-seting-box-two">
          <p class="text-seting">حذف الحساب</p>
          <span class="leftto-seating"></span>
        </div>
      </a>
    </div>
  </section>
  <FooterComponent />
  <div class="popup">
    <div class="popup-edit-content">
      <div @click="stopProp" class="popup-box">
        <div class="delete-content">
          <fa class="icon-triangl" icon="triangle-exclamation" />
          <h4>هل أنت متأكد من حذف الحساب ؟</h4>
          <p class="text-delete-popup">
            في حالة حذف القسم سيتم حذف كافة البيانات الخاصه بالفرع بالإضافة الى
            حذف المنتجات
          </p>
          <div class="button-delete-box">
            <button @click="buttonno" class="button-all-active">تراجع</button>
            <button @click="btndelet" class="button-all-active button-delete">
              حذف
            </button>
          </div>
        </div>
        <div class="done-delete">
          <div @click="stopProp" class="popup-box">
            <fa class="check-edit-profile" icon="check" />
            <h4 class="title-popup">تم حذف الحساب</h4>
            <a
              href="http://localhost:8080/?#/CreateAccount"
              class="button-all-active"
              >إنشاء حساب</a
            >
          </div>
        </div>
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
    buttonno() {
      $(".popup").fadeOut();
    },
    btndelet() {
      $(".delete-content").hide();
      $(".done-delete").show();
      $(".popup-box").css("padding", "15px");
    },
    deleateclick(e) {
      e.preventDefault();
      e.preventDefault();
      $(".popup").fadeIn();
    },
    stopProp(e) {
      e.stopPropagation();
    },
  },
};
</script>
