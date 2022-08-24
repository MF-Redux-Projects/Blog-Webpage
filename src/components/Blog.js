import {useDispatch} from "react-redux";
import {categoryFilter, authorFilter} from "../redux/blog-filters/actions";

const Blog = ({blog}) => {
    const dispatch = useDispatch();
    const {title, thumbnail, category, minRead, publishedDate, author} = blog;

    const handleCategoryFilter = (category) => {
        dispatch(categoryFilter(category));
    }

    const handleAuthorFilter = (author) => {
        dispatch(authorFilter(author));
    }

    return (
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={thumbnail} alt={title}/>
            </div>

            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                        <span
                            className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                            onClick={() => handleCategoryFilter(category)}
                        >
                            {category}
                        </span>
                    </p>
                    <a href="#" className="block mt-1">
                        <p className="text-xl font-semibold text-gray-900">{title}</p>
                    </a>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <img
                            className="h-10 w-10 rounded-full"
                            src={author.avatar}
                            alt={author.name}
                            onClick={() => handleAuthorFilter(author.name)}
                        />
                    </div>
                    <div className="ml-3">
                        <p
                            className="text-sm font-medium text-gray-900 hover:underline"
                            onClick={() => handleAuthorFilter(author.name)}
                        >
                            {author.name}
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime="2020-03-16">{publishedDate}</time>
                            <span aria-hidden="true">&middot;</span>
                            <span>{minRead}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;