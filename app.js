document.getElementById('total_calculate').addEventListener('click',function(){
    const cost_total=total();
    if((cost_total<0)||(cost_total==undefined)){
        alert("what's the wrong");
    }else{

   
    getIdinnerTextset_value("total_expenses",cost_total());
    const income=getIdvalue('income');
    const total_cost=total();
    const balance=income-total_cost;
    if((isNaN(balance))||(balance<0)){
        alert('please enter valid');
       

    }
    else{
        getIdinnerTextset_value("balance",balance);

    }
}
})
document.getElementById('save').addEventListener('click',function(){
   const total_buy=getIdinnertext('balance');
   const saving_percent=getIdvalue('saving');
  if((saving_percent<0)  || (isNaN(saving_percent))){
alert("please enter valid");

  }
  else{
    const total_save=Math.round(total_buy*(saving_percent/100));
  
    getIdinnerTextset_value("savings_amount",total_save);
 
    const remaining=total_buy-total_save;
   
    getIdinnerTextset_value("remaining_balance",remaining);
  }
  

})
