function fibrec(n) {
    if (n === 1) return 0;
    if (n === 2) return 1;
    return fibrec(n - 1) + fibrec(n - 2);
  }
  
  let n = 8;
  let answer = fibrec(n);
  
  console.log(answer);