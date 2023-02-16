document.getElementById('total_calculate').addEventListener('click',function(){
    getIdinnerTextset_value("total_expenses",total());
    const income=getIdvalue('income');
    const total_cost=total();
    const balance=income-total_cost;
    if((isNaN(balance))||(balance<0)){
        alert('please enter valid');
    
    }
    else{
        getIdinnerTextset_value("balance",balance);

    }

})
document.getElementById('save').addEventListener('click',function(){
   const total_buy=getIdinnertext('balance');
   const saving_percent=getIdvalue('saving');
   const total_save=Math.round(total_buy*(saving_percent/100));
   if(total_save<0){
    empty("savings_amount");
    empty("remaining_balance");
   }
   getIdinnerTextset_value("savings_amount",total_save);

   const remaining=total_buy-total_save;
   getIdinnerTextset_value("remaining_balance",remaining);

})
