// this is code for the d20 drop down equation

let rollbutton = document.getElementById('rolld20')
let user20 = document.getElementById('userd20')
user20=(1,2,3,4,5,6)
let failcode = document.getElementById('error')
function do_math20(){
    if (user20=1){
        1*20
    }elseif(user20=2);{
        2*20
    }elseif(user20=3);{
        3*20
    }elseif(user20=4);{
        4*20
    }elseif(user20=5);{
        5*20
    }elseif(user20=6);{
        6*20
    }elseif(user20>6);{
        failcode.style.display=block
    }
        
}
    if(user20==true){
    rollbutton.addEventListener('click',do_math20)
} 





// this code is for the d-12
let int12 = ['1,2,3,4,5,6,7,8,9,10']

function do_math12(){
    int12 * 10
 }

// this code is for the d-10
let int10 = ['1,2,3,4,5,6,7,8,9,10,11,12']

function do_math10(){
    int10 * 12
}




// this code is for the d-8
let int8 =['1,2,3,4,5,6,7,8,9,10,11,12,13,14,15']

function do_math8(){
    int8 * 8
}





// this code is for the d-6
let int6 = ['1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20']

function do_math6(){
    int6 * 6
}



// this code is for the d-4

let int4 = ['1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30']

function do_math4(){
    int4 * 4
}






// this is the code for the total number from all dice used



function Do_Math(){
    int20*20+int12*10+int8*8+int6*6+int4*4
    
}