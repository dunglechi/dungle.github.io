document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Cảm ơn bạn đã liên hệ! Thông tin của bạn đã được ghi nhận.');
  this.reset();
});