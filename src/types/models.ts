export interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber?: string;
  image?: string;
}

export interface Message {
  id: string;
  name: string;
  message: string;
  time: string;
  status: string;
  image: string;
  date: string;
}
