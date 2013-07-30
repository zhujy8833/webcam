/**
 * Created with JetBrains WebStorm.
 * User: Jiangyue Zhu
 * Date: 7/29/13
 * Time: 21:57
 */
//Dependency: backbone.js
var WebcamFilter = Backbone.View.extend({
    filterList : ['grayscale', 'sepia', 'blur', 'brightness', 'contrast', 'hue-rotate',
                'hue-rotate2', 'hue-rotate3', 'saturate', 'invert', ''],
    initialize : function() {
        var view = this;
        window.URL = window.URL || window.webkitURL;
        var video = view.$el.find("video");
        if(view.hasUserMedia()) {
           navigator.getUserMedia({video: true, audio: true},function(stream) {
               video.src = window.URL.createObjectURL(stream);
           }, onFailSoHard);
        } else {
           alert ("Sorry, it seems your browser doesn't support this feature... :(");
        }


    },
    hasUserMedia : function() {
        return navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia || navigator.msGetUserMedia;
    }

});




