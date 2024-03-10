import Link from 'next/link';
import Post from './components/Post';
import Navigation from './components/Navigation';
import prisma from '@/lib/prisma';

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="flex flex-col min-h-screen bg-[#020917] text-white">
      {/* Include the Navigation component */}
      <Navigation />

      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="text-center">
          {/* Updated Link usage without <a> tag */}
          <Link href="/add-post" passHref>
            <div className="cursor-pointer text-white text-lg">Add Post</div>
          </Link>
          <h1 className="text-3xl font-bold underline my-4">Feed</h1>
        </div>

        <div className="postContainer overflow-y-auto pl-4">
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              authorName={post.author.name}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
