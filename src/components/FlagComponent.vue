<template>
  <div class="drop-down" @click="dropdown">
    <div class="wrapper">
      <img class="img-select-flag" src="../assets/suda.jpg" />
      <div class="selected">sudia</div>
    </div>
    <span class="leftto-seating bottom-list"></span>
    <div class="list" @click="list">
      <div class="item">
        <img class="img-item" src="../assets/suda.jpg" />
        <div class="text-flag">sudia</div>
      </div>
      <div class="item">
        <img class="img-item" src="../assets/egypt.webp" />
        <div class="text-flag">egypt</div>
      </div>
      <div class="item">
        <img class="img-item" src="../assets/Palestine.png" />
        <div class="text-flag">Palestine</div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  methods: {
    dropdown() {
      $(".list").toggle();
    },
    list(e) {
      $(".img-select-flag").prop(
        "src",
        $(e.target).find(".img-item").prop("src")
      );
      $(".selected").text($(e.target).find(".text-flag").text());
    },
  },
};
</script>
