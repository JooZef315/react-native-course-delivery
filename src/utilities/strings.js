export var str = (str, len) => {
  if (str && str.length > len) {
    return `${str.substring(0, len)} ...`;
  } else {
    return str;
  }
};

export var dateStr = (date) => {
  return String(date.toISOString().split("T")[0]);
};
