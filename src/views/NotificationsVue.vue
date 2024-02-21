<template>
  <NavComponent />
  <section class="section-about notifi-section">
    <h2 class="text-center mb-4">اعدادات الاشعارات</h2>
    <div class="content-form">
      <div class="links-seting-box notifi-box">
        <p class="text-seting">تفعيل الاشعارات</p>
        <div class="toggle">
          <input
            type="checkbox"
            checked
            class="toglle-chekbox toglle-chekbox-2"
          />
        </div>
      </div>
    </div>
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
