export default class SignUpUser {
  _id:string
  email: String
  gender: String
  names: String
  dateOfBirth: String
  entityId: String
  password: String
  entityName: String
  contact: String
  physicalAddress: String
  emailAddress: String

  constructor(_id: string,  email: String, gender: String, names: String, dateOfBirth: String, entityId: String,
     password: String, entityName: String, physicalAddress: String, emailAddress: String){
    this._id=_id
    this.email = email
    this.gender = gender
    this.names = names
    this.dateOfBirth = dateOfBirth
    this.entityId = entityId
    this.password = password
    this.entityName = entityName
    this.physicalAddress = physicalAddress
    this.emailAddress = emailAddress
  }
}

