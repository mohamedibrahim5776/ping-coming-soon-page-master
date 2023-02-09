const Regex = /[\w]+@[\w]{5}\.[\w]{3}/g
const check = function () {
    console.log(email.value.match(Regex))

    x = email.value.match(Regex)
    if ( email.value == "" ) {
        console.log("vj")
        empty.className = "active"
        regex.className = ""
        email.className = "borderRed"
    }
     else if(x == null ) {
        regex.className = "active"
        empty.className = ""
        email.className = "borderRed"
    }
    else {
        regex.className = ""
        empty.className = ""
        email.className = "border"
    }
}