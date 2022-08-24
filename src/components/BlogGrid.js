import Blog from "./Blog";
import {useSelector,useDispatch} from "react-redux";
import {fetchBlogs} from "../redux/blogs/actions";

const BlogGrid = () => {
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blogs);
    const filters = useSelector(state => state.filters);

    return (
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {
                blogs
                    .filter(blog => blog.title.toLowerCase().includes(filters.search.toLowerCase()))
                    .map(blog => (
                        <Blog key={blog.id} blog={blog}/>
                    ))
            }
        </div>
    )
}

export default BlogGrid;