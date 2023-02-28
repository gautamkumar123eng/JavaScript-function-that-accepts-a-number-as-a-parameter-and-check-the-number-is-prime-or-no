


function prime(no) {
    let count = 0;
for(let a=2; a<=no-1; a++){
    if(no%a == 0){
        count++;
    };
};

if (count>0) {
    console.log("not a prime");
} else {
    console.log("it is a prime");
};
};

prime(11);