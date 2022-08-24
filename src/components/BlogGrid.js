import Blog from "./Blog";
import {useSelector,useDispatch} from "react-redux";
import {clearFilters} from "../redux/blog-filters/actions";

const BlogGrid = () => {
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blogs);
    const filters = useSelector(state => state.filters);

    const {search, category, author} = filters;
    const handleClearFilters = () => {
        dispatch(clearFilters());
    }

    return (
        <>
            {

            }
            {
                search || category || author ? (<span onClick={handleClearFilters} className="text-red-600 font-medium cursor-pointer">&#10005; Clear Filter</span>) : ''
            }
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {
                    blogs
                        .filter(blog => blog.title.toLowerCase().includes(filters.search.toLowerCase()))
                        .filter(blog => filters.category === '' || blog.category === filters.category)
                        .filter(blog => filters.author === '' || blog.author.name === filters.author)
                        .map(blog => (
                            <Blog key={blog.id} blog={blog}/>
                        ))
                }
            </div>
        </>
    )
}

export default BlogGrid;