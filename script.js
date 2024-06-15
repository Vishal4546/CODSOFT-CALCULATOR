let Result = document.getElementById('result');

function addToDisplay(value){
    Result.value += value;
}

function clearResult(){
    Result.value = '';
}

function DeleteResult(){
    Result.value = Result.value.slice(0,-1);
}

function Calculate(){
    try{
        Result.value = eval(Result.value);
    }

    catch(error){
        Result.value = "error";
    }
}