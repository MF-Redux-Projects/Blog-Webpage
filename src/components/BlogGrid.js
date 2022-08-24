import Blog from "./Blog";
import {useSelector,useDispatch} from "react-redux";
import {clearCategoryFilter, clearSearchFilter, clearAuthorFilter, clearAllFilters} from "../redux/blog-filters/actions";

const BlogGrid = () => {
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blogs);
    const filters = useSelector(state => state.filters);

    const {search, category, author} = filters;

    const handleClearCategoryFilter = () => {
        dispatch(clearCategoryFilter());
    }

    const handleClearSearchFilter = () => {
        dispatch(clearSearchFilter());
        //clear the input field
        document.getElementById("blog-search").value = "";
    }

    const handleClearAuthorFilter = () => {
        dispatch(clearAuthorFilter());
    }

    const handleClearAllFilters = () => {
        dispatch(clearAllFilters());
        //clear the input field
        document.getElementById("blog-search").value = "";
    }

    return (
        <>
            {
                search && (<span onClick={handleClearSearchFilter} className="text-red-600 mx-2 font-medium cursor-pointer">&#10005; {search}</span>)
            }
            {
                category && (<span onClick={handleClearCategoryFilter} className="text-red-600 mx-2 font-medium cursor-pointer">&#10005; {category}</span>)
            }
            {
                author && (<span onClick={handleClearAuthorFilter} className="text-red-600 mx-2 font-medium cursor-pointer">&#10005; {author}</span>)
            }
            {
                search || category || author ? (<span onClick={handleClearAllFilters} className="text-red-600 mx-2 font-medium cursor-pointer">&#10005; Clear All Filter</span>) : ''
            }
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {
                    blogs
                        .filter(blog => blog.title.toLowerCase().includes(filters.search.toLowerCase()))
                        .filter(blog => filters.category === '' || blog.category === filters.category)
                        .filter(blog => filters.author === '' || blog.author.name === filters.author)
                        .map(blog => <Blog key={blog.id} blog={blog}/>)
                }
            </div>
        </>
    )
}

export default BlogGrid;