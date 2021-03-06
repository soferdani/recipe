
let readyData = []
const render = new Renderer

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
            render.render(readyData)
        },
        error: (xhr,text,error) => {console.log(text)}
    })
})

$("#recipes").on("click",".recepiePhoto",function (){
    let firstIngredient = $(this).closest(".recepieDiv").find(".ingridienceList").find("p:first").html()
    alert(`this is the first ingridient ${firstIngredient}`)
    console.log(firstIngredient);
})