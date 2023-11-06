import { createContext, useContext, useState } from "react";
import { CartContext } from "../Cart/CartContext";

const FormContext = createContext("");

const FormProvider = ({ children }) => {
  const { totalPrice } = useContext(CartContext);
  const [formData, setFormData] = useState({
    gender: "先生",
    name: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    shipping: "標準運送",
    cardHolderName: "",
    cardNumber: "",
    validityPeriod: "",
    cardVC: "",
    totalPrice: totalPrice,
  });

  const updateFormData = (fieldName, value) => {
    setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
