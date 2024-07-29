export default function BlogPostPage({params}){
    return(
        <>
        <h1>Blog Post</h1>
        <h2>{params.slug}</h2>
        </>
    )
}