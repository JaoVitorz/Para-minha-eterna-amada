$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.attr("tabindex", "0"); // Torna envelope focável

  envelope.on("click", function () {
    open();
  });

  envelope.on("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      open();
    }
  });

  btn_open.on("click", function () {
    open();
  });

  btn_reset.on("click", function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
    envelope.focus();
  }
  function close() {
    envelope.addClass("close").removeClass("open");
    envelope.focus();
  }
});

document.getElementById("open").addEventListener("click", () => {
  document.getElementById("envelope").classList.remove("close");
  document.getElementById("envelope").classList.add("open");
});

document.getElementById("reset").addEventListener("click", () => {
  document.getElementById("envelope").classList.remove("open");
  document.getElementById("envelope").classList.add("close");
});
