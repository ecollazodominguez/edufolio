import "./LanguageButton.css";

export const LanguageButton = ({ language, setLanguage }) => {
  const language_onClick = () => {
    if (language == "ES") {
      setLanguage("EN");
    } else {
      setLanguage("ES");
    }
  };
  return (
    <img
      className="languageOptions"
      src={
        language == "ES"
          ? require("../assets/ES_flag.png")
          : require("../assets/EN_flag.png")
      }
      alt="foto"
      onClick={language_onClick}
    ></img>
  );
};
