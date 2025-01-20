interface IUser {
  email: string;
  id: string;
  image: null | string;
  name: string;
  password: string;
  provider: null | string;
  providerId: null | string;
}

export type { IUser };
