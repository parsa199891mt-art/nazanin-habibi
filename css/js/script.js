document.addEventListener("DOMContentLoaded", function () {
  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("رزرو شما با موفقیت ثبت شد!");
      bookingForm.reset();
    });
  }
});
