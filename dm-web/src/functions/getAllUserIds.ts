import { axiosInstance } from "@/utils/axios";
import { User } from "@/types/user";

export const getAllUserIds = async () => {
  const res = await axiosInstance.get("/users");
  const users: User[] = res.data;
  return users.map((user) => {
    return {
      params: {
        id: user.id.toString(),
      },
    };
  });
};
