import Link from "next/link";
import { axiosInstance } from "../../../utils/axios";
import { useRouter } from "next/router";
import { Card } from "@/components/atoms/card/card";

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

export default function UserDelete({ userData }: { userData: Users }) {
  const name = userData.name;
  const email = userData.email;
  const router = useRouter();

  const onClick = async () => {
    await axiosInstance.delete(`/users/${userData.id}`);
    router.push("/users");
  };

  return (
    <>
      <div className={`text-center space-y-4 pt-10`}>
        <h1 className={`headingMd`}>本当に削除しますか？</h1>
        <div className={`mx-auto stdWidth`}>
          <Card>
            <div className={`py-4 space-y-4`}>
              <div>
                <p>{name}</p>
              </div>
              <div className={`font-normal`}>
                <p>{email}</p>
              </div>
            </div>
          </Card>
        </div>

        <button onClick={onClick} className={`delete-button`}>
          ユーザーを削除
        </button>
        <div>
          <Link href="/users" className={`link`}>
            戻る
          </Link>
        </div>
      </div>
    </>
  );
}
