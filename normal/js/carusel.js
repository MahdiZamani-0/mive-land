let currentSlide = 0;
let prevSlide = 0;

function showSlide(index) {
  const slides = document.getElementsByClassName('carousel-slide');
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  // حذف کلاس‌های انیمیشن قبلی
  slides[prevSlide].classList.remove('fadeIn', 'active');
  slides[prevSlide].classList.add('inactive');

  // اضافه کردن کلاس انیمیشن به اسلاید جدید
  slides[currentSlide].classList.add('fadeIn', 'active');
  slides[currentSlide].classList.remove('inactive');

  prevSlide = currentSlide;
}

function moveSlide(step) {
  showSlide(currentSlide + step);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);

  // تنظیم تایمر برای تغییر اسلاید به صورت خودکار هر 3 ثانیه
  setInterval(() => {
    moveSlide(1);
  }, 5000); // تغییر به هر 3000 میلی‌ثانیه (3 ثانیه)
});
