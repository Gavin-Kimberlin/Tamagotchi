import $ from 'jquery';
import 'bootstrap';
import YourPet from './tamagotchi.js';

const newPet = new YourPet ();

$(document).ready(function () {
  $('#feed').click(function () {
    newPet.feed();
  })
  $('#water').click(function () {
    newPet.giveWater();
  })
  $('#sleep').click(function () {
    newPet.sleep();
  });
});
