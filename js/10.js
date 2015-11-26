function toOrdinalNumber(a){
  if(a==1){
    return "1st";
  }if(a==2){
    return "2nd";
  }if(a==3){
    return "3rd";
  }if(a<=20){
    return a+"th";
  }if(a%10==1){
    return a+"st";
  }if(a%10==2){
    return a+"nd";
  }if(a%10==3){
    return a+"rd";
  }else{
    return a+"th"
  }
}
