function getCoordinates(obj, countryCode) {
  if (countryCode == "") {
    return null;
  }
  for (var i in obj.features) {
    var geo = obj.features[i];
    if (geo.properties.ISO_A3 == countryCode) {
      return geo;
    }
  }
}

function getCentroide(obj, countryCode) {
  if (countryCode == "") {
    return null;
  }
  for (var i in obj) {
    var geo = obj[i];
    if (geo.country_code == countryCode) {
      return geo.latlng;
    }
  }
}

function getNethserverInstallation(installations, countryName) {
  var versions = [];
  var splittedI = installations.split(",");

  splittedI.sort();
  for (i in splittedI) {
    var splittedV = splittedI[i].split("#");
    var version = {
      version: splittedV[0],
      number: splittedV[1],
      countryN: countryName,
    };
    versions.push(version);
  }
  return versions;
}
//import a specif icon for the marker with a determinate size
icon = {
  icon: "bus",
  iconShape: "marker",
  isAlphaNumericIcon: true,
  text: "",
  borderColor: "#00ABDC",
  textColor: "#00ABDC",
  iconSize: [22, 26],
};
document.getElementById("interval_week").addEventListener("click", function () {
  var interval_menu = document.getElementById("current_interval");
  interval_menu.innerHTML = "Last week";
  refresh_interval();
});

document
  .getElementById("interval_month")
  .addEventListener("click", function () {
    var interval_menu = document.getElementById("current_interval");
    interval_menu.innerHTML = "Last month";
    refresh_interval();
  });

document
  .getElementById("interval_6months")
  .addEventListener("click", function () {
    var interval_menu = document.getElementById("current_interval");
    interval_menu.innerHTML = "Last 6 months";
    refresh_interval();
  });

document.getElementById("interval_year").addEventListener("click", function () {
  var interval_menu = document.getElementById("current_interval");
  interval_menu.innerHTML = "Last year";
  refresh_interval();
});

document.getElementById("interval_all").addEventListener("click", function () {
  var interval_menu = document.getElementById("current_interval");
  interval_menu.innerHTML = "All";
  refresh_interval();
});

//color of the map border
function style(feature) {
  return {
    weight: 2,
    opacity: 1,
    dashArray: "2",
    color: "#4E6E7D",
    fillOpacity: 0.7,
  };
}
