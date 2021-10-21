function dot_product(vector1, vector2) {
  let psResult = 0;
  let finalResult;
  for (let i = 0; i < 2; i++) {
    psResult += vector1[i] * vector2[i];
  }

  return psResult;
}

function checkOrthagonal(vector1, vector2) {
  finalResult = dot_product(vector1, vector2);
  if (finalResult == 0) {
    console.log("The vectors are perpendicular");
  } else {
    console.log("the dot product is" + " ", finalResult);
  }
}

checkOrthagonal([2, 1], [-4, 6]);
