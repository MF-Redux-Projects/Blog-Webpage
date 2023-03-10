import Header from "./components/Header";
import BlogGrid from "./components/BlogGrid";
import Footer from "./components/Footer";
import BlogSearch from "./components/BlogSearch";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <Header/>
            <BlogSearch/>

            <section className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
                <div className="absolute inset-0">
                    <div className="bg-white h-1/3 sm:h-2/3"/>
                </div>
                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                            ALL BLOGS ARE HERE
                        </h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ipsa libero labore natus atque, ducimus sed.
                        </p>
                    </div>

                    <BlogGrid/>
                </div>
            </section>

            <Footer/>
        </Provider>
    );
}

export default App;
