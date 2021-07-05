exports.min = function min(array) {
    return (Array.isArray(array) == false || array.length == 0) ? 0 :array.sort((a, b) => a - b)[0];
  
};

exports.max = function max(array) {
    return (Array.isArray(array) == false || array.length == 0) ? 0 : array.sort((a, b) => a - b)[array.length - 1];
};

exports.avg = function avg(array) {
  if (Array.isArray(array) == false || array.length == 0){
    return 0
  }
  else {
      let summa = 0;
      for (let i = 0; i < array.length; i++) {
          summa += array[i];
      }
      return (Array.isArray(array) == false || array.length == 0) ? 0 : summa / array.length;
    }
  

};
