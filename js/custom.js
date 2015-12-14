var editableField = function(className, fieldType){

    var fieldType = fieldType || 'textarea'
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
    editableField('.editable','textarea');
    editableField('.editable-b','textarea');

    $('.add-new').click(function(){
        var editableBlock = $(this).parent().parent().find('.panel-body div').size() +1 ;
        $(this).parent().parent().find('.panel-body').append("<div class='must-never-points editable'>"+editableBlock +
            '. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</div>');

        editableField('.editable','textarea');
    });


});


