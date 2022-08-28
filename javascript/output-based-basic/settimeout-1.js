
// var is function scope 
function a(){
    for(var i=0;i<3;i++){
        setTimeout(function log(){
            console.log(i)
        },i*3000);
    }
}

a();  // 3 3 3