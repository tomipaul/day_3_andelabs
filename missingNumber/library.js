function findMissing(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Inputs should be arrays";
  }
  let sumArray1 = arr1.reduce((sum, num) => {
    return sum += num;
  }, 0);
  let sumArray2 = arr2.reduce((sum, num) => {
    return sum += num; 
  }, 0);
  return (sumArray1 > sumArray2) ? sumArray1-sumArray2 : sumArray2-sumArray1;
}

module.exports = findMissing;