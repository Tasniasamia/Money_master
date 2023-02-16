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

if (isNaN(arrs_value_number)||(arrs_value_number<0)){
    alert("please enter valid");
    
  }
  else{
    return arrs_value_number;
  }




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
        if(total_value<0){
            alert("what the wrong");
        }
        else{
            return total_value;

        }
    }
    
}
function empty(emptyid){
    document.getElementById(emptyid).innerText="";
}
  



// document.getElementById('total_calculate').addEventListener('click',function(){
//     getIdinnerTextset_value("total_expenses",total());
//     const income=getIdvalue('income');
//     const total_cost=total();
//     const balance=income-total_cost;
//     if((isNaN(balance))||(balance<0)){
//         alert('please enter valid');
    
//     }
//     else{
//         getIdinnerTextset_value("balance",balance);

//     }

// })
// document.getElementById('save').addEventListener('click',function(){
//    const total_buy=getIdinnertext('balance');
//    const saving_percent=getIdvalue('saving');
//    const total_save=Math.round(total_buy*(saving_percent/100));
//    if(total_save<0){
//     empty("savings_amount");
//     empty("remaining_balance");
//    }
//    getIdinnerTextset_value("savings_amount",total_save);

//    const remaining=total_buy-total_save;
//    getIdinnerTextset_value("remaining_balance",remaining);

// })
