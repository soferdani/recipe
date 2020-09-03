let readyData = []
const logic = function (dataFromServer){
    readyData = []
    const allTheResepies = dataFromServer.results
    for (let oneResepie of allTheResepies){
        const title = oneResepie.title
        const href = oneResepie.href
        const thumbnail = oneResepie.thumbnail
        const ingredients = oneResepie.ingredients
        const objToPush = {
            ingredients: ingredients,
            title: title,
            thumbnail: thumbnail,
            href: href
        }
        readyData.push(objToPush)
    }

}


$("#srcBtn").on("click",function(){
    let userIngrid = $("#userInput").val()
    $("#userInput").val("")
    $.ajax({
        method: "GET",
        url: `/recipes/${userIngrid}`,
        success: (dataFromServer) => {            
            logic(dataFromServer)
            console.log(readyData);
        },
        error: (xhr,text,error) => {console.log(text)}
    })
})