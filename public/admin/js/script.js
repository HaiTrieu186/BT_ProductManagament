
/// START :Button status ///
const statusButtons=document.querySelectorAll("[button-status]")
//console.log(statusButtons);

if (statusButtons.length>0) {
    const url= new URL(window.location.href);
    statusButtons.forEach(button => {
        
        button.addEventListener("click",()=>{
            
            const status=button.getAttribute("button-status");
            //console.log(status);

            if (status){
                url.searchParams.set("status",status);
            } else{
                url.searchParams.delete("status");
            }

            //console.log(url.href);

            window.location.href=url;

        });
        
        
        
    })    
}


// END :Button status ///