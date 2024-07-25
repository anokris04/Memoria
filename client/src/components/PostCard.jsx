import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div className='group relative w-full border border-purple-500 hover:border-2 h-[350px] overflow-hidden rounded-lg transition-transform duration-300 ease-in-out'>
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt='post cover'
          className='h-[200px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
        />
      </Link>
      <div className='p-3 flex flex-col gap-2'>
        <p className='text-lg font-semibold line-clamp-2'>{post.title}</p>
        <span className='italic text-sm'>{post.category}</span>
        <Link
          to={`/post/${post.slug}`}
          className='absolute bottom-0 left-0 right-0 border border-purple-500 text-purple-500 bg-transparent hover:bg-purple-500 hover:text-white transition-all duration-300 ease-in-out text-center py-2 rounded-md m-2 opacity-0 group-hover:opacity-100'
        >
          Show Post
        </Link>
      </div>
    </div>
  );
}