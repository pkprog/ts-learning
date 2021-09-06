"use strict";
var User = /** @class */ (function () {
    function User(_name) {
        this.name = _name;
    }
    return User;
}());
var anna = new User("Anna");
var header = this.document.getElementById("Header");
if (header != null) {
    header.innerHTML = "Привет, " + anna.name;
}
