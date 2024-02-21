<template>
  <NavComponent />
  <section class="section-about">
    <h2 class="title-form text-center">طلباتي</h2>
    <div class="center-elment buttons-requests">
      <button
        data-target="انتظار الموافقه"
        @click="btnhome"
        class="button-all active-button button-requst-localstorage-1"
      >
        قيد الانتظار
      </button>
      <button
        data-target="قيد الدفع"
        @click="btnhome"
        class="button-all button-requst-localstorage-2"
      >
        قيد الدفع
      </button>
      <button
        data-target="طلب حالي"
        @click="btnhome"
        class="button-all button-requst-localstorage-3"
      >
        حالية
      </button>
      <button
        data-target="طلب منتهي"
        @click="btnhome"
        class="button-all button-requst-localstorage-4"
      >
        منتهية
      </button>
    </div>
    <div class="row">
      <div
        class="col-lg-6 col-md-6 request-storage"
        v-for="sudent in 4"
        :key="sudent"
      >
        <a class="link-order" href="http://localhost:8080/?#/OrderDetails">
          <div class="requestes-content">
            <div class="row">
              <div class="col-lg-3">
                <img class="img-requst" src="../assets/carirequst.jpg" />
              </div>
              <div class="col-lg-9">
                <div class="requests-box">
                  <h5 class="request-title-box">رقم الطلب : #12354</h5>
                  <p class="requests-item">منذ 1 ساعة</p>
                </div>
                <h5 class="color-trans mt-2 mb-2">سيارة هوندا فاخرة</h5>
                <div>
                  <div class="requests-box">
                    <div class="d-flex align-items-center gap-1">
                      <h5 class="color-trans d-flex gap-1 rquest-basket">
                        <fa icon="basket-shopping" /> الحاله :
                      </h5>
                      <h5 class="reqest-text-data text-color">
                        انتظار الموافقه
                      </h5>
                    </div>
                    <div class="d-flex gap-2 align-items-center">
                      <h5 class="color-trans rquest-show">عرض المزيد</h5>
                      <fa class="angle-left" icon="angle-left" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
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
    btnhome(e) {
      $(e.target).addClass("active-button");
      $(e.target).siblings().removeClass("active-button");
      $(".reqest-text-data").text($(e.target).data("target"));
      if ($(e.target).hasClass("button-requst-localstorage-1")) {
        localStorage.setItem("steppy", "current-content-1");
      } else if ($(e.target).hasClass("button-requst-localstorage-2")) {
        localStorage.setItem("steppy", "current-content-2");
      } else if ($(e.target).hasClass("button-requst-localstorage-3")) {
        localStorage.setItem("steppy", "current-content-3");
      } else if ($(e.target).hasClass("button-requst-localstorage-4")) {
        localStorage.setItem("steppy", "current-content-4");
      }
      if ($(".button-requst-localstorage-1").hasClass("active-button")) {
        $(".link-order").prop("href", "http://localhost:8080/?#/OrderDetails");
        $(".request-storage:nth-child(2)")
          .find(".reqest-text-data")
          .removeClass("red");
        $(".request-storage:nth-child(4)")
          .find(".reqest-text-data")
          .removeClass("red");
      }
      if ($(".button-requst-localstorage-2").hasClass("active-button")) {
        $(".link-order").prop("href", "http://localhost:8080/?#/OrderDetails");
        $(".request-storage:nth-child(2)")
          .find(".reqest-text-data")
          .removeClass("red");
        $(".request-storage:nth-child(4)")
          .find(".reqest-text-data")
          .removeClass("red");
      }
      if ($(".button-requst-localstorage-3").hasClass("active-button")) {
        $(".request-storage:nth-child(2)")
          .find(".link-order")
          .prop("href", "http://localhost:8080/?#/OrderDetailstwo");
        $(".request-storage:nth-child(3)")
          .find(".link-order")
          .prop("href", "http://localhost:8080/?#/OrderDetailstwo");
        $(".request-storage:nth-child(4)")
          .find(".link-order")
          .prop("href", "http://localhost:8080/?#/OrderDetailstwo");
        $(".request-storage:nth-child(2)")
          .find(".reqest-text-data")
          .removeClass("red");
        $(".request-storage:nth-child(4)")
          .find(".reqest-text-data")
          .removeClass("red");
        localStorage.removeItem("steppy-two");
      }
      if ($(".button-requst-localstorage-4").hasClass("active-button")) {
        $(".request-storage:nth-child(2)")
          .find(".link-order")
          .prop("href", "http://localhost:8080/?#/OrderDetailstwo");
        $(".request-storage:nth-child(4)")
          .find(".link-order")
          .prop("href", "http://localhost:8080/?#/OrderDetailstwo");

        $(".request-storage:nth-child(2)")
          .find(".reqest-text-data")
          .text("طلب مرفوض");
        $(".request-storage:nth-child(4)")
          .find(".reqest-text-data")
          .text("طلب مرفوض");
        $(".request-storage:nth-child(2)")
          .find(".reqest-text-data")
          .addClass("red");
        $(".request-storage:nth-child(4)")
          .find(".reqest-text-data")
          .addClass("red");
        localStorage.setItem("steppy-two", "current-content-two");
      }
    },
  },
  mounted() {
    localStorage.setItem("steppy", "current-content-1");
  },
};
</script>
