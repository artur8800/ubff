import "../scss/pages/gallery.scss";
import logo from "../img/logo.png";
import M from 'materialize-css';

document.addEventListener('DOMContentLoaded', function() {
  console.log('Loaded')
  let element = document.querySelectorAll('.tabs');
  const instance = M.Tabs.init(element);
});
