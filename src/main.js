import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { Dog } from './dog.js';

$(document).ready(function(){

  $("form#dogUserForm").submit(function(event) {
    event.preventDefault();

    let dogName = ($("#dogName").val());
    let dogColor = ($("#dogColor").val());
    let dogAge = parseInt($("#dogAge").val());

    let newDog = new Dog (dogName, dogColor, dogAge);
  });
});
