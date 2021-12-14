function FIRSTSINGLECHAR(string) {
    let a = [];
    for (let i = 0; i < string.length; i++){
      a.includes(string[i]) ? a.splice(a.indexOf(string[i]),1) : a.push(string[i])
    }
    a.length>0 ? console.log("Return value is ",a[0]) : console.log("_"); 
    }
    FIRSTSINGLECHAR("abbcdda")