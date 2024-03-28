export type User = {
  id: number;
  name: string;
  email: string;
  password: string | null;
  profile_image: string | null;
  level: number | null;
  created_at: Date;
  update_at: Date;
};
