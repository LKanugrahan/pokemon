export type UsersRes = UserI[];
export type UsersTransformRes = MainUserI[];

export interface UserI extends MainUserI {
  address: Address;
  website: string;
  company: Company;
}

export interface MainUserI {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
