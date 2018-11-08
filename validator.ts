let errors = {
    firstName : true,
    lastName : true,
    email : true,
}


const checkEmail = function () {
    if ($("#email").val() === "" && $("#newsletter").prop("checked")) {
        $("#emailMandatory").show();
        errors.email = true;
    } else {
        $("#emailMandatory").hide();
        errors.email = false;
    }
    checkMandatory();
}
const checkChannel = function () {
    if ($("#mediaChannelSelect").val() === "Other") {
        $("#otherMediaChannel").show();
    } else {
        $("#otherMediaChannel").hide();
    }
}
const checkMandatory = function () {
    if(!errors.email && !errors.firstName && !errors.lastName){
        $("button").prop("disabled",false);
    }else{
        $("button").prop("disabled",true);
    }
}

$(document).ready(function () {
    checkChannel();
    checkEmail();
    checkMandatory();
    
    $("#firstName").on('input', function () {
        if ($("#firstName").val() === "") {
            $("#firstNameMandatory").show();
            errors.firstName = true;
        } else {
            $("#firstNameMandatory").hide();
            errors.firstName = false;
        }
        checkMandatory();
    });

    $("#lastName").on('input', function () {
        if ($("#lastName").val() === "") {
            $("#lastNameMandatory").show();
            errors.lastName = true;
        } else {
            $("#lastNameMandatory").hide();
            errors.lastName = false;
        }
        checkMandatory();

    });
    $("#email").on('input', checkEmail);
    $(":checkbox").change(checkEmail);
    $("#mediaChannelSelect").change(checkChannel);
    
});

