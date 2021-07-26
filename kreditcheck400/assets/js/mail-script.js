    // -------   Mail Send ajax
    /*
     $(document).ready(function() {
        var form = $('#contactForm'); // contact form
        var submit = $('.button-contactForm'); // submit button
        var alert = $('.alert-msg'); // alert div for show alert message

        // form submit event
        form.on('submit', function(e) {
            e.preventDefault(); // prevent default form submit

            $.ajax({
                url: 'contact_process.php', // form action url
                type: 'POST', // form submit method get/post
                dataType: 'html', // request type html/json/xml
                data: form.serialize(), // serialize form data
                beforeSend: function() {
                    alert.fadeOut();
                    submit.html('Wird gesendet....'); // change submit button text
                },
                success: function(data) {
                    alert.html(data).fadeIn(); // fade in response data
                    form.trigger('reset'); // reset form
                    submit.html('Nachricht wurde gesendet!');; // reset submit button text
                },
                error: function(e) {
                    console.log(e)
                }
            });
        });
    });
    */