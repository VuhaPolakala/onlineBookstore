import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import { Modal,Button } from 'react-bootstrap';
function ContactUs(){
    const {register}=useForm()
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div className="container">
        <div col="col-sm-6">
            <p className="display-6 text-info">Connect with us</p>
            <ul classname="list-unstyled">
                <li><b>About Us</b>:<p>We offer huge collection of books in diverse category of Fiction, Non-fiction, Biographies, History, Religions, Self -Help, Children. We also sell in vast collection of Investments and Management, Computers, Engineering, Medical, College and School text references books proposed by different institutes as syllabus across the country. Besides to this, we also offer a large collection of E-Books at very fair pricing.</p>

                                    <p>We attempt to extend the customer satisfaction by catering easy user-friendly search engine, quick and user-friendly payment options and quicker delivery systems. Upside to all of this, we are disposed to provide exciting offers and pleasant discounts on our books.</p>

                                     <p>As well, we humbly invite all the sellers around the country to partner with us. We will surely provide you the platform for many sparkling domains and grow the “BooksWagon” family.We would like to thank you for shopping with us. You can write us for any new thoughts at “email-id” helping us to improvise for the reader satisfaction</p></li>
            </ul>
            <ul classname="list-unstyled">
                <li><b>Contact BookStore Careers</b>:<p>If you are interested in an opportunity with BootStore, please visit our Careers page or visit the BookStore Careers FAQs.</p></li>
            </ul>
            <ul classname="list-unstyled">
                <li><b>Follow us on Social Media.</b>:<p>Join the conversation on <a href="#">Facebook</a>, <a href="#">Instagram</a> or <a href="#">Twitter</a>.</p></li>
            </ul>
            <ul classname="list-unstyled">
                <li><b>Explore the Latest News.</b>:<p>Learn how more information of bookStore, elevates experiences and supports a sustainable world..</p></li>
            </ul>
            <ul classname="list-unstyled">
                <li><b>Find an office.</b>:<p> <p>ADDRESS : SR Ecommerce Factory Pvt. Ltd., 2/14, ground floor , Ansari road , Daryaganj Delhi 110002 | Email: customerservice@bookswagon.com| Phone#: 011-41521153</p>
            <hr/></p></li>
            </ul>
            <ul classname="list-unstyled-none">
                <li className="text-decorat"><div className="col-md-6  mb-2">
                        
                        <div class="form-floating">
                               <input type="text" 
                                class="form-control" 
                                id="query" 
                                placeholder="write your query" 
                                {...register("query")}/>
                                <label for="query">Write Your Query</label>
                        </div>
                           

                     </div>
                     <Button variant="primary" onClick={handleShow}>
                                              Submit
                                     </Button>

                                    <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Your Query is Noted</Modal.Title>
                                    </Modal.Header>
                                     <Modal.Body>We noted your query and Thank you.Our admin will contact you soon</Modal.Body>
        
                                  </Modal></li>
            </ul>

        </div>
    </div>
     
    )
}
export default ContactUs