function isPrimeNumber(a){
  if(a%2!=0){
    return false;
  }if(a%3!=0){
    return false;
  }if(a%5!=0){
    return false;
  }if(a%7!=0){
    return false;
  }else(a%11!=0){
    return false;
  }else{
    return true;
  }
}
