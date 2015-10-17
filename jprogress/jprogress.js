(function($) {
    // start writing function
    $.fn.jprogress = function() {
        
        // return everytime when plugin function get called
        return this.each(function() {
            
            // define plugin obj
            var mainobj = $(this);
            
            // create method
            progressmethod = {
                //progress init
                init: function(bar) {
                    if(bar != 'undefined') {
                        $(mainobj).addClass('progress_single');
                        $(mainobj).wrap('<div class="progress_single_wrapper"></div>');
                    }
                }
            };
            
            //check if object is exist
            if(mainobj.length > 0) {
                // call init method
                progressmethod.init();
            }
            
        });
    }
}(jQuery));