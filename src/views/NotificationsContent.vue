<template>
  <NavComponent />
  <section class="section-about section-evaluation">
    <h2 class="title-form text-center">الاشعارات</h2>
    <button @click="buttontrash" class="button-trash">
      <fa class="red" icon="trash" /> حذف الكل
    </button>
    <section class="content-form mt-5">
      <div class="notifications" v-for="not in notifs" :key="not.title">
        <div class="d-flex gap-3">
          <img class="notifications-img" src="../assets/person.jpg" />
          <div>
            <h4 class="notif-title fw-normal">{{ not.title }}</h4>
            <p class="notifications-item">منذ : 5 دقائق</p>
          </div>
        </div>
        <fa @click="trash" class="icon-trash" icon="trash" />
      </div>
    </section>
  </section>
  <FooterComponent />
</template>

<script>
import $ from "jquery";
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  methods: {
    buttontrash(e) {
      $(e.target).fadeOut();
      $(".content-form").fadeOut();
    },
    trash(e) {
      $(e.target).parent().parent().fadeOut();
    },
  },
  data() {
    return {
      notifs: [
        {
          title: "تم التسجيل بنجاح",
        },
        {
          title: "تم تأكيد عملية الدفع بنجاح",
        },
        {
          title: "تم تعديل البيانات الشخصية",
        },
        {
          title: "تمت الموافقة على طلب التأجير",
        },
        {
          title: "تم رفض طلبك",
        },
      ],
    };
  },
  components: {
    NavComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
.evaluation-box {
  box-shadow: 0px 0px 5px 0px #d7d7d7;
  padding: 17px;
}
</style>
