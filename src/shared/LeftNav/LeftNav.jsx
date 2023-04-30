import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h3 className="px-3 mb-3 py-3 bg-light">National News</h3>

            <div>
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className="text-decoration-none text-black fs-5"> {category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;