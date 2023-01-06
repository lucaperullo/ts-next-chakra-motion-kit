
export const localeDetector = () => {
    const locale = navigator.language;
    //EN , ES , IT , FR , DE , RU
    if (locale === "en" || locale === "en-US") { 
        return "en";
    } else if (locale === "es" || locale === "es-ES") {
        return "es";
    } else if (locale === "it" || locale === "it-IT") {
        return "it";
    }
    else if (locale === "fr" || locale === "fr-FR") {
        return "fr";
    }
    else if (locale === "de" || locale === "de-DE") {
        return "de";
    }
    else if (locale === "ru" || locale === "ru-RU") {
        return "ru";
    }
    else {
        return "en";
    }

};
export const initialState = {
  user: null,
  isLoading: true,
  locale: localeDetector(),
};


export const reducer = (
  state = initialState,
  action: {
    type: string;
    payload: any;
  }
) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_LOCALE":
      return {
        ...state,
        locale: action.payload,
      };
   

    default:
      return state;
  }
};