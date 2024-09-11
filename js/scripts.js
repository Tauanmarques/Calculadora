$(document).ready(function() {
    
    $ ('.bt-nr').click(function() {
        varbt_nr = $(this).text();

        $('txt_display').val(bt_nr);
    });
})