import Blog from "./Blog";

const BlogGrid = () => {
    return (
        <div
            className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
        >
            <Blog/>
        </div>
    )
}

export default BlogGrid;