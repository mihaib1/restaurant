let elementAttributesContainer = function(){
    let firstName = {
        "id": "firstName",
        "name": "firstName",
        "type": "text",
        "label": "First Name"
    };

    let lastName = {
        "id": "lastName",
        "name": "lastName",
        "type": "text",
        "label": "email"
    };

    let email = {
        "id": "email",
        "name": "email",
        "type": "email",
        "label": "Email"
    };

    let message = {
        "id" : "message",
        "name": "message",
        "type": "textarea",
        "label": "Your message",
        "htmlTag": "textarea"
    }

    return {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message
    }
}

export {elementAttributesContainer}