<template>
  <section class="details-content">
    <div class="row mt-5">
      <div class="col-lg-6" v-for="(st, i) in student" :key="i">
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
            <a href="" id="paperto-map" :class="stitem.classmap"
              ><fa icon="paper-plane" /> الرياض</a
            >
          </div>
        </div>
        <div class="details-box details-stars-box" :id="st.id">
          <div class="d-flex justify-content-between">
            <h5 class="title-details">تقييمك :</h5>
            <div class="stars-order">
              <fa class="color-trans" icon="star" />
              <fa class="text-color" icon="star" />
              <fa class="text-color" icon="star" />
              <fa class="text-color" icon="star" />
              <fa class="text-color" icon="star" />
            </div>
          </div>
          <p class="text-star color-trans">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from "jquery";
export default {
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
      student: [
        {
          title: "تفاصيل السيارة :",
          textall: [
            {
              text1: "اسم السياره",
              text2: "سياره هوندا الفاخره",
            },
            {
              text1: "ماركه السياره",
              text2: "هوندا",
              class: "detailes-item",
            },
            {
              text1: "موديل السياره",
              text2: "Ddd12",
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
          ],
        },
        {
          title: "الإجمالي :",
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
              text1: "اجمالي سعر التاجير",
              text2: "150.00 رس",
            },
            {
              text1: "رسوم السائق",
              text2: "160.00 رس",
              class: "detailes-item",
            },
            {
              text1: "ضريبه القيمه المضافه",
              text2: "10.00 رس",
            },
            {
              text1: "السعر الاجمالي",
              text2: "420.00 رس",
              class: "detailes-yellow",
            },
          ],
        },
        {
          title: "تفاصيل الحجز :",
          textall: [
            {
              text1: "حاله الطلب",
              text2: "انتظار الموافقه",
              id: "order-status",
            },
            {
              text1: "تاريخ الطلب",
              text2: "12/10/2023",
              class: "detailes-item",
            },
            {
              text1: "نوع التاجير",
              text2: "يومي",
            },
            {
              text1: "مده التاجير",
              text2: "2",
              class: "detailes-item",
            },
            {
              text1: "وقت الاستلام",
              text2: "7:30 pm",
            },
            {
              text1: "تاريخ الاستلام",
              text2: "13/10/2023",
              class: "detailes-item",
            },
            {
              text1: "وقت الارجاع",
              text2: "5:30 pm",
            },
            {
              text1: "تاريخ الارجاع",
              text2: "15/10/2023",
              class: "detailes-item",
            },
            {
              text1: "مكان الاستلام",
              classmap: "paperto-map-show",
            },
          ],
        },
        {
          title: "ملاحظات :",
          id: "details-stars-show",
          textall: [
            {
              text1: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    if (localStorage.getItem("steppy") === "current-content-1") {
      $("#order-status").text("انتظار الموافقه");
    }
    if (localStorage.getItem("steppy") === "current-content-2") {
      $("#order-status").text("قيد الدفع");
    }
    if (localStorage.getItem("steppy") === "current-content-3") {
      $("#order-status").text("حالي");
    }
    if (localStorage.getItem("steppy") === "current-content-4") {
      $("#order-status").text("منتهي");
    }
  },
};
</script>
