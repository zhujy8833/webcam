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
        view.windowURL = window.URL || window.webkitURL;
        var video = view.$el.find("video")[0] ? view.$el.find("video")[0] : document.querySelector("video");
        var onFailure = function(e) {
            if(e.code==1) {
                alert('User denied access to their camera');
            }else {
                alert('getUserMedia() not supported in your browser.');
            }
        };
        var getUserMediaFunction;
        if(view.getUserMedia()) {
            getUserMediaFunction = view.getUserMedia();
            getUserMediaFunction.call(navigator, {video: true, audio: true}, function(stream) {
               video.src = view.windowURL.createObjectURL(stream);
            }, onFailure);
        } else {
            alert ("Sorry, it seems your browser doesn't support this feature... :(");
        }


    },
    getUserMedia : function() {
        return navigator.getUserMedia || navigator.webkitGetUserMedia ||
               navigator.mozGetUserMedia || navigator.msGetUserMedia;
    }

});




