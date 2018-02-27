const input = $("#input");
const unList = $("#list");
const li = $("li");
const plusSign = $("#plus");
const deletBtn = $(".delete");

$(function() {
  input.on("keypress", function(event) {
    let toDo = `<li>${$(
      this
    ).val()}</li><i class="fas fa-trash-alt delete"></i>`;
    if (event.which === 13) {
      unList
        .hide()
        .append(toDo)
        .fadeIn();
      input.val("");
    }
  });

  unList.on("click", "li", function(event) {
    $(this).toggleClass("crossed");
  });

  plusSign.on("click", function(event) {
    input.fadeToggle();
  });

  unList.on("click", "i", function(event) {
    $(this)
      .prev()
      .remove();
    $(this).remove();
  });
});
