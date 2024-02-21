<template>
  <NavComponent />
  <section class="section-about">
    <h2 class="text-center mb-4">الملف الشخصي</h2>
    <div class="img-profile">
      <img class="img-profile-item" src="../assets/person.jpg" />
    </div>
    <form class="content-form">
      <div class="mb-4 position-relative">
        <label class="label-content">إسم المستخدم</label>
        <input
          class="input-all input-content input-profile"
          value="احمد محمد"
          type="text"
        />
        <fa icon="user" class="icons-profile" />
      </div>
      <div class="position-relative">
        <label class="label-content">رقم الجوال</label>
        <input
          class="input-all input-content input-profile"
          placeholder="98768974312"
          type="number"
        />
        <FlagComponent />
        <fa icon="mobile-screen" class="icons-profile" />
      </div>
      <div class="mt-4 mb-4 position-relative">
        <label class="label-content">البريد الالكتروني</label>
        <input
          class="input-all input-content input-profile"
          value="ahmed@gmail.com"
          type="email"
        />
        <fa icon="envelope" class="icons-profile" />
      </div>
    </form>
  </section>
  <FooterComponent />
</template>

<script>
import $ from "jquery";
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import FlagComponent from "@/components/FlagComponent.vue";
export default {
  components: {
    NavComponent,
    FooterComponent,
    FlagComponent,
  },
  mounted() {
    $(".img-profile-item").prop("src", localStorage.getItem("img-profile"));
  },
};
</script>
