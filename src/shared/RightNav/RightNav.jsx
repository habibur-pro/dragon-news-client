import { Button, ListGroup } from "react-bootstrap";
import { BsGoogle, BsGithub, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import Qzone from "../Qzone/Qzone";
import bg from '../../assets/bg.png'
import './RightNav.css'

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <div className="">
                <Button variant="outline-primary" className="d-block mb-2"><BsGoogle className="me-1" /> Login with google</Button>
                <Button variant="outline-info" className="d-block"><BsGithub className="me-2" />Login with Github</Button>
            </div>
            <div>
                <h4 className="my-3">Find Us On</h4>
                <div>
                    <ListGroup>
                        <ListGroup.Item>
                            <BsFacebook className="me-2 text-primary" />
                            Facebook
                        </ListGroup.Item>
                        <ListGroup.Item >
                            <BsTwitter className="me-2 text-info" />
                            twitter
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <BsInstagram className="me-2 text-warning" />
                            Instagram
                        </ListGroup.Item>

                    </ListGroup>

                </div>
            </div>
            <div className="bg-light my-3 py-3 px-3">
                <Qzone />
            </div>
            <div className="position-relative q-zone">
                <img className="" src={bg} alt="" />
                <div className="position-absolute top-0 text-light p-5 text-center">
                    <h2 className="my-3">Create an Amazing Newspaper</h2>
                    <p className="mt-3 " style={{ lineHeight: '30px' }}>Discover thousands of options,
                        easy to customize layouts, one-click to import demo and much more.
                    </p>
                    <Button variant="danger" className="rounded-0 py-3 px-5 mt-4">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav