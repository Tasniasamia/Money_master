function getIdvalue(idname){
    const arr=document.getElementById(idname);
    const value=arr.value;
  const value_number=parseInt(value);
  if (isNaN(value_number)||(value_number<0)){
    alert("please enter valid");
    
  }
  else{
    return value_number;

  }

  

  }
  
function getIdinnerTextset_value(idnames,values){
    const arr1=document.getElementById(idnames);
    arr1.innerText=values;

}
    
function getIdinnertext(inner_id){
const arrs=document.getElementById(inner_id);
const arrs_value=arrs.innerText;
const arrs_value_number=parseInt(arrs_value);

return arrs_value_number;




}

function total(){
    if((isNaN(getIdvalue('food')))||(isNaN(getIdvalue('rent')))||(isNaN(getIdvalue('cloth')))){
        alert("please enter valid");
    }
    else if(((isNaN(getIdvalue('food')))&&(isNaN(getIdvalue('rent')))&&(isNaN(getIdvalue('cloth'))))){
        alert("please enter valid");
    
    }
    else{
        const total_value=getIdvalue('food')+getIdvalue('rent')+getIdvalue('cloth');
       
            return total_value;

        }
    }
    

function empty(emptyid){
    document.getElementById(emptyid).innerText="";
}
  




