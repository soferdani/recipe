class Renderer {
    constructor () { //do i even need this if its empty !? 
    }

    render (data) {
        $("#recipes").empty()
        const source = $("#recipeTemplate").html()
        const tamplete = Handlebars.compile(source)
        let newHtml = tamplete({data})
        $("#recipes").append(newHtml)
    }

}