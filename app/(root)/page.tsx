import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";



export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {

  const query = (await searchParams).query;

  const posts = [
      {
        _createdAt: new Date(),
        views: 1000,
        author: {_id: 1, name: 'AzizMasri'},
        _id: 1,
        description: 'this is demo description for a post',
        image: 'https://img.freepik.com/free-photo/merry-christmas-topic-red-background-with-christmas-tree_24972-687.jpg',
        category: 'Robot',
        title: 'We Robot',
      }
  ]

  return (
    <>
    <section className="pink_container">
      <h1 className="heading">
        Pitch Your Startup, <br />
        Connect With Entrepreneurs
      </h1>

      <p className="sub-heading !max-w-3xl">
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
        Competitions.
      </p>

      <SearchForm query={query}/>
    </section>
    
    <section className="section_container">
      <p className="text-30-semibold">
        {query ? `Search result for "${query}"` : 'All Startup'}
      </p>

      <ul className="mt-7 card_grid">
        {posts?.length > 0 ? (
         posts.map((post: StartupTypeCard) => (
          <StartupCard key={post?._id} post={post}/>
        ))

        ): (
          <p>No startup found</p>
        )}
      </ul>
    </section>
    </>
  );
}
