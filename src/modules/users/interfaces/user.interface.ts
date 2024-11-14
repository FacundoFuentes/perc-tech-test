export interface IUser {
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface IUserResponse {
  totalUsers: number;
  users: Array<{
    name: string;
    city: string;
    company: string;
  }>;
}

export interface IUserDelete {
  response: object;
  message: string;
}
