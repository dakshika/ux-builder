jQuery.browser = {};
(function () {
    jQuery.browser.msie = false;
    jQuery.browser.version = 0;
    if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
        jQuery.browser.msie = true;
        jQuery.browser.version = RegExp.$1;
    }
})();

var editableField = function(className, fieldType){

    var fieldType = fieldType || 'text';
    $(className).editable(function(value, settings) {
        console.log(this);
        console.log(value);
        console.log(settings);
        return(value);
    }, {
        type    : fieldType,
        submit  : 'OK',
    });
}

$(document).ready(function(){
    editableField('.editable','autogrow');
    editableField('.editable-b');

    $('.add-new-line').click(function(){
        var editableBlock = $(this).parent().parent().find('.panel-body div').size() +1 ;
        $(this).parent().parent().find('.panel-body').append("<div class='must-never-points editable'>"+editableBlock +
            '. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</div>');

        editableField('.editable','textarea');
    });

    $('#add-new-slider').click(function() {
        var template = '<div class="tech-details">'+
                        '<span class="editable-b">Sample Title:</span>'+
                        '<div>'+
                        '<input id="tech-3" type="text" class="tech-slider" data-slider-value="'+
                        Math.floor(Math.random() * 6)+
                        '"/>'+
                        '</div></div>';
        $(this).parent().parent().find('.panel-body').append(template);
        editableField('.editable-b');
        $(".tech-slider").slider({
            ticks_labels: ["0", "1", "2", "3", "4", "5"],
            ticks_snap_bounds: 1,
            ticks: [0, 1, 2, 3, 4, 5],
            focus: true
        });
    });


});


