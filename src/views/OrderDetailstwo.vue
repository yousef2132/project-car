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
    <div class="content-block-elment">
      <div class="content-block">
        <span class="red">*</span>
        <h4 class="red">تم رفض هذا الطلب من منصة تم</h4>
      </div>
    </div>
    <DetailsComponent />
    <div class="button-mony">
      <div class="button-mony-box">
        <button
          @click="popupshow"
          class="button-content button-portfolio button-mony-item"
        >
          استلام
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
      <div @click="stopProp" class="popup-box popup-box-two gap-1">
        <div class="popup-box-code">
          <h5 class="text-center">كود التحقق</h5>
          <p class="color-trans text-center">
            برجاء ادخال كود التفعيل المرسل إليك على رقم جوالك
          </p>
          <form class="form-textarea form-code-details">
            <div class="box-code">
              <input class="input-all input-code" type="text" />
              <input class="input-all input-code" type="text" />
              <input class="input-all input-code" type="text" />
              <input class="input-all input-code" type="text" />
              <input class="input-all input-code" type="text" />
            </div>
            <div class="done-code-text code-text-details mt-3 mb-3">
              <h4>لم تستلم الكود بعد ؟</h4>
              <h4 class="text-color">اعد ارسال الكود</h4>
            </div>
            <button @click="buttonpopup" class="button-all-active">
              تاكيد
            </button>
          </form>
        </div>
        <div class="check-done-service">
          <div class="text-center">
            <fa class="check-edit-profile mb-3" icon="check" />
          </div>
          <h4 class="title-popup">تهانينا ! تم ارسال التقييم بنجاح</h4>
          <div class="center-elment mb-0 mt-4">
            <button @click="containue" class="button-all-active">
              تتبع طلبك
            </button>
          </div>
        </div>
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

<style scoped>
.done-money {
  display: block;
}
.button-mony {
  display: block;
}
.button-Service {
  display: none;
}
</style>

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
    containue() {
      $(".popup").fadeOut();
      $(".button-mony-item").hide();
      $(".done-money").hide();
      setTimeout(function () {
        $(".steppy .steppy-item:nth-child(3)").addClass("current");
        $(".steppy-progress-bar").css("width", "100%");
        $("#order-status").text("منتهي");
        $(".button-Service").show();
      }, 2000);
    },
    buttonpopup() {
      $(".popup-box-code").hide();
      $(".check-done-service").show();
    },
    popupshow(e) {
      e.stopPropagation();
      $(".popup").fadeIn();
    },
    Service(e) {
      e.stopPropagation();
      $(".popup-two").fadeIn();
      $(".check-done-service").hide();
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
    if (localStorage.getItem("steppy-two") === "current-content-two") {
      $(".done-money").hide();
      $(".wrapper-steppy").hide();
      $(".button-mony").hide();
      $(".content-block-elment").show();
    }
    $("body").click(function () {
      $(".popup").fadeOut(200);
    });
    $(".number").hide();
  },
};
</script>
