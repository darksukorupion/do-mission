import { axiosInstance } from "@/utils/axios";
import { Mission } from "@/types/mission";

export const getAllMissionIds = async () => {
  const res = await axiosInstance.get("/missions");
  const missions: Mission[] = res.data;
  return missions.map((mission) => {
    return {
      params: {
        id: mission.id.toString(),
      },
    };
  });
};
