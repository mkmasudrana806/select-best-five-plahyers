// all the utilities funciton  i haved written in different file named "allFunction"
// ******************************** event listener for selection player ************************************
document.getElementById('players-container').addEventListener('click', function(event){
    const targetButton = event.target;
    const targetButtonText = targetButton.innerText;
    // check target event SELECT Button or not.if true then all task will perform otherwise will not 
    if(targetButtonText==='SELECT'){
        const selectedPlayerContainer = document.getElementById('selected-player-container').style.display = 'block';
        const targetPlayerName = targetButton.parentElement.children[0].innerText;
        const selectedOrderList = document.getElementById('select-player-add');
        const countSelectedPlayerList = document.querySelectorAll('#select-player-add li').length;
        // check list container contain more than 6 ordered list or not: if less than 6,then code will execute otherwise it return 'you can not select more than 5 players'
        if(countSelectedPlayerList<5){
            const li = document.createElement('li');
            li.innerText = targetPlayerName;
            selectedOrderList.appendChild(li);
            // after pressing select button:disabled it, set title attribute, change bg color, remove classList "btn-hover";
            const selectBtnDisabled = targetButton.disabled = true;
            targetButton.setAttribute('title', 'already Selected');
            targetButton.style.backgroundColor='#999999';
            targetButton.classList.remove('btn-hover');
        }
        else{
            alert('you cann\'t select more than 5 players');
            return;
        }
    }
})


//************************************  event listener for calculate button ********************************
document.getElementById('calculate').addEventListener('click', function(){
    const inputValue = getInputValue('per-player-amount');
    const countSelectedPlayer = document.querySelectorAll('#select-player-add li').length;
    const newAmount = inputValue * countSelectedPlayer;
    // check input error 
    if(isNaN(newAmount)){
        alert('please enter number');
        return;
    }else{
        if(countSelectedPlayer==0){
            return alert('please select player');
        }
        seInnerText('expenses', newAmount);
    }
})


//*******************************  event listener for calculate total button ********************************
document.getElementById('calculate-total').addEventListener('click', function(){
    const expensesAmount = getElementValue('expenses');
    const managerInputAmount = getInputValue('manager-amount');
    const coachInputAmount = getInputValue('coach-amount');
    // input error check 
    if(isNaN(managerInputAmount)){
        alert('please enter number');
        return;
    }
    // input error check 
    else if(isNaN(coachInputAmount)){
        alert('please enter number');
        return;
    }
    else if(expensesAmount==0){
        alert('please select player first');
        return;
    }
    else{
        const newAmount = expensesAmount + managerInputAmount + coachInputAmount;
        seInnerText('total-amount', newAmount);
    }
})
