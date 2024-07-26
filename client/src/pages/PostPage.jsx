import { Button, Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CommentSection from '../components/CommentSection';
import PostCard from '../components/PostCard';

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/post/getallposts");
        const data = await res.json();
        if (res.ok) {
          // Filter out the post with the current slug
          const filteredPosts = data.posts.filter(post => post.slug !== postSlug);
          setPosts(filteredPosts);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      }
    };
    fetchPosts();
  }, [postSlug]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getallposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);


 
  return (
    <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
      {loading? (
        <div className="flex justify-center items-center min-h-screen">
          <Spinner size="xl" />
        </div>
      ) : (
        <>
          {post? (
            <>
              <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
                {post.title}
              </h1>
              <Link
                to={`/search?category=${post.category}`}
                className="self-center mt-5"
              >
                <Button color="gray" pill size="xs">
                  {post.category}
                </Button>
              </Link>
              <img
                src={post.image}
                alt={post.title}
                className="mt-10 p-3 max-h-[600px] w-full object-cover"
              />
              <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              </div>
              <div
                className="p-3 max-w-2xl mx-auto w-full post-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>
              <CommentSection postId={post._id} />
            </>
          ) : (
            <div>Loading...</div>
          )}
        </>
      )}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-4 py-4">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-center">Recent Posts</h1>
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </main>
  );
 };