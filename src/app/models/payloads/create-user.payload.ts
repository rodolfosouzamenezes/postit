export interface CreateUserPayload {
  name: string;
  email: string;
  password: string;
  //role: string;
  //imageUrl: string;
}

export interface RegisterPayload extends CreateUserPayload {
  confirmEmail: string;
  confirmPassword: string;
}
