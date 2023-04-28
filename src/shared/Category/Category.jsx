import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../../pages/Home/News/NewsCard/NewsCard";


const Category = () => {
    const { id } = useParams()
    const categoryNews = useLoaderData()
    console.log(categoryNews)

    return (
        <div>
            {
                id && <h1>This is category {categoryNews.length}</h1>
            }
            {
                categoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;