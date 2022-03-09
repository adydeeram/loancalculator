// getiing submut btn 

const submitBtn = document.querySelector('#sumbit-btn');



submitBtn.addEventListener('click',function(e){ 
    // hider result 
    document.getElementById('reslult-card').style.display = 'none'
    
    // show loder 
    document.getElementById('loder').style.display = 'block';

    setTimeout(btnClick,2000)


    e.preventDefault();

});

function btnClick(){

        const amount = document.getElementById('amount');
        const interset = document.getElementById('interest');
        const years = document.getElementById('year');
        const monthlyPayment = document.getElementById('monthly-payment');  
        const totalPayment = document.getElementById('total-payment');  
        const totalIntereset = document.getElementById('total-interest');
        
        
        // calulations 

         const principle = parseFloat(amount.value);   
         const inputInterest = parseFloat(interset.value) / 100 / 12;
         const inputYears = parseFloat(years.value) * 12
         
         
        //  setting monthlyPayment 

        const  x = Math.pow(1 + inputInterest, inputYears);
        const monthly = (principle*x*inputInterest)/(x-1);

        if(isFinite(monthly)){
            monthlyPayment.value = monthly.toFixed(2);
            totalPayment.value = (monthly * inputYears).toFixed(2);
            totalIntereset.value = ((monthly * inputYears) - principle).toFixed(2);

            // Show results

            document.getElementById('reslult-card').style.display = 'block'

            // Hide sipner 

            document.getElementById('loder').style.display = 'none';

             



        }else{
            showError('Cheak Your Numbers..!');

        }


    
}


// Error Message 
function showError(error){

    const div = document.createElement('div')
    const card = document.getElementById('card');
    const heading = document.getElementById('heading');

     // Show results

     document.getElementById('reslult-card').style.display = 'none'

     // Hide sipner 

     document.getElementById('loder').style.display = 'none';
    

    div.classList  = 'p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800';
    div.setAttribute('role','alert');

    const span = document.createElement('span');
    span.classList = 'font-medium';
    span.appendChild(document.createTextNode(error))

    div.appendChild(span)

    // inserting error 
    card.insertBefore(div,heading);
    

    // clearing error after a certain time 

    setTimeout(clearError, 2000);


}

function clearError(){
    document.querySelector('.bg-red-100').remove();
}

{/* <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
  <span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
</div> */}