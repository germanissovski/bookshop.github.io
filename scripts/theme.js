const SWITCH = document.querySelector(".switch-inp")
SWITCH.addEventListener("change", function(){
    if(this.checked)(
        document.body.classList.add("dark-theme")
    )
    else(
        document.body.classList.remove("dark-theme")
    )
})
