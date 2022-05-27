import React, { useEffect, useState } from "react";
import "./style.scss";
const Index = (props) => {
  const { onGetPreference } = props;

  const [preferenceChecked, setPreferenceChecked] = useState("bitcoin");

  const options = [
    { label: "Bitcoin", value: "bitcoin" },
    { label: "Apple", value: "apple" },
    { label: "Earthquake", value: "earthquake" },
    { label: "Animal", value: "animal" },
  ];

  useEffect(() => {
    onGetPreference(preferenceChecked);
  }, [preferenceChecked]);

  const renderPreferences = () => {
    return options.map((option) => (
      <div className="preference" key={option.value}>
        <input
          id={option.value}
          type="radio"
          name="preferences"
          className="hide"
          value={option.value}
          defaultChecked={option.value === preferenceChecked}
        />
        <label htmlFor={option.value} className="cus-label">
          <div className="box">{option.label}</div>
        </label>
      </div>
    ));
  };

  const onChangeValue = (e) => {
    setPreferenceChecked(e.target.value);
  };

  return (
    <>
      <div className="preferences-title">
        <h3>Preferences:</h3>
      </div>
      <div className="preferences" onChange={(e) => onChangeValue(e)}>
        {renderPreferences()}
      </div>
    </>
  );
};

export default Index;
