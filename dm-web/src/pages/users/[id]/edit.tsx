import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { axiosInstance } from "../../../utils/axios";
import { getAllUserIds } from "@/functions/getAllUserIds";
import { User } from "@/types/user";
import { UserForm } from "@/types/userForm";
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

export default function UserEdit({ userData }: { userData: User }) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>();

  const onSubmit = async (data: UserForm) => {
    const { name, email } = data;
    await axiosInstance.put(`/users/${userData.id}`, {
      name,
      email,
    });
    router.push("/users");
  };

  return (
    <>
      <div className={`text-center space-y-4 pt-10`}>
        <h1 className={`headingMd`}>ユーザー情報編集</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={`space-y-2`}>
          <label htmlFor="ユーザーネーム">ユーザーネーム</label>
          <br />
          <input
            id="name"
            type="text"
            placeholder="ユーザーネームを入力"
            defaultValue={userData.name}
            {...register("name", {
              required: "ユーザーネームは必須です",
              minLength: { value: 2, message: "2文字以上にしてください" },
              maxLength: { value: 12, message: "12文字以内にしてください" },
            })}
            className={`input stdWidth`}
          />
          <p className={`error`}>{errors.name?.message}</p>

          <label htmlFor="メールアドレス">メールアドレス</label>
          <br />
          <input
            id="email"
            placeholder="メールアドレスを入力"
            defaultValue={userData.email}
            {...register("email", {
              required: "メールアドレスは必須です",
            })}
            className={`input stdWidth`}
          />
          <p className={`error`}>{errors.email?.message}</p>

          <div>
            <button type="submit" className={`primary-button mt-4`}>
              ユーザー情報を編集
            </button>
          </div>
        </form>

        <div>
          <Link href={`/users/${userData.id}`} className={`link`}>
            ← 戻る
          </Link>
        </div>
      </div>
    </>
  );
}
