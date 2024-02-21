<template>
  <NavComponent />
  <section class="section-about p-0 pt-4 pb-4">
    <h2 class="title-form text-center">تفاصيل الطلب</h2>
    <Vue3MultiStepper
      v-model:step="step"
      :tabs="tabs"
      primaryColor1="#79031D"
      primaryColor2="#F2E6E8"
      backText="Go Back"
      nextText="Next"
      doneText="Finish"
      :loading="loading"
      :finalize="handleFormSubmission"
      :validateStep="validateStep"
    >
      <template #1></template>
      <template #2></template>
      <template #3></template>
      <template #4></template>
    </Vue3MultiStepper>
    <div class="done-money">
      <div class="done-money-box">
        <fa class="icon-star-money" icon="star" />
        <div class="d-flex gap-1">
          <h5 class="text-color">تهانينا !</h5>
          <h5>تم الدفع بنجاح</h5>
        </div>
      </div>
    </div>
    <DetailsComponent />
    <div class="button-mony">
      <div class="button-mony-box">
        <button
          @click="popupshow"
          class="button-content button-portfolio button-mony-item"
        >
          ادفع الان
        </button>
        <button
          @click="Service"
          class="button-content button-portfolio button-Service"
        >
          تقييم الخدمه
        </button>
      </div>
    </div>
  </section>
  <div class="popup">
    <div class="popup-edit-content">
      <div @click="stopProp" class="popup-box popup-box-two">
        <h5>طريقه الدفع</h5>
        <div
          :id="pop.id"
          class="popup-details-box"
          v-for="(pop, i) in popup"
          :key="i"
        >
          <div class="popup-details-item">
            <fa class="card-popup" icon="credit-card" />
            <div class="popup-details=text">
              <h5 class="popup-details-title">{{ pop.text1 }}</h5>
              <h6 class="popup-details-text">{{ pop.text2 }}</h6>
            </div>
          </div>
          <fa class="check-edit-profile check-detals" icon="check" />
        </div>
        <button @click="buttonpopup" class="button-all-active">تاكيد</button>
      </div>
    </div>
  </div>
  <div class="popup-two">
    <div class="popup-edit-content">
      <div @click="stopProp" class="popup-box popup-box-two gap-0">
        <div class="popup-box-inhert">
          <h5>قيم الخدمة</h5>
          <p class="color-trans">برجاء وضع تعليقك على التجربة</p>
          <div class="star-service">
            <fa icon="star" />
            <fa icon="star" />
            <fa icon="star" />
            <fa icon="star" />
            <fa icon="star" />
          </div>
          <form class="form-textarea">
            <textarea
              class="textarea-all input-all"
              placeholder="اكتب تعليقك"
            ></textarea>
            <div class="button-delete-box button-service-box mt-3">
              <button
                type="submit"
                @click="buttondone"
                class="button-all-active"
              >
                ارسال التقييم
              </button>
              <button
                @click="btndelet"
                class="button-all-active button-service-star"
              >
                ليس الان
              </button>
            </div>
          </form>
        </div>
        <div class="check-done-service">
          <div class="text-center">
            <fa class="check-edit-profile mb-3" icon="check" />
          </div>
          <h4 class="title-popup">تهانينا ! تم ارسال التقييم بنجاح</h4>
        </div>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import $ from "jquery";
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import DetailsComponent from "@/components/DetailsComponent.vue";
import { computed } from "vue";
import { Vue3MultiStepper } from "vue3-multi-stepper";
export default {
  components: {
    NavComponent,
    FooterComponent,
    Vue3MultiStepper,
    DetailsComponent,
  },
  methods: {
    popupshow(e) {
      e.stopPropagation();
      $(".popup").fadeIn();
    },
    Service(e) {
      e.stopPropagation();
      $(".popup-two").fadeIn();
    },
    btndelet() {
      $(".popup-two").fadeOut();
    },
    buttondone() {
      $(".popup-box-inhert").hide();
      $(".check-done-service").show();
      setTimeout(function () {
        $(".popup-two").fadeOut();
        $(".button-mony").hide();
        $("#details-stars-show").fadeIn();
      }, 2000);
    },
    buttonpopup() {
      $(".popup").fadeOut();
      $(".steppy .steppy-item:nth-child(3)").addClass("current");
      $(".steppy .steppy-item:nth-child(4)").addClass("current");
      $(".steppy-progress-bar").css("width", "66.6666%");
      $(".steppy .steppy-item:nth-child(2)")
        .find(".steppy-item-title")
        .addClass("steppy-title-active");
      $(".steppy .steppy-item:nth-child(3)")
        .find(".steppy-item-title")
        .addClass("steppy-title-active");
      $(".steppy .steppy-item:nth-child(4)")
        .find(".steppy-item-title")
        .addClass("steppy-title-active");
      $(".steppy .steppy-item:nth-child(5)")
        .find(".steppy-item-title")
        .removeClass("steppy-title-active");
      $("#order-status").text("حالي");

      $(".done-money").show();
      $(".button-mony").hide();
      setTimeout(function () {
        $(".done-money").hide();
        $(".steppy .steppy-item:nth-child(3)").addClass("current");
        $(".steppy .steppy-item:nth-child(4)").addClass("current");
        $(".steppy .steppy-item:nth-child(5)").addClass("current");
        $(".steppy-progress-bar").css("width", "100%");
        $(".steppy-item-title").addClass("steppy-title-active");
        $(".button-mony").show();
        $(".button-mony-item").hide();
        $(".button-Service").show();
        $("#order-status").text("منتهي");
      }, 3000);
    },
    stopProp(e) {
      e.stopPropagation();
    },
    btnhome(e) {
      $(e.target).addClass("active-button");
      $(e.target).siblings().removeClass("active-button");
      $(".reqest-text-data").text($(e.target).data("target"));
    },
  },
  data() {
    return {
      popup: [
        {
          text1: "الدفع إلكترونيا",
          text2: "يمكنك الدفع إلكتروينا",
        },
        {
          text1: "المحفظة",
          text2: "يمكنك الدفع عند طريق المحفظة",
          id: "back-detalis-popup",
        },
      ],
      step: 1,
      loading: false,
      tabs: computed(() => {
        return [
          {
            title: "الانتظار",
            iconSuccess: null,
            isValid: true,
          },
          {
            title: "دفع",
            iconSuccess: null,
            isValid: true,
          },
          {
            title: "حالي",
            iconSuccess: null,
            isValid: true,
          },
          {
            title: "منتهي",
            iconSuccess: null,
            isValid: true,
          },
        ];
      }),
    };
  },
  mounted() {
    $("body").click(function () {
      $(".popup").fadeOut(200);
    });
    $(".number").hide();
    if (localStorage.getItem("steppy") === "current-content-1") {
      $(".steppy .steppy-item:nth-child(2)").addClass("current");
      $(".steppy .steppy-item:nth-child(3)").removeClass("current");
      $(".steppy .steppy-item:nth-child(4)").removeClass("current");
      $(".steppy .steppy-item:nth-child(5)").removeClass("current");
      $(".steppy .steppy-item:nth-child(2)")
        .find(".steppy-item-title")
        .addClass("steppy-title-active");
      $(".steppy .steppy-item:nth-child(3)")
        .find(".steppy-item-title")
        .removeClass("steppy-title-active");
      $(".steppy .steppy-item:nth-child(4)")
        .find(".steppy-item-title")
        .removeClass("steppy-title-active");
      $(".steppy .steppy-item:nth-child(5)")
        .find(".steppy-item-title")
        .removeClass("steppy-title-active");
    }
    if (localStorage.getItem("steppy") === "current-content-2") {
      $(".steppy .steppy-item:nth-child(3)").addClass("current");
      $(".steppy-progress-bar").css("width", "33.3333%");
      $(".steppy .steppy-item:nth-child(2)")
        .find(".steppy-item-title")
        .addClass("steppy-title-active");
      $(".steppy .steppy-item:nth-child(3)")
        .find(".steppy-item-title")
        .addClass("steppy-title-active");
      $(".steppy .steppy-item:nth-child(4)")
        .find(".steppy-item-title")
        .removeClass("steppy-title-active");
      $(".steppy .steppy-item:nth-child(5)")
        .find(".steppy-item-title")
        .removeClass("steppy-title-active");
      $(".button-mony").show();
      $(".button-Service").hide();
    }
    if (localStorage.getItem("steppy") === "current-content-3") {
      $(".steppy .steppy-item:nth-child(3)").addClass("current");
      $(".steppy .steppy-item:nth-child(4)").addClass("current");
      $(".steppy-progress-bar").css("width", "66.6666%");
      $(".steppy .steppy-item:nth-child(2)")
        .find(".steppy-item-title")
        .addClass("steppy-title-active");
      $(".steppy .steppy-item:nth-child(3)")
        .find(".steppy-item-title")
        .addClass("steppy-title-active");
      $(".steppy .steppy-item:nth-child(4)")
        .find(".steppy-item-title")
        .addClass("steppy-title-active");
      $(".steppy .steppy-item:nth-child(5)")
        .find(".steppy-item-title")
        .removeClass("steppy-title-active");

      $(".done-money").show();
      setTimeout(function () {
        $(".done-money").hide();
        $(".steppy .steppy-item:nth-child(3)").addClass("current");
        $(".steppy .steppy-item:nth-child(4)").addClass("current");
        $(".steppy .steppy-item:nth-child(5)").addClass("current");
        $(".steppy-progress-bar").css("width", "100%");
        $(".steppy-item-title").addClass("steppy-title-active");
        $(".button-mony").show();
        $(".button-mony-item").hide();
        $(".button-Service").show();
        $("#order-status").text("منتهي");
      }, 3000);
    }
    if (localStorage.getItem("steppy") === "current-content-4") {
      $(".steppy .steppy-item:nth-child(3)").addClass("current");
      $(".steppy .steppy-item:nth-child(4)").addClass("current");
      $(".steppy .steppy-item:nth-child(5)").addClass("current");
      $(".steppy-progress-bar").css("width", "100%");
      $(".steppy-item-title").addClass("steppy-title-active");
      $(".button-mony").show();
      $(".button-mony-item").hide();
      $(".button-Service").show();
    }
  },
};
</script>
