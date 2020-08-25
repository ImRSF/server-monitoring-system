export const verifyEmail = (value) => {
  var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRex.test(value)) {
    return true;
  }
  return false;
};

export const verifyLength = (value, length) => {
  if (value <= length) {
    return true;
  }
  return false;
};

export const verifyProfilePic = (file, type = "image", size = 20971520) => {
  return (
    compare(file.type.substr(0, 5), type) && verifyLength(+file.size, size)
  );
};

export const verifyNumber = (value) => {
  var numberRex = new RegExp("^[0-9]+$");
  if (numberRex.test(value)) {
    return true;
  }
  return false;
};

export const compare = (string1, string2) => {
  if (string1 === string2) {
    return true;
  }
  return false;
};

export const verifyUrl = (value) => {
  try {
    new URL(value);
    return true;
  } catch (_) {
    return false;
  }
};
