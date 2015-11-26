function distance(a,b,c,d){
  if(a==c&&b==d){
    return 0;
  }if(a!=c&&b!=d){
    return (a-c)*(a-c)+(b-d)*(b-d);
  }
}
