import Link from "next/link";
import { axiosInstance } from "../../../utils/axios";

type Users = {
  id: number;
  name: string;
  email: string;
  password: string | null;
  profile_image: string | null;
  level: number | null;
  created_at: Date;
  update_at: Date;
};

type Params = {
  params: { id: number };
};

const getAllUserIds = async () => {
  const res = await axiosInstance.get("/users");
  const users: Users[] = res.data;
  return users.map((user) => {
    return {
      params: {
        id: user.id.toString(),
      },
    };
  });
};

export async function getStaticProps({ params }: Params) {
  const res = await axiosInstance.get(`/users/${params.id}`);
  const userData: Users = res.data;
  return {
    props: {
      userData,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllUserIds();
  return {
    paths,
    fallback: false,
  };
}

export default function UserShow({ userData }: { userData: Users }) {
  return (
    <>
      <div className={`text-2xl font-bold text-center space-y-4 pt-10`}>
        <h1 className={`text-4xl`}>ユーザー詳細</h1>
        <div
          className={`border-none bg-white w-1/2 mx-auto py-4 rounded-2xl shadow-lg`}
        >
          <div className={`mt-4`}>
            <p>{userData.name}</p>
          </div>
          <div className={`mt-4 font-normal text-lg`}>
            <p>{userData.email}</p>
          </div>
          <div className={`flex justify-end gap-3 mr-5`}>
            <Link
              href={`/users/${userData.id}/edit`}
              className={`text-lg font-normal text-gray-400 hover:text-gray-300`}
            >
              編集
            </Link>
            <Link
              href={`/missions/${userData.id}/delete`}
              className={`text-lg font-normal text-gray-400 hover:text-gray-300`}
            >
              削除
            </Link>
          </div>
        </div>
        <div>
          <Link
            href="/users"
            className={`mx-auto text-blue-600 hover:text-blue-400`}
          >
            戻る
          </Link>
        </div>
      </div>
    </>
  );
}
