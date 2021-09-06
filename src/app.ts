class User {
    name: string;
    constructor(_name:string) {
        this.name = _name;
    }

}

const anna : User = new User("Anna");
const header = this.document.getElementById("Header");
if (header != null) {
    header.innerHTML = "Привет, " + anna.name;
}