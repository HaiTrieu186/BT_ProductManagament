
/// START : Buttons status ///
const statusButtons=document.querySelectorAll("[button-status]")
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
/// END   : Button status ///



/// START : Search form ///
const formSearch= document.querySelector("#form-search");
if (formSearch){
    const url= new URL(window.location.href)
    formSearch.addEventListener("submit",(e)=>{
        e.preventDefault();
            //phải preventDefault vì nó sẽ tự gửi keyword và reload --> mất params hiện có
            //console.log(e.target.elements.keyword.value);
        const keyword=e.target.elements.keyword.value
        if (keyword){
            url.searchParams.set("keyword",keyword);
        } else {
            url.searchParams.delete("keyword");
        }
        //console.log(url.href);
        window.location.href=url.href;   
    })
}
/// END   : Search form ///