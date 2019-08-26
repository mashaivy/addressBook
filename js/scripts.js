// backend Logic
function AddressBook() {
  this.contacts = [];
  this.currentId = 0;
}
AddressBook.prototype.addContact = function(people){
  this.currentId = this.assignId();
  this.contacts.push(people);
}
AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
AddressBook.prototype.findContact = function(id){
  for (var i=0; i < this.contacts.length; i++){
    if (this.contacts[i]){
      if (this.contacts[i].id == id){
        return this.contact[i];
      }
    }
  };
  return false;
}
AddressBook.prototype.deleteContact = function(id){
  for (var i = 0; i < this.contacts.length; i++){
    if (this.contacts[i]){
      if (this.contacts[i].id == id){
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}



function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber
}
Contact.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
}

// front-end Logic

var contactBook = new AddressBook();


$(document).ready(function(){
  $(".form").submit(function(event){
    var first = $("#firstName").val();
    var last = $("#lastName").val();
    var phone = $("#phoneNumber").val();
    event.preventDefault();
    var person = new Contact (first, last, phone);
    contactBook.addContact(person);
    console.log(contactBook.contacts);
  });
});
