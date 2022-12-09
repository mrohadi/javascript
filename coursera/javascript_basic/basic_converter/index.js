(function () {
  document.querySelector("#convert").addEventListener("submit", (e) => {
    e.preventDefault();

    var distance = parseInt(document.getElementById("distance").value);
    if (distance) {
      const roundConversion = (distance * 1.609344).toFixed(3);
      alert(roundConversion);
    } else alert("Please provide valid number");
  });
})();
