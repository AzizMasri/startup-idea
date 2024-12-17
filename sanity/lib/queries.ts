import { defineQuery } from "next-sanity";


export const STARTUPS_QUERY = defineQuery(`*[_type == "startup" && defined(slug.current)] | order(createdAt desc){
  _id,
    title,
    description,
    image,
    views,
    category, 
    author->{_id, name, bio, image},
    _createdAt,
}`)