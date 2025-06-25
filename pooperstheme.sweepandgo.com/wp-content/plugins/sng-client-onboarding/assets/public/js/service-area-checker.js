/**
 * Reload the page if the user got to it using back button
 */
window.addEventListener('pageshow', function(event) {
    console.log('event', event);
    if (event.persisted) {
        location.reload(true);
    }
});
(function($) {
    'use strict';
    $(document).ready(function() {
        $('.sng-zip-code-form').each(function() {
            let zip_code_input = $(this).find('.sng-zip-code-input[name="zip_code"]')[0];
            let validator = new JustValidate(this, {
                errorFieldCssClass: 'is-invalid',
                errorLabelCssClass: 'is-label-invalid',
                focusInvalidField: false
            });

            validator.addField(zip_code_input, [{
                        rule: 'required',
                    },
                    {
                        rule: 'minLength',
                        value: 5,
                        errorMessage: "Please enter valid zip code number"
                    },
                    {
                        rule: 'maxLength',
                        value: 5,
                        errorMessage: "Please enter valid zip code number"
                    },
                    {
                        rule: 'number'
                    }
                ])
                .onSuccess((event) => {
                    $('.sng-spinner-overlay').show();
                    if (typeof(gtag) != "undefined") {
                        console.log(zip_code_input.value)
                        gtag('event', 'zip_code_check_click', {
                            zip_code: zip_code_input.value
                        })
                    }
                    event.target.submit()
                })
                .onFail((fields) => {
                    console.error(fields);
                });

            $(zip_code_input).change(function() {
                validator.revalidateField(this);
            });
        });
    })
})(jQuery);