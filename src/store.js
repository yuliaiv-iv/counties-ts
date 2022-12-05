import { configureStore } from "@reduxjs/toolkit";
import { countryReducer } from "./features/counties/countrySlice";
import { themeReducer } from "./features/theme/themeSlice";
import { controlReducer } from "./features/controls/controlSlice";
import { detailsReducer } from "./features/details/detailsSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    countries: countryReducer,
    controls: controlReducer,
    details: detailsReducer,
  },
});
