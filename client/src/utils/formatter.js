const formatNumber = (newValue, previousValue) => {
  if (!newValue) {
    return newValue;
  }
  const v = newValue.replace(/[^\d]/g, '');
  const cvLength = v.length;

  if (!previousValue || newValue.length > previousValue.length) {
    if (cvLength <= 8) {
      return v;
    }
    return v.slice(0, 8);
  }
};

export default formatNumber;
