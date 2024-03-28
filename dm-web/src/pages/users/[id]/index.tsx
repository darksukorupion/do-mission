import Link from "next/link";

import { axiosInstance } from "../../../utils/axios";
import { getAllUserIds } from "@/functions/getAllUserIds";
import { Card } from "@/components/atoms/card/card";
import { User } from "@/types/user";
import { Params } from "@/types/params";

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

export default function UserShow({ userData }: { userData: User }) {
  return (
    <>
      <div className={`text-center space-y-4 pt-10`}>
        <h1 className={`headingMd`}>ユーザー詳細</h1>
        <div className={`mx-auto stdWidth`}>
          <Card>
            <div className={`p-2 space-y-2`}>
              <p>{userData.name}</p>
              <div className={`font-normal`}>
                <p>{userData.email}</p>
              </div>
              <div className={`flex justify-end gap-3`}>
                <Link
                  href={`/users/${userData.id}/edit`}
                  className={`grayLink`}
                >
                  編集
                </Link>
                <Link
                  href={`/users/${userData.id}/delete`}
                  className={`grayLink`}
                >
                  削除
                </Link>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <Link href="/users" className={`link`}>
            ← 戻る
          </Link>
        </div>
      </div>
    </>
  );
}
