$(document).on('ready turbolinks:load', function() {
    $('.datepicker').datepicker({
        format: 'yyyy-mm-dd',
        todayHighlight: true,
        clearBtn: true,
        orientation: 'bottom auto'
    });
});
