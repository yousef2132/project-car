<template>
  <NavComponent :activecontent="activecontent" />
  <section class="section-about">
    <h2 class="text-center mb-4">تواصل معنا</h2>
    <form class="content-form">
      <div class="mb-4">
        <label class="label-content">إسم المستخدم</label>
        <input
          class="input-all input-content"
          placeholder="الرجاء ادخال إسم المستخدم"
          type="text"
        />
      </div>
      <div class="position-relative">
        <label class="label-content">رقم الجوال</label>
        <input
          class="input-all input-content"
          placeholder="برجاء ادخال رقم الجوال"
          type="text"
        />
        <FlagComponent />
      </div>
      <div class="mt-4 mb-4">
        <label class="label-content">البريد الالكتروني</label>
        <input
          class="input-all input-content"
          placeholder="برجاء ادخال البريد الالكتروني"
          type="email"
        />
      </div>
      <div class="mt-4 mb-4">
        <label class="label-content">الرسالة</label>
        <textarea
          class="input-all textarea-all"
          placeholder="برجاء كتابة الرساله"
          type="text"
        ></textarea>
      </div>
      <button class="button-content" type="submit">ارسال</button>
    </form>
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
  data() {
    return {
      activecontent: "text-color",
    };
  },
};
</script>
