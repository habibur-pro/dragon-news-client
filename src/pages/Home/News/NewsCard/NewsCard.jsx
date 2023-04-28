import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsBookmark, BsShare } from "react-icons/bs";
import moment from "moment";
import Rating from "react-rating";
import { FaStar, FaRegEye } from "react-icons/fa";
// var Rating = require('react-rating');


const NewsCard = ({ news }) => {
    const { _id, title, image_url: image, details, rating, author, total_view } = news
    return (
        <Card className="mb-5">
            <Card.Header className="d-flex align-items-center justify-content-between">
                <div className=" flex-grow-1 d-flex gap-3 align-items-center">
                    <img className="rounded-circle" style={{ width: "40px", height: '40px' }} src={author?.img} alt="" />
                    <div className="" >
                        <p className="m-0 fw-bold">{author?.name}</p>
                        <p className="m-0">{moment(author?.published_date).format("DD-MM-YY")}</p>
                    </div>
                </div>

                <div className="d-flex gap-2 fs-5">
                    <BsBookmark />
                    <BsShare />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className="mb-3">{title}</Card.Title>
                <Card.Img variant="top" src={image} />
                <Card.Text className="mt-2">
                    {details.length < 250 ? <>{details}</>
                        :
                        <>
                            <>{details.slice(0, 200)}...</>
                            <Link to={`/news/${_id}`} className="text-decoration-none text-warning fw-bold d-block">See More</Link>
                        </>
                    }

                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex fs-5 justify-content-between align-items-center">
                <Rating
                    readonly
                    placeholderRating={rating?.number}
                    emptySymbol={<FaStar />}
                    placeholderSymbol={<FaStar className="text-warning" />}
                    fullSymbol={<FaStar />}
                />
                <div>
                    <FaRegEye className=" me-2" />{total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;