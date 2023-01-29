import { useState } from "react";

const getBrowserLanguage = () => {
  const userLang = navigator.language || navigator.userLanguage;

  if (userLang.toUpperCase().startsWith("ES")) {
    return "ES";
  } else {
    return "EN";
  }
};

export const useLanguage = () => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language")
      ? localStorage.getItem("language")
      : getBrowserLanguage()
  );

  return [language, setLanguage];
};
