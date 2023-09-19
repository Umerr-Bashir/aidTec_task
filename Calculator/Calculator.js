let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((item) => {
    item.addEventListener('click', (x) => {
        if (x.target.innerHTML == '=') {
                string = eval(string)
                document.querySelector(".input-2").value = string;
            
        }
        else if (x.target.innerHTML == 'C') {
            string = "";
            document.querySelector(".input-1").value = string;
            document.querySelector(".input-2").value = string;
                
        }
        else if (x.target.id == 'backspace') {
            string = string.slice(0, -1);
            document.querySelector(".input-1").value = string;
        }
        else {
            console.log(x.target)
            string += x.target.innerHTML;
            document.querySelector(".input-1").value = string;
        }
    })
    
    

})






















//document.write(Date());
/*function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}*/