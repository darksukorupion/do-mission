import Link from "next/link";
import { useRouter } from "next/router";

import { axiosInstance } from "../../../utils/axios";
import { Card } from "@/components/atoms/card/card";
import { User } from "@/types/user";
import { Params } from "@/types/params";
import { getAllUserIds } from "@/functions/getAllUserIds";

export async function getStaticProps({ params }: Params) {
  const res = await axiosInstance.get(`/users/${params.id}`);
  const userData: User = res.data;
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

export default function UserDelete({ userData }: { userData: User }) {
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
