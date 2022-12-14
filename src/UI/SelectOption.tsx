import Select, { Props } from "react-select";
import { Region } from "types";

export type CountryOption = {
      label: Region;
      value: Region;
    } | "";

function SelectOption(props: Props<CountryOption, false>) {
  return (
    <Select
      {...props}
      isClearable={true}
      isSearchable={false}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          cursor: "pointer",
          minWidth: "200px",
          height: "48px",
          boxShadow: "var(--shadow)",
          padding: "0 24px",
          fontSize: "var(--fs-sm)",
          color: "var(--color-text)",
          borderRadius: "var(--radius)",
          lineHeight: "20px",
          backgroundColor: "var(--color-ui)",
          border: state.isFocused ? "" : "none",
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          padding: "8px 26px",
          fontSize: "var(--fs-sm)",
          lineHeight: "20px",
          cursor: "pointer",
          backgroundColor: state.isSelected
            ? "var(--color-input)"
            : "var(--color-ui)",
          color: "var(--color-text)",
          border: state.isFocused ? "var(--color-text) 1px solid" : "none",
        }),
        valueContainer: (baseStyles) => ({
          ...baseStyles,
          padding: "0",
        }),
        singleValue: (baseStyles) => ({
          ...baseStyles,
          marginLeft: "0",
          marginRight: "0",
          color: "var(--color-text)",
        }),
        menuList: (baseStyles) => ({
          ...baseStyles,
          padding: "0",
        }),
        dropdownIndicator: (baseStyles) => ({
          ...baseStyles,
          color: "var(--color-text)",
          padding: "0",
          width: "14px",
        }),
        clearIndicator: (baseStyles) => ({
          ...baseStyles,
          color: "var(--color-text)",
          padding: "0",
          marginRight: "10px",
          width: "14px",
        }),
        placeholder: (baseStyles) => ({
          ...baseStyles,
          marginLeft: "0",
          marginRight: "0",
          color: "var(--color-text)",
        }),
        indicatorSeparator: () => ({
          display: "none"
        }),
      }}
    />
  );
}

export default SelectOption;
