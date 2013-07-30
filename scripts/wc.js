/**
 * Created with JetBrains WebStorm.
 * User: jz
 * Date: 7/29/13
 * Time: 22:18
 * To change this template use File | Settings | File Templates.
 */
$(function(){
    //create model, view by passing model
    var model = new WebcamModel({filter : ""});
    var view = new WebcamFilter({"model" : model, "el" : document.getElementById("container")});
})
