import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Defining types for our data
interface Post {
  id: string;
  title: string;
  body: string;
  userId: string;
}

// Using React Query with TypeScript
function AppQueryPostList() {
  const fetchPosts = async (): Promise<Post[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    return response.json();
  };

  /*  const fetchPosts = () =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data); */
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <div className="p-4">Loading posts...</div>;
  if (error)
    return <div className="p-4 text-red-500">Error: {error.message}</div>;

  return (
    <div className="space-y-4 p-4">
      <h2>AppQueryPostList</h2>
      {posts?.map((post) => (
        <div key={post.id} className="p-4 border rounded shadow-sm">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="text-gray-700">{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default AppQueryPostList;
