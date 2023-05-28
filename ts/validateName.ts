const validateName = (name: string): boolean => {
  return name.length > 3;
}

module.exports = validateName;