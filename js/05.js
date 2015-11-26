function fizzbuzz(a){
  if(a%3==0){
    return "fizz";
  }if(a%5==0){
    return "buzz";
  }if(a%15!=0){
   return a;
 }else{
   return "fizzbuzz";
 }
}
