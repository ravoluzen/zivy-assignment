import LoadMoreButton from "@/components/button/ActionButton";
import ScrollableList from "@/components/container/ScrollableList";
import { fetchTodoAndPost } from "@/utils/api";
import { useEffect, useState } from "react";
import { useCommentContext } from '../context/CommentContext';
import { useAuthContext } from '../context/AuthContext';
import { useRouter } from 'next/router';
import ActionButton from "@/components/button/ActionButton";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>();
  const { comments, loadMoreComments } = useCommentContext();
  const { user, login, logout } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    fetchTodoAndPost().then((data) => {
      setData(data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    })

    if(!user){
      router.push('/login');
    }

  }, [user])

  
  return (
    <main
      className="min-h-screen p-2"
    >
        {loading ? (
          <p className="text-xl font-bold">Loading...</p>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div className="w-1/2 flex justify-center">
              <ActionButton title="Logout" onClick={logout} disabled={false} />
            </div>

            <section className="min-h-screen flex flex-col justify-center items-center md:flex-row md:w-3/5 gap-[50px]">
              <div className="w-full h-44 md:w-1/2 border p-2 rounded-lg" key={data.todoData.id}>
                <p className="text-lg font-bold mb-2">{data.todoData.title}</p>
                <p>{data.todoData.completed ? "completed!" : "pending"}</p>
              </div>
              <div className="w-full h-44 md:w-1/2 border p-2 rounded-lg line-clamp-3" key={data.postData.id}>
                <p className="text-lg font-bold mb-2">{data.postData.title}</p>
                <p>{data.postData.body}</p>
              </div>
            </section>
            <section className="flex flex-col items-center md:w-3/5 gap-4">
              <ScrollableList title="Comments" data={comments} />
              <LoadMoreButton title="Load More" onClick={loadMoreComments} disabled={false} />
            </section>
          </div>
        )}
    </main>
  )
}
