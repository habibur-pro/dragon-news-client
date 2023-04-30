import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const News = () => {

    const { user } = useContext(AuthContext)
    console.log('user', user)

    const signleNews = useLoaderData()
    const { category_id, title, image_url, details } = signleNews
    return (
        <Card >
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Button variant="danger" className="inline">
                    <Link to={`/category/${category_id}`} className="text-white text-decoration-none">
                        <FaArrowLeft className="me-2" />
                        All news in this category
                    </Link>
                </Button>
            </Card.Body>
        </Card>
    );
};

export default News;