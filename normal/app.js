
// character section js
document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.char-box');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, {
      threshold: 0.1 // کاهش مقدار threshold برای فعال کردن سریع‌تر انیمیشن
    });
  
    boxes.forEach(box => {
      observer.observe(box);
    });
  });

//   story section js

document.addEventListener('DOMContentLoaded', () => {
    const storySection = document.querySelector('.story');
  
    const observerOptions = {
      threshold: 0.1 // کاهش مقدار threshold برای فعال کردن سریع‌تر انیمیشن حتی در صفحات کوچک‌تر
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, observerOptions);
  
    observer.observe(storySection);
  });

//   gallery section 

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-container img');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, {
      threshold: 0.5 // وقتی نیمی از تصویر دیده می‌شود، انیمیشن شروع شود
    });
  
    images.forEach(image => {
      observer.observe(image);
    });
  });
  

//   watch section 

document.addEventListener('DOMContentLoaded', () => {
    const watchSection = document.querySelector('.watch-section');
    const links = document.querySelectorAll('.links a');
  
    const observerOptions = {
      threshold: 0.3
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          watchSection.classList.add('show');
          links.forEach((link, index) => {
            setTimeout(() => {
              link.classList.add('show');
            }, index * 200); // ایجاد تأخیر بین نمایش لینک‌ها برای جلوه بیشتر
          });
        }
      });
    }, observerOptions);
  
    observer.observe(watchSection);
  });

//   team product section 
document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = document.querySelectorAll('.team-member');
    
    const observerOptions = {
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, observerOptions);
  
    teamMembers.forEach(member => {
      observer.observe(member);
    });
  });

//   contact section 

  
  