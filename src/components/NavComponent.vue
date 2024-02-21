<template>
  <header>
    <div class="header-top">
      <div class="container">
        <div class="header-top-box">
          <h5 class="text-white">أهلاً بك في موقع أميال</h5>
          <div class="language-box">
            <fa icon="globe" />
            <p>English</p>
          </div>
        </div>
      </div>
    </div>
    <div class="header-bootom">
      <div class="container">
        <div class="headerbotom-box">
          <fa @click="clickbars" class="icon-bars" icon="bars" />
          <a href="#">
            <img class="header-logo" src="../assets/logoo.webp" />
          </a>
          <div class="header-popup">
            <ul class="link-header">
              <li>
                <router-link to="/"
                  ><h5 :class="activelink">الرئيسية</h5></router-link
                >
              </li>
              <li>
                <router-link to="about"
                  ><h5 :class="activeabout">عن الموقع</h5></router-link
                >
              </li>
              <li>
                <router-link to="ConnectUs"
                  ><h5 :class="activecontent">تواصل معنا</h5></router-link
                >
              </li>
            </ul>
          </div>
          <div class="d-flex gap-5">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img class="img-dropdown" src="../assets/person.jpg" />
                <p>أحمد محمد</p>
                <span class="select-dropdown"></span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a
                    class="dropdown-item"
                    href="http://localhost:8080/#/ProfilePersonly"
                    >الملف الشخصي</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="http://localhost:8080/?#/SettingsVue"
                    >الاعدادت</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="http://localhost:8080/?#/PortfolioVue"
                    >المحفظة</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="http://localhost:8080/?#/MyRequests"
                    >طلباتي</a
                  >
                </li>
                <li>
                  <a class="dropdown-item text-red" href="#">تسجيل خروج</a>
                </li>
              </ul>
            </div>
            <div>
              <a
                href="http://localhost:8080/?#/NotificationsContent"
                class="link-bell"
              >
                <fa icon="bell" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
.header-top {
  background-color: var(--min-color);
}
.header-top-box {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.language-box {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
}
.header-bootom {
  background-color: black;
}
.headerbotom-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
}
.header-logo {
  width: 100px;
  height: 80px;
}
.link-header {
  display: flex;
  gap: 20px;
}
.link-header a {
  color: white !important;
}
.img-dropdown {
  width: 25px;
  height: 25px;
  border-radius: 4px;
}
.dropdown-toggle {
  display: flex !important;
  align-items: center;
  gap: 10px;
  background: none !important;
  border: none !important;
  position: relative;
}
.dropdown-item {
  text-align: center !important;
}
.dropdown-toggle::after {
  display: none !important;
}
.select-dropdown {
  width: 7px;
  height: 7px;
  border: 2px solid #bfb8b8;
  transform: rotate(229deg);
  border-top: none;
  border-left: none;
  position: absolute;
  top: 16px;
  left: -3px;
}
.dropdown-item:active {
  background: none !important;
}
.link-bell {
  width: 40px;
  height: 40px;
  background-color: var(--min-color);
  color: white !important;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
.link-bell svg {
  font-size: 20px;
}
.icon-bars {
  color: white;
  cursor: pointer;
  display: none;
}
.header-popup-show {
  display: block !important;
}
.dropdown-menu {
  transform: translate(-32px, 39px) !important;
}
@media (max-width: 992px) {
  .icon-bars {
    display: block;
  }
  .header-popup {
    display: none;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #d9a30261;
    z-index: 1;
  }
  .header-popup li {
    padding: 20px;
  }
  .link-header-show {
    position: absolute;
    right: 0;
    flex-direction: column;
    background: black;
    width: 200px;
    height: 100vh;
    top: 0;
    gap: 0px;
  }
  .header-popup-show {
    display: none !important;
  }
}
@media (max-width: 450px) {
  .header-logo {
    width: 50px;
    height: 50px;
  }
  .link-bell {
    width: 30px;
    height: 30px;
  }
}
</style>

<script>
import $ from "jquery";
export default {
  props: ["activelink", "activeabout", "activecontent"],
  methods: {
    clickbars() {
      $(".link-header").addClass("link-header-show");
      $(".header-popup").fadeIn(500);
      $(".header-popup").removeClass("header-popup-show");
    },
  },
  mounted() {
    $("body").click(function () {
      $(".header-popup").fadeOut(200);
      $(".header-popup").addClass("header-popup-show");
    });
    $(".icon-bars").click(function (e) {
      e.stopPropagation();
    });
    $(".link-header").click(function (e) {
      e.stopPropagation();
    });
  },
};
</script>
