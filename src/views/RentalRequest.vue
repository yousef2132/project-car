<template>
  <NavComponent />
  <section class="section-about">
    <h2 class="text-center mb-4">طلب تأجير</h2>
    <form class="content-form">
      <div class="position-relative">
        <fa icon="calendar-days" class="icons-rental-click icons-rental" />
        <Calendar v-model="date" touchUI />
      </div>
      <div class="position-relative mt-4">
        <label class="label-content">
          وقت الاستلام <span class="red">*</span></label
        >
        <input
          class="input-all input-content input-rental-two"
          placeholder="الرجاء ادخال وقت الاستلام"
          type="text"
          v-model="inputtime"
        />
        <fa
          @click="clocktime"
          icon="clock"
          class="icons-rental-click icons-rental"
        />
      </div>
      <div class="position-relative calendar-back mt-4">
        <fa icon="calendar-days" class="icons-rental-click icons-rental" />
        <Calendar class="calendartwo" v-model="date" touchUI />
      </div>
      <div class="position-relative mt-4">
        <label class="label-content">
          وقت الاستلام <span class="red">*</span></label
        >
        <input
          class="input-all input-content input-rental input-rental-two"
          placeholder="الرجاء ادخال وقت الاستلام"
          type="text"
          v-model="inputtime2"
        />
        <fa
          @click="clocktim2"
          icon="clock"
          class="icons-rental-click icons-rental"
        />
      </div>
      <div class="position-relative mt-4">
        <label class="label-content">مكان الاستلام</label>
        <input
          class="input-all input-content input-rental"
          placeholder="جدة,الصواري,الشمال"
          type="number"
        />
        <fa icon="location-dot" class="icons-rental" />
      </div>
      <div class="position-relative mt-4">
        <label class="label-content">مكان الارجاع</label>
        <input
          class="input-all input-content input-rental"
          placeholder="جدة,الصواري,الشمال"
          type="number"
        />
        <fa icon="location-dot" class="icons-rental" />
      </div>
      <div class="img-edit-profile mt-4">
        <div class="add-license">
          <fa icon="cloud-arrow-down" />
          <p>ارفاق الصوره</p>
        </div>
        <input
          ref="fileInput"
          @change="pickfile"
          class="input-edit-profile input-license"
          type="file"
        />
        <div class="mt-3">
          <label class="label-content mb-2">
            صوره الرخصه <span class="red">*</span></label
          >
          <img class="img-license" src="../assets/pexels-car.jpg" />
        </div>
      </div>
      <div class="position-relative mt-4 mb-4">
        <label class="label-content">تاريخ الارجاع</label>
        <textarea
          placeholder="اكتب ملاحظاتك على الطلب"
          class="input-all textarea-comments"
        ></textarea>
      </div>
      <div class="full-insurance">
        <h5 class="fw-bolder mb-3">التامين الشامل :</h5>
        <h5>هل تريد تامين شامل ؟</h5>
        <div class="d-flex gap-4">
          <label class="label-insurance">
            <input
              checked
              class="input-radio"
              value="yes"
              type="radio"
              name="radio"
            />
            <div class="radio-insurance">
              <fa icon="check" />
            </div>
            <h6 class="text-insurance">نعم</h6>
          </label>
          <label class="label-insurance">
            <input
              class="input-radio input-radio-no"
              name="radio"
              type="radio"
              value="no"
            />
            <div class="radio-insurance">
              <fa icon="check" />
            </div>
            <h6 class="text-insurance">لا</h6>
          </label>
        </div>
        <div class="mt-4" v-for="(st, i) in student" :key="i">
          <div class="details-box">
            <h5 class="title-details">{{ st.title }}</h5>
            <div
              id="details-text-box"
              :class="stitem.class"
              v-for="(stitem, i) in st.textall"
              :key="i"
            >
              <p>{{ stitem.text1 }}</p>
              <p :id="stitem.id" class="item">{{ stitem.text2 }}</p>
            </div>
          </div>
        </div>
      </div>
      <button @click="popupshow" class="button-content">ارسال الطلب</button>
    </form>
  </section>
  <FooterComponent />
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
        <a
          href="http://localhost:8080/?#/OrderDetailstwo"
          class="button-all-active"
        >
          ادفع الان
        </a>
      </div>
    </div>
  </div>
  <div class="popup-two">
    <div class="popup-edit-content">
      <div @click="stopProp" class="popup-box popup-box-two gap-0">
        <h5 class="mb-4">وقت الاستلام</h5>
        <form>
          <div class="form-radio">
            <label v-for="radio in radios" :key="radio.id">
              <input
                :checked="radio.checked"
                :value="radio.id"
                class="input-radio-time"
                type="radio"
                name="radiotime"
              />
              <div class="radiotime-box">{{ radio.id }}</div>
            </label>
          </div>
          <div class="button-radio-time">
            <button type="submit" @click="buttondone" class="button-all-active">
              تاكيد
            </button>
            <button
              @click="btndelet"
              class="button-all-active button-service-star"
            >
              رجوع
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import "primevue/resources/themes/aura-light-green/theme.css";
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  data() {
    return {
      date: null,
      inputtime: "",
      inputtime2: "",
      radios: [
        {
          id: "2:00 pm",
          checked: "checked",
        },
        {
          id: "3:00 pm",
        },
        {
          id: "4:00 am",
        },
        {
          id: "5:00 pm",
        },
        {
          id: "6:00 pm",
        },
        {
          id: "7:00 pm",
        },
        {
          id: "8:00 pm",
        },
        {
          id: "9:00 pm",
        },
        {
          id: "11:00 pm",
        },
        {
          id: "12:00 am",
        },
      ],
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
      activelink: "text-color",
      student: [
        {
          title: "تفاصيل السيارة :",
          textall: [
            {
              text1: "الايجار اليومي",
              text2: "150.00 رس",
            },
            {
              text1: "عدد ايام التاجير",
              text2: "2 يوم",
              class: "detailes-item",
            },
            {
              text1: "اجمالي سعر التاجيل",
              text2: "300 رس",
            },
            {
              text1: "سنه الصنع",
              text2: "2019",
              class: "detailes-item",
            },
            {
              text1: "السائق",
              text2: "بسائق",
            },
            {
              text1: "سنه الصنع",
              text2: "2019",
              class: "detailes-item",
            },
            {
              text1: "اجمالي سعر التاجيل",
              text2: "300 رس",
            },
            {
              text1: "السعر الاجمالي",
              text2: "400 رس",
              class: "detailes-item",
              id: "text-color",
            },
          ],
        },
      ],
    };
  },
  components: {
    NavComponent,
    FooterComponent,
  },
  methods: {
    buttondone(e) {
      $(".popup-two").fadeOut();
      e.preventDefault();
      if (localStorage.getItem("input-time") === "time1") {
        this.inputtime = $(".input-radio-time:checked").next().text();
      }
      if (localStorage.getItem("input-time") === "time2") {
        this.inputtime2 = $(".input-radio-time:checked").next().text();
      }
    },
    btndelet() {
      $(".popup-two").fadeOut();
    },
    clocktime() {
      $(".popup-two").fadeIn();
      localStorage.setItem("input-time", "time1");
    },
    clocktim2() {
      $(".popup-two").fadeIn();
      localStorage.setItem("input-time", "time2");
    },
    popupshow(e) {
      e.stopPropagation();
      $(".popup").fadeIn();
    },
    stopProp(e) {
      e.stopPropagation();
    },
    pickfile() {
      let input = this.$refs.fileInput;
      let file = input.files;
      let previewImage = "";
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          previewImage = e.target.result;
          $(".img-license").prop("src", previewImage);
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
    },
  },
  mounted() {
    $(".calendartwo").find(".p-inputtext").addClass("input-rental");
    $(".p-inputtext").before(`<label class="label-content">
          تاريخ الاستلام <span class="red">*</span></label
        >`);
    $(".p-inputtext").addClass("input-all");
    $(".p-inputtext").addClass("input-content");
    $(".input-radio").change(function () {
      if ($(this).val() == "no") {
        $(".details-box #details-text-box:nth-child(7)").hide();
        $(".details-box #details-text-box:nth-child(8)").hide();
        $(".title-details .steppy-item:nth-child(2)");
      } else if ($(this).val() == "yes") {
        $(".details-box #details-text-box:nth-child(7)").show();
        $(".details-box #details-text-box:nth-child(8)").show();
      }
    });
    $("body").click(function () {
      $(".popup").fadeOut();
    });
  },
};
</script>
