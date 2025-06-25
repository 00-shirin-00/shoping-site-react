import { useState } from "react";
//custom hook >>
const useFormFields = () => {
  const [fields, setFields] = useState({});

  const handleChange = (e) => {
    const { target } = e; // استخراج عنصر هدف از رویدادconst target = e.target;
    
  setFields({
    ...fields,
      [target.name]: target.value, // به‌روزرسانی مقدار فیلد تغییر یافته
    });
  };

  return [fields, handleChange];
};

export default useFormFields;

