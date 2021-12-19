export default class SignUpUser {
  _id:string
  companyID: String
  companyName: String
  companyContact: String
  companyAdress: String
  addressEmail: String
  myName: String
  myContacts: String
  gender: String
  dob: String
  personalEmail: String
  password: String


  constructor(_id: string,  companyID: String, companyName: String, companyContact: String,
    companyAdress: String, addressEmail: String, myName: String, myContacts: String, gender: String, dob: String, personalEmail: String,
    password: String){
    this._id=_id
    this.companyID = companyID
    this.companyName = companyName
    this.companyContact = companyContact
    this.companyAdress = companyAdress
    this.addressEmail = addressEmail
    this.myName = myName
    this.myContacts = myContacts
    this.gender = gender
    this.dob = dob
    this.personalEmail = personalEmail
    this.password = password

  }
}

