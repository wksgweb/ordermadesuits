function handleEnter (field, event) {

        var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;

        if (keyCode == 13) {

            if (event.srcElement){

                if (!(event.srcElement.type == "button" || event.srcElement.type == "submit" || event.srcElement.type == "textarea")) {

                    return false;

                }

            }else if (event.target) {

                if (event.target.type != 'submit' && event.target.type != 'textarea'){

                    return false;

                }

            }

        } else {

          return true;

        }

}
