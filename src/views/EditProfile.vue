<template>
  <NavComponent />
  <section class="section-about">
    <h2 class="text-center mb-4">تعديل الملف الشخصي</h2>
    <form class="content-form">
      <div class="img-profile">
        <div class="img-edit-profile">
          <img class="img-profile-item" src="../assets/person.jpg" />
          <input
            ref="fileInput"
            @change="pickfile"
            class="input-edit-profile"
            type="file"
          />
          <fa class="icon-square" icon="pen-to-square" />
        </div>
      </div>
      <div class="mb-4 position-relative">
        <label class="label-content">إسم المستخدم</label>
        <input
          class="input-all input-content input-profile"
          placeholder="الرجاء ادخال إسم المستخدم"
          type="text"
        />
        <fa icon="user" class="icons-profile" />
      </div>
      <div class="center-button">
        <button
          @click="popupshow"
          class="button-content button-edit-profile"
          type="submit"
        >
          حفظ التغييرات
        </button>
      </div>
    </form>
  </section>
  <FooterComponent />
  <div class="popup">
    <div class="popup-edit-content">
      <div @click="stopProp" class="popup-box">
        <fa class="check-edit-profile" icon="check" />
        <h4>تم حفظ التعديلات بنجاح</h4>
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
    popupshow(e) {
      $(".popup").fadeIn(200);
      e.stopPropagation();
      setTimeout(function () {
        window.location.replace("http://localhost:8080/?#/SettingsVue");
      }, 3000);
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
          $(".img-profile-item").prop("src", previewImage);
          localStorage.setItem(
            "img-profile",
            $(".img-profile-item").prop("src")
          );
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
    },
  },
  mounted() {
    $("body").click(function () {
      $(".popup").fadeOut(200);
    });
    $(".img-profile-item").prop("src", localStorage.getItem("img-profile"));
  },
};
</script>
