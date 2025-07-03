import toast from "react-hot-toast"; 

// تابع notify برای نمایش اعلان‌ها
const notify = (type, message) => {
  toast[type](message, {
    // نوع اعلان و پیام را مشخص می‌کند
    duration: 5000,
    position: "top-center",
  });
};

export default notify;
