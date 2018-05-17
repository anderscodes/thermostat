$(document).ready(function(){
  thermostat = new Thermostat();
  var temperature = thermostat.temperature;
  var powermode = thermostat.powerSavingMode;

  $("#up").click(function(){
    thermostat.up();
    var temperature = thermostat.temperature;
    $("#temperature").text(temperature);
  });

  $("#down").click(function(){
    thermostat.down();
    var temperature = thermostat.temperature;
    $("#temperature").text(temperature);
  });

  $("#reset").click(function(){
    thermostat.reset();
    var temperature = thermostat.temperature;
    $("#temperature").text(temperature);
  });

  $("#powersavemode").click(function(){
    thermostat.changePowerMode();
    var temperature = thermostat.temperature;
    var powermode = thermostat.powerSavingMode;
    $("#temperature").text(temperature);
    // $("#powermode").text(powermode);
  });

  $("#temperature").text(temperature);


});
