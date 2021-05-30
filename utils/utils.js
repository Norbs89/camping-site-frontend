import cookie from "cookie";

export const validator = (fields) => {
  return fields.filter((field) => {
    return field !== "";
  });
};

export const parseCookies = (req) => {
  return cookie.parse(req ? req.headers.cookie || "" : "");
};
