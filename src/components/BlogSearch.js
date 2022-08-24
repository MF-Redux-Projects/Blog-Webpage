import searchIcon from '../assets/search.svg';
import {useDispatch} from "react-redux";
import {useState} from "react";
import {searchFilter} from "../redux/blog-filters/actions";

const debounce = (fn, delay) => {
    let timerId;
    return (...args) => {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn.apply(this, args);
        } , delay);
    }
}

const BlogSearch = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
        dispatch(searchFilter(input));
    }

    const debouncedHandleInputChange = debounce(handleInputChange, 500);

    return (
        <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
            <input
                className="outline-none border-none bg-gray-50 h-full w-full mr-2"
                type="search"
                name="search"
                placeholder="Search"
                onChange={debouncedHandleInputChange}
            />
            <img className="inline h-6 cursor-pointer" src={searchIcon} alt="Search"/>
        </div>
    )
}

export default BlogSearch;