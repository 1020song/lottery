<template>
  <div class="container">
    <button type="button"
            class="v-btn v-btn--outline v-btn--depressed v-btn--small theme--light primary--text">
      <div class="v-btn__content">
        <router-link to='/lotteryHall'>
        <i aria-hidden="true"
           class="v-icon material-icons theme--light"
           style="font-size: 16px;">add</i>
        继续选号
        </router-link>
      </div>
    </button>
    <div class="printer"></div>
    <div class="print-paper">
      <div class="v-list v-list--two-line theme--light">
        <div class="mydiv">
          <div class="v-list__tile v-list__tile--avatar theme--light">
            <div class="v-list__tile__action">
              <i aria-hidden="true"
                 class="v-icon grey--text text--lighten-1 material-icons theme--light">delete</i></div>
            <div class="v-list__tile__content">
              <div class="v-list__tile__title red--text text--darken-4">
                5

                8
              </div>
              <div class="v-list__tile__sub-title">
                <small>
                  和值
                  2注
                  4模拟金
                </small></div>
            </div>
          </div>
        </div>
      </div>
      <div class="print-paper-side"></div>
    </div>
    <div class="footer">
      <div class="footer_l">
        <span class="footer_l_span1">共4注</span> &nbsp;
        <span class="footer_l_span2">8模拟金</span>
      </div>
      <div class="footer_r">
        <span>投注</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
</style>
<style scoped>
.v-btn.v-btn--outline,
.v-btn.v-btn--outline:hover {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.v-btn.v-btn--outline {
  background: transparent !important;
  border: 1px solid;
}
.theme--light.v-btn {
  color: rgba(0, 0, 0, 0.87);
}
[type="reset"],
[type="submit"],
button,
html [type="button"] {
  -webkit-appearance: button;
}
.primary--text {
  color: #1976d2 !important;
  caret-color: #1976d2 !important;
}
.v-btn--small {
  font-size: 13px;
  height: 0.4375rem /* 28/64 */;
  padding: 0 8px;
}
.v-btn {
  padding: 0 16px;
}
.v-btn {
  user-select: none;
  box-align: center;
  align-items: center;
  border-radius: 2px;
  display: inline-flex;
  flex: 0 0 auto;
  font-size: 14px;
  font-weight: 500;
  height: 36px;
  justify-content: center;
  margin: 6px 8px;
  min-width: 88px;
  outline: 0;
  position: relative;
  user-select: none;
  vertical-align: middle;
}
button {
  overflow: visible;
}
.v-btn:before {
  border-radius: inherit;
  color: inherit;
  content: "";
  height: 100%;
  left: 0;
  opacity: 0.12;
  position: absolute;
  top: 0;
  width: 100%;
}
:after,
:before {
  text-decoration: inherit;
  vertical-align: inherit;
}
*,
:after,
:before {
  box-sizing: inherit;
}
.v-btn__content {
  align-items: center;
  border-radius: inherit;
  color: inherit;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  white-space: nowrap;
  width: inherit;
}
.v-btn:not(.v-btn--disabled):not(.v-btn--floating):not(.v-btn--icon)
  .v-btn__content
  .v-icon {
  transition: none;
}
.v-btn .v-btn__content .v-icon {
  color: inherit;
}
.theme--light.v-icon {
  color: rgba(0, 0, 0, 0.54);
}
.v-icon {
  align-items: center;
  display: inline-flex;
  font-size: 24px;
  justify-content: center;
  line-height: 1;
  vertical-align: text-bottom;
}
.material-icons {
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
}
.container {
  width: 10rem /* 640/64 */;
  background-color: #f3f3f3;
  height: 100%;
}
.printer {
  height: 16px;
  width: 100%;
  background-image: url("../../public/img/bg1.jpg");
  background-repeat: repeat-x;
  background-size: auto 100%;
  position: relative;
}
.printer:before {
  left: 0;
  background-image: url("../../public/img/bg2.jpg");
}
.printer:after {
  right: 0;
  background-image: url("../../public/img/bg3.jpg");
  background-position: 100%;
}
.printer:after,
.printer:before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 100%;
  position: absolute;
  top: 0;
  background-size: auto 100%;
  background-repeat: no-repeat;
}
.print-paper {
  padding: 0 6px;
}
.theme--light.v-list {
  background: #fff;
  color: rgba(0, 0, 0, 0.87);
}
.v-list {
  list-style-type: none;
  padding: 8px 0;
}
.mydiv {
  border-bottom: 1px solid #f5f5f5;
}
.v-list--two-line .v-list__tile {
  height: 72px;
}
.v-list__tile--avatar {
  height: 56px;
}
.v-list__tile {
  align-items: center;
  color: inherit;
  display: flex;
  font-size: 16px;
  font-weight: 400;
  height: 48px;
  margin: 0;
  padding: 0 16px;
  position: relative;
}
.v-list__tile__action {
  align-items: center;
}
.v-list__tile__action,
.v-list__tile__avatar {
  display: flex;
  justify-content: flex-start;
  min-width: 56px;
}
.v-list__tile__action,
.v-list__tile__content {
  height: 100%;
}
.theme--light.v-icon {
  color: rgba(0, 0, 0, 0.54);
}
.v-list__tile__content {
  align-items: flex-start;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  text-align: left;
}
.red--text.text--darken-4 {
  caret-color: #b71c1c !important;
  color: #b71c1c !important;
}
.v-list__tile__title {
  height: 24px;
  line-height: 24px;
  position: relative;
  text-align: left;
}
.v-list__tile__sub-title,
.v-list__tile__title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
.theme--light.v-list .v-list__tile__sub-title {
  color: rgba(0, 0, 0, 0.54);
}
.v-list__tile__sub-title {
  font-size: 14px;
}

small {
  font-size: 80%;
}
.print-paper-side {
  height: 5px;
  width: 100%;
  background-image: url("../../public/img/bg4.png");
  background-size: auto 176%;
  background-repeat: repeat-x;
}

.footer {
  width: 10rem /* 640/64 */;
  height: 1.5rem;
  line-height: 1.5rem;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: red;
  overflow: hidden;
}
.footer_l {
  width: 7rem;
  height: 100%;
  float: left;
  background-color: #000;
  text-align: center;
}
.footer_l_span1 {
  color: #fff;
}
.footer_l_span2 {
  color: #ffc107 !important;
}
.footer_r {
  width: 3rem;
  height: 100%;
  float: right;
  text-align: center;
  background-color: red;
}
.footer_r span {
  color: #fff;
  font-size: 0.4rem;
}
</style>
