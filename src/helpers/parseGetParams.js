const parseGetParams = () => {
  const currentUrl = window.location.href;

  // Check if there's a question mark
  if (currentUrl.indexOf("?") === -1)
    return {
      /* empty object */
    };

  // Check if params are valid
  const params = currentUrl.split("?")[1].trim();
  if (params === "")
    return {
      /* empty object */
    };

  return params
    .split("&")
    .map((param) => param.split("="))
    .reduce(paramsReducer, {});
};

const paramsReducer = (params, [key, value]) => {
  const key_trimmed = key.trim();
  const value_trimmed = key.trim();

  // Empty keys are invalid
  if (key_trimmed === "") return params;

  params[key_trimmed] = value_trimmed || "true";
  return params;
};

// note: only export this
export default parseGetParams;
