const parseGetParams = () =>
  window.location.href
    .split("?")[1]
    .split("&")
    .map((stringParam) => stringParam.split("="))
    .reduce((params, [key, value]) => {
      params[key] = value;
      return params;
    }, {});

export default parseGetParams;
