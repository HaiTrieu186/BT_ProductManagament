module.exports=(query)=>{
    let searchedObject={
        keyword:"",
    };
    if (query.keyword){
        searchedObject.keyword=query.keyword;
        searchedObject.regex= new RegExp(searchedObject.keyword,"i");
    }

    return searchedObject;
}