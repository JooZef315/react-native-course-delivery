export var str = (str, len) => {
  if (str && str.length > len) {
    return `${str.substring(0, len)} ...`;
  } else {
    return str;
  }
};
