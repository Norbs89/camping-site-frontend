const validator = (fields) => {
  return fields.filter((field) => {
    return field !== "";
  });
};

export default validator;
