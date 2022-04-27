$("#submit-btn").on("click", function () {
  let currTitle = $("#title").val();
  let currRating = $("#rating").val();
  $("table").append(
    `<tr>
    <td>${currTitle}</td>
    <td>${currRating}</td>
    <td><button type="button">Remove</button></td>
    </tr>`
  );
});

$("table").on("click", "button", function () {
  $(this).parent().parent().remove();
});
