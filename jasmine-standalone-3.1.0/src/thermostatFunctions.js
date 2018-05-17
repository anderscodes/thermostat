$(document).ready(function(){
  thermostat = new Thermostat();
  var temperature = thermostat.temperature;
  var powermode = thermostat.powerSavingMode;
  console.log(powermode)
  thermostat.changePowerMode();
  console.log(powermode)


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

  $("#powersavingmode").click(function(){
    thermostat.changePowerMode();
    var temperature = thermostat.temperature
    var powermode = thermostat.powerSavingMode;
    $("#temperature").text(temperature);
    $("#powermode").text(powermode);
  });


  $("#temperature").text(temperature);
  $("#powermode").text(powermode);

});
