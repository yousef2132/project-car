<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
* {
  box-sizing: border-box;
}
:root {
  --min-color: #e09441;
}
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0 !important;
}
ul {
  list-style: none;
  padding: 0 !important;
  margin: 0 !important;
}
a {
  color: black !important;
  text-decoration: none !important;
}
body {
  direction: rtl;
}
.text-color {
  color: var(--min-color);
}
.background-active {
  background-color: var(--min-color);
}
.text-red {
  color: red !important;
}
.color-trans {
  color: #6f6f6fb7;
}
input:focus {
  outline: none;
}
.dropdown-menu li {
  border: 1px solid rgb(241 240 240);
}
.home-img-carousel {
  height: 600px;
}
.carousel-indicators [data-bs-target] {
  background-color: #c3c3c3 !important;
  opacity: 1 !important;
  width: 20px !important;
  height: 20px !important;
  border-radius: 50% !important;
}
.carousel-indicators .active {
  background-color: var(--min-color) !important;
  width: 47px !important;
  border-radius: 17px !important;
}
.carousel-indicators {
  margin-bottom: -3rem !important;
}
.center-elment {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}
.button-all {
  width: 200px;
  height: 40px;
  background-color: white;
  border: 2px solid var(--min-color);
  color: var(--min-color);
  border-radius: 7px;
  font-size: 20px;
}
.button-all-active {
  width: 160px;
  height: 40px;
  background-color: var(--min-color);
  border: none;
  color: white !important;
  border-radius: 7px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.buttons-home {
  margin-top: 6rem;
}
.active-button {
  background-color: var(--min-color) !important;
  color: white !important;
}
.content-form-home {
  width: 60%;
  margin: auto;
}
.select-all {
  width: 100%;
  height: 33px;
  padding-right: 10px;
  -webkit-appearance: none;
  border: 1px solid #cfcfcf;
  color: #9d9d9d;
}
select:focus {
  outline: none;
}
.select-content {
  position: relative;
}
.select-content::after {
  content: "";
  width: 7px;
  height: 7px;
  border: 2px solid #bfb8b8;
  border-top: none;
  border-left: none;
  position: absolute;
  top: 13px;
  left: 9px;
  transform: rotate(44deg);
}
.label-all {
  display: block;
  margin-bottom: 10px;
}
.red {
  color: red;
}
.input-all {
  width: 100%;
  height: 33px;
  border: 1px solid #cfcfcf;
  padding-right: 10px;
  border-radius: 5px;
}
.input-all::placeholder {
  font-size: 13px;
}
.input-all:valid {
  font-size: 13px;
}
.title-home {
  width: 75%;
  margin: auto;
}
.content-cars {
  width: 100%;
  height: 200px;
  border: 2px solid var(--min-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}
.car-icon {
  font-size: 50px;
  margin-bottom: 10px;
}
.cars-row {
  justify-content: center;
}
.donload-aplction {
  width: 100%;
  min-height: 400px;
  background-image: linear-gradient(to right, black, var(--min-color));
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}
.gogle-play {
  width: 200px;
  background-color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: end;
  border-radius: 10px;
}
.gogle-play-img {
  width: 80px;
  height: 60px;
}
.title-gogle {
  text-align: center;
  margin-bottom: 5px !important;
}
.gogle-play-content {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 30px;
}
.image-gogleplay {
  width: 100%;
  height: 300px;
}
footer {
  background-color: #282a29;
  padding: 40px;
}
.links-foot h5 {
  color: var(--min-color) !important;
  margin-bottom: 10px !important;
}
.links-foot a {
  color: var(--min-color) !important;
}
.links-foot li {
  color: var(--min-color);
  margin-bottom: 10px;
}
.img-footer {
  width: 200px;
  height: 100px;
}
.footer-bootom {
  background-color: var(--min-color);
  display: flex;
  display: flex;
  justify-content: space-evenly;
  padding: 15px;
}
.footer-bootom p {
  color: white;
  font-size: 17px;
}
.section-about {
  width: 1000px;
  padding: 20px;
  margin: auto;
  box-shadow: 0px 0px 5px 0px #c1bfbf;
  margin-top: 40px;
  margin-bottom: 40px;
  position: relative;
}
.about-text {
  margin-bottom: 10px !important;
  font-size: 28px;
  color: #6f6f6f;
}
.label-content {
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 15px;
}
.input-content {
  border-radius: 5px;
  height: 60px;
}
.select-content-us {
  position: absolute;
  left: 20px;
  bottom: 20px;
  border: none;
}
.button-content {
  width: 100%;
  background-color: var(--min-color);
  height: 50px;
  color: white !important;
  border: none;
  font-weight: bold;
  font-size: 23px;
  border-radius: 6px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-suda {
  width: 32px;
  height: 20px;
  position: absolute;
  left: 5.2rem;
  bottom: 19px;
}
.content-form {
  width: 80%;
  margin: auto;
}
.img-profile {
  display: flex;
  justify-content: center;
}
.img-profile-item {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.icons-profile {
  position: absolute;
  right: 16px;
  bottom: 22px;
  color: var(--min-color);
}
.input-profile {
  padding-right: 40px;
}
.links-seting-box {
  width: 100% !important;
  box-shadow: 0px 0px 5px 0px #c1bfbf;
  padding: 10px;
  position: relative;
  margin-bottom: 30px;
}
.text-seting {
  font-size: 18px !important;
}
.leftto-seating {
  width: 7px;
  height: 7px;
  border: 2px solid #bfb8b8;
  border-top: none;
  border-left: none;
  position: absolute;
  top: 21px;
  left: 17px;
  transform: rotate(133deg);
}
.links-seting-box-two {
  background-color: rgba(255, 0, 0, 0.137);
}
.img-edit-profile {
  width: fit-content;
  position: relative;
}
.input-edit-profile {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
}
.icon-square {
  position: absolute;
  left: -14px;
  top: 43px;
  background: var(--min-color);
  padding: 10px;
  border-radius: 50%;
  color: white;
}
.button-edit-profile {
  width: 300px;
  margin-top: 4rem;
}
.center-button {
  display: flex;
  justify-content: center;
}
.popup {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.267);
  display: none;
}
.popup-edit-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-box {
  width: 400px;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  position: relative;
}
.check-edit-profile {
  width: fit-content;
  padding: 10px;
  border: 2px solid var(--min-color);
  border-radius: 50%;
  color: var(--min-color);
}
.img-iphone-box {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  margin-top: 30px;
}
.img-iphone {
  width: 300px;
  height: 250px;
}
.eye-password-hidin {
  position: absolute;
  left: 20px;
  bottom: 20px;
  color: #6e6e6e;
  font-size: 18px;
  cursor: pointer;
}
.eye-password {
  position: absolute;
  left: 20px;
  bottom: 20px;
  color: #6e6e6e;
  font-size: 18px;
  cursor: pointer;
  display: none;
}
.title-all-forms {
  font-weight: 600;
  margin-top: 40px !important;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.input-code {
  width: 50px !important;
  height: 50px !important;
  padding-right: 24px !important;
}
.box-code {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.done-code-text {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 10px;
  opacity: 0.7;
}
.toggle .toglle-chekbox:checked[type="checkbox"] {
  background-color: var(--min-color) !important;
}
.toggle input[type="checkbox"] {
  position: relative;
  width: 43px;
  height: 22px;
  background-color: #b0abab;
  -webkit-appearance: none;
  border-radius: 20px;
  outline: none;
  transition: 0.3s;
  cursor: pointer;
}
.toggle .toglle-chekbox-2:checked[type="checkbox"]::before {
  left: 23px !important;
}
.toggle .toglle-chekbox-2[type="checkbox"]::before {
  content: "";
  position: absolute;
  left: 2px;
  width: 17px;
  bottom: 1px;
  height: 17px;
  background-color: white;
  border-radius: 50%;
  transform: scale(1.1);
  transition: 0.6s;
  z-index: 1;
  top: 2px;
}
.notifi-box {
  display: flex;
  justify-content: space-between;
}
.notifi-section {
  height: 41.4vh;
}
.icon-triangl {
  color: var(--min-color);
  font-size: 50px;
}
.text-delete-popup {
  font-size: 15px;
  color: rgb(159 153 153);
  text-align: center;
}
.button-delete-box {
  display: flex;
  gap: 10px;
}
.button-delete {
  background-color: rgba(255, 0, 0, 0.137);
  color: red !important;
}
.delete-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.done-delete {
  display: none;
}
.linkto-about {
  display: flex;
  align-items: center;
  gap: 10px;
}
.linkto-number {
  text-align: center;
  color: var(--min-color) !important;
  font-size: 27px;
}
.content-email {
  display: none;
}
.forgot-password {
  display: flex;
  justify-content: flex-end;
}
.forgot-link {
  font-size: 25px;
  color: #636363 !important;
  font-weight: 700;
}
.section-about-columns {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title-portfolio {
  color: #6f6f6f;
  font-size: 18px;
}
.button-portfolio {
  width: 70%;
}
.title-form {
  font-weight: bold;
  margin-bottom: 30px !important;
}
.buttons-requests button {
  width: 160px;
  height: 40px;
}
.img-requst {
  width: 100%;
  height: 90px;
  border-radius: 10px;
}
.requests-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.requests-item {
  font-size: 13px;
  color: #6f6f6fb7;
}
.requestes-content {
  padding: 20px;
  box-shadow: 0px 0px 4px 0px rgb(215 213 213);
  margin-bottom: 30px;
}
.steppy-progress-bar[data-v-bd8cdabb] {
  right: 0;
  border: 2px dashed var(--min-color);
  background: none !important;
}
.steppy-progress[data-v-bd8cdabb] {
  background: none !important;
  border: 2px dashed #e093413d;
}
.steppy-item.current .steppy-item-counter[data-v-bd8cdabb] {
  background-color: var(--min-color) !important;
}
.icon-success {
  fill: white !important;
  transform: scale(0.7) !important;
}
.steppy-item-counter .icon-success[data-v-bd8cdabb] {
  transform: scale(0.7) !important;
  opacity: 1 !important;
}
.steppy-item.success .steppy-item-counter[data-v-bd8cdabb] {
  background-color: var(--min-color) !important;
}
.steppy-item-counter[data-v-bd8cdabb] {
  background: white !important;
  border: 1px solid #dbd9d9 !important;
}
.steppy-item-title {
  font-size: 20px !important;
  font-weight: bold !important;
  color: #9d9d9d;
}
.steppy-title-active {
  color: black !important;
}
.controls,
.steppy-pane {
  display: none !important;
}
.wrapper-steppy[data-v-bd8cdabb] {
  padding: 1rem;
  width: 70%;
  margin: auto;
}
.done-money {
  width: 80%;
  margin: auto;
  background-color: #e7a76231;
  padding: 20px;
  margin-top: 40px;
  border-radius: 5px;
  display: none;
}
.done-money-box {
  display: flex;
  align-items: center;
  gap: 10px;
}
.icon-star-money {
  font-size: 10px;
  color: var(--min-color);
}
.details-box {
  box-shadow: 0px 0px 4px 0px rgb(215 213 213);
  background-color: white;
  margin-bottom: 20px;
  padding-top: 15px;
}
.details-content {
  background-color: rgb(247 247 247 / 58%);
  padding: 15px;
  margin-top: 60px;
}
.title-details {
  font-weight: bold;
  padding-right: 15px;
  margin-bottom: 15px !important;
}
#details-text-box {
  display: flex;
  justify-content: space-between;
  padding: 6px 15px;
}
#details-text-box p {
  color: #616060;
  font-size: 16px;
  font-weight: 700;
}
#details-text-box .item {
  color: #818080b4;
  font-size: 14px;
}
.detailes-item {
  background-color: #eee;
}
.detailes-yellow {
  background-color: #f0b4741f;
}
#paperto-map {
  color: red !important;
  font-size: 14px;
  display: none;
}
.paperto-map-show {
  display: block !important;
}
.button-mony {
  display: none;
}
.button-mony-box {
  display: flex;
  justify-content: center;
}
.popup-details-title {
  font-size: 18px;
  font-family: bold;
}
.popup-details-text {
  color: #a19c9c;
  font-size: 14px;
  margin-top: 3px !important;
}
.popup-details-box {
  width: 80%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e0934121;
  border-radius: 6px;
  gap: 10px;
}
.card-popup {
  font-size: 22px;
  color: var(--min-color);
}
.popup-details-item {
  display: flex;
  align-items: center;
  gap: 10px;
}
.check-detals {
  padding: 4px !important;
  font-size: 14px;
  border: 1px solid var(--min-color);
}
#back-detalis-popup {
  background-color: #f5f2f2;
}
.popup-box-two {
  width: 500px;
}
.popup-two {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.267);
  display: none;
}
.star-service {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
.star-service svg {
  font-size: 22px;
  color: #cfcfcf;
}
textarea:focus {
  outline: none;
}
.form-textarea {
  width: 90%;
  margin-top: 20px;
}
.textarea-all {
  padding-top: 10px;
  height: 100px;
}
.button-service-star {
  background-color: #b4b2b260;
  color: #726e6e !important;
}
.button-service-box {
  justify-content: center;
}
.popup-box-inhert {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.check-done-service {
  display: none;
  flex-direction: column;
  align-items: center;
}
.text-star {
  padding: 6px 15px;
}
.stars-order {
  padding-left: 15px;
}
.details-stars-box {
  display: none;
}
.code-text-details h4 {
  font-size: 13px;
}
.form-code-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content-block {
  width: 80%;
  display: flex;
  gap: 20px;
  background-color: rgba(252, 14, 14, 0.151);
  padding: 10px;
  margin: auto;
}
.content-block span {
  font-size: 27px;
  height: 30px;
}
.content-block-elment {
  display: none;
}
.img-car {
  width: 80%;
  height: 300px;
}
.detailes-trans {
  background-color: #d6dbe1;
}
.details-box-car {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
}
.box-star-car {
  display: flex;
  align-items: center;
  background-color: #eee;
  padding: 1px 4px;
  gap: 7px;
}
.box-star-car p {
  color: #7c7c7c;
  font-size: 14px;
}
.box-star-car svg {
  font-size: 11px;
}
.show-all-car {
  color: var(--min-color) !important;
  text-decoration: underline !important;
  font-weight: bold;
}
.evaluation-img {
  width: 80px;
  height: 65px;
  border-radius: 50%;
}
.evaluation-box {
  display: flex;
  padding-right: 10px;
  margin-top: 25px;
}
.evaluation-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.evaluation-content {
  padding: 0px 12px 10px 12px;
}
.section-evaluation {
  padding: 30px 0px;
}
.drop-down {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: 134px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;
  position: absolute;
  left: 2px;
  bottom: 9px;
  z-index: 2;
}
.arrow {
  font-size: 20px;
}
.wrapper {
  display: flex;
  gap: 00.5rem;
  align-items: center;
}
.img-select-flag {
  width: 32px;
  height: 20px;
}
.list {
  background-color: #fff;
  position: absolute;
  top: 45px;
  left: 0;
  border-radius: 0 0 5px 5px;
  box-shadow: 0px 4px 8px rgb(0, 0, 0, 0.333);
  cursor: pointer;
  width: 100%;
  display: none;
}
.list .item {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
}
.img-item {
  width: 32px;
  height: 20px;
}
.bottom-list {
  transform: rotate(46deg);
  left: 27px;
  top: 16px;
}
.icons-rental {
  position: absolute;
  left: 20px;
  bottom: 22px;
  color: #727272;
  font-size: 20px;
}
.input-rental {
  padding-right: 20px;
  border: 1px solid var(--min-color);
}
.add-license {
  width: 80px;
  height: 80px;
  border: 1px dashed var(--min-color);
  background-color: #e0934133;
  color: var(--min-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.input-license {
  width: 80px;
  height: 80px;
}
.add-license p {
  font-size: 12px;
}
.img-license {
  width: 80px;
  height: 80px;
  display: block;
}
.textarea-comments {
  height: 150px;
  padding-top: 15px;
}
.full-insurance {
  border: 1px solid #cfcfcf;
  padding: 15px;
}
.radio-insurance {
  width: 18px;
  height: 18px;
  border: 1px solid #979797;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.input-radio {
  display: none;
}
.radio-insurance svg {
  font-size: 10px;
  color: white;
  display: none;
}
.input-radio:checked + .radio-insurance {
  background-color: #333;
}
.input-radio:checked + .radio-insurance svg {
  display: block;
}
.input-radio:checked + .radio-insurance + .text-insurance {
  color: black;
}
.label-insurance {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}
.text-insurance {
  color: #6f6f6fb7;
}
#text-color {
  color: var(--min-color) !important;
}
.icons-rental-click {
  cursor: pointer;
}
.input-radio-time {
  display: none;
}
.radiotime-box {
  width: 80px;
  height: 30px;
  background-color: var(--min-color);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  cursor: pointer;
}
.input-radio-time:checked + .radiotime-box {
  background-color: #eee;
  color: #6f6f6f;
}
.form-radio {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
.button-radio-time {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 15px;
}
.input-rental-two {
  padding-right: 20px;
}
.foem-search-car {
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
}
.input-search {
  width: 70%;
  height: 50px;
}
.input-search::placeholder {
  font-size: 20px;
}
.rectangle-icon {
  font-size: 32px;
  background-color: var(--min-color);
  color: white;
  padding: 9px 7px;
  border-radius: 5px;
  cursor: pointer;
}
.luxury-box {
  box-shadow: 0px 0px 4px 0px rgb(215 213 213);
  padding: 15px;
  margin-bottom: 30px;
}
.img-luxury {
  width: 100%;
  height: 130px;
  border-radius: 5px;
}
.luxury-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
}
.item-honda {
  background-color: #f3bf87;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  position: relative;
  font-weight: bold;
}
.item-honda::after {
  content: "";
  position: absolute;
  left: -12px;
  top: 0;
  width: 13px;
  height: 100%;
  background-color: #f3bf87;
  border-radius: 15px 0px 0px 17px;
}
.item-honda::before {
  content: "";
  position: absolute;
  right: -12px;
  top: 0;
  width: 13px;
  height: 100%;
  background-color: #f3bf87;
  border-radius: 0px 15px 17px 0px;
}
.luxury-text {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.input-brand {
  display: none;
}
.brand-box {
  width: 15px;
  height: 15px;
  border: 1px solid #6f6f6fb7;
  display: flex;
  justify-content: center;
  align-items: center;
}
.label-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 50%;
  margin-bottom: 12px;
}
.brand-box svg {
  font-size: 10px;
  color: #6f6f6fb7;
  display: none;
}
.input-brand:checked + .brand-box svg {
  display: block;
}
.form-brand-box {
  width: 95%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-self: flex-start;
}
.title-brand {
  color: rgb(88, 88, 88);
  margin-bottom: 10px !important;
}
.slider {
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background-color: #ddd;
  position: relative;
}
.slider .progres {
  height: 5px;
  position: absolute;
  left: 25%;
  right: 25%;
  border-radius: 5px;
  background-color: var(--min-color);
}
.range-input {
  position: relative;
}
.range-input input {
  position: absolute;
  top: -5px;
  height: 5px;
  width: 100%;
  background: none;
  pointer-events: none;
  -webkit-appearance: none;
}
input[type="range"]::-webkit-slider-thumb {
  width: 17px;
  height: 17px;
  background-color: var(--min-color);
  border-radius: 50%;
  -webkit-appearance: none;
  pointer-events: auto;
  cursor: pointer;
}
input[type="range"]::-moz-range-thumb {
  width: 17px;
  height: 17px;
  border: none;
  background-color: var(--min-color);
  border-radius: 50%;
  -moz-appearance: none;
  pointer-events: auto;
}
.text-range,
.text-range-2 {
  position: absolute;
  top: 7px;
  font-size: 13px;
}
.text-range {
  left: 97px;
}
.text-range-2 {
  right: 97px;
}
.wrapper-range {
  width: 70%;
  margin-bottom: 3.5rem;
}
.exeit-poup {
  position: absolute;
  top: 25px;
  cursor: pointer;
  right: 32px;
}
.notifications-img {
  width: 75px;
  height: 45px;
}
.notifications-item {
  font-size: 13px;
  color: #9f9b9b;
}
.icon-trash {
  color: red;
  cursor: pointer;
  font-size: 20px;
}
.notifications {
  box-shadow: 0px 0px 5px 0px #c1bfbf;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 30px;
}
.button-trash {
  position: absolute;
  left: 24px;
  top: 35px;
  background: none;
  padding: 9px 10px;
  border: 1px solid red;
  border-radius: 5px;
  color: red;
  font-size: 15px;
}
.p-icon {
  transform: rotate(175deg);
}
.p-datepicker table {
  width: 100% !important;
}
.p-datepicker-group-container {
  width: 100% !important;
}
.p-datepicker-touch-ui,
.p-calendar .p-datepicker-touch-ui {
  min-width: 33vw;
}
.p-calendar {
  width: 100%;
}
.p-calendar {
  display: block;
}
.angle-left {
  color: var(--min-color);
}
.p-datepicker-calendar th {
  text-align: center;
}
.p-datepicker-calendar thead {
  background-color: var(--min-color);
}
@media (max-width: 1024px) {
  .section-about {
    width: 90%;
  }
}
@media (max-width: 992px) {
  .section-evaluation {
    padding: 30px 30px;
  }
  .content-form-home {
    width: 100%;
  }
  .content-form {
    width: 100%;
  }
  .select-content {
    margin-bottom: 20px;
  }
  .img-requst {
    height: 190px;
  }
  .requests-box {
    margin-top: 20px;
  }
  .img-footer {
    margin-bottom: 30px;
  }
  .links-foot {
    margin-bottom: 30px !important;
  }
  .image-gogleplay {
    width: 40%;
    margin-top: 40px;
    height: 200px;
  }
  .title-aplction {
    font-size: 20px !important;
  }
  .donload-aplction {
    padding: 20px;
  }
}
@media (max-width: 768px) {
  .img-luxury {
    margin-bottom: 20px;
    height: 200px;
  }
  .title-gogle {
    font-size: 12px;
  }
  .title-gogle-2 {
    font-size: 12px;
  }
  .gogle-play {
    width: 140px;
    justify-content: space-around;
  }
  .gogle-play-img {
    width: 40px;
    height: 40px;
  }
  .gogle-play-content {
    gap: 0px;
    justify-content: space-around;
  }
}
@media (max-width: 600px) {
  .img-iphone {
    width: 170px;
    height: 170px;
  }
  .popup-box {
    width: 80%;
  }
  .button-all-active {
    width: 124px;
    height: 40px;
    font-size: 16px;
  }
  .button-portfolio {
    width: 100%;
  }
  .buttons-requests {
    gap: 24px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }
  .button-trash {
    left: 6px;
    top: 27px;
    padding: 9px 6px;
    font-size: 10px;
  }
  .notif-title {
    font-size: 17px;
  }
  .request-title-box {
    font-size: 17px !important;
  }
  .wrapper-steppy[data-v-bd8cdabb] {
    width: 100%;
  }
  .steppy-item-counter[data-v-bd8cdabb] {
    height: 30px;
    width: 30px;
  }
  .home-img-carousel {
    height: 300px;
  }
  .button-all {
    width: 140px;
    height: 40px;
    font-size: 18px;
  }
}
@media (max-width: 500px) {
  .evaluation-img {
    width: 85px;
    height: 45px;
  }
  .selected {
    font-size: 13px;
  }
  .img-select-flag {
    width: 25px;
    height: 15px;
  }
  .img-item {
    width: 22px;
    height: 12px;
  }
  .text-flag {
    font-size: 13px;
  }
  .bottom-list {
    left: 18px;
    top: 13px;
  }
  .title-all-forms {
    font-size: 17px;
  }
  .input-code {
    width: 33px !important;
    height: 32px !important;
  }
  .notif-title {
    font-size: 14px;
  }
  .reqest-text-data {
    font-size: 15px !important;
  }
  .rquest-basket {
    font-size: 15px !important;
  }
  .rquest-show {
    font-size: 15px !important;
  }
  .angle-left {
    font-size: 15px !important;
  }
  .image-gogleplay {
    width: 40%;
    height: 140px;
  }
}
@media (max-width: 400px) {
  .gogle-play-content {
    justify-content: space-between;
  }
  .gogle-play {
    width: 127px;
  }
  .title-gogle {
    font-size: 10px;
  }
  .title-gogle-2 {
    font-size: 10px;
  }
  .donload-aplction {
    padding: 10px;
  }
}
</style>
