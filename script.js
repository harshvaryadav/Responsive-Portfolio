function filter(i)
{
   var d=document.querySelectorAll(".D");
   for(var j=0;j<d.length;j++)
   {
       if(i==j)
       {
          d[j].style.display="";
       }
       else
       {
          d[j].style.display="none";
       }
   } 
}
function fun()
{
    var d=document.querySelectorAll(".D");
    for(var j=0;j<d.length;j++)
    {
        d[j].style.display="";
    } 
}