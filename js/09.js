function xor(m,n){
  var case1 = !m && n;
  var case2 = m && !n;
  return case1||case2;
}
