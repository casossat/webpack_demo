import { showMessage } from './alert'
import './style.less'
import $ from 'jquery'

document.getElementById("btn-click").
  addEventListener("click", showMessage)

$('#jquery-btn').on("click", function () {
  alert("click with JQuery")
})