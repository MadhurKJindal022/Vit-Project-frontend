import React, { useState } from "react";
import Layout from "../components/Layout";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "../styles/ContactUs.css";
import image1 from "../Assets/img1.jpg";
import image2 from "../Assets/img2.jpg";
import image3 from "../Assets/img3.jpg";
import image4 from "../Assets/img4.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <Container fluid className="contact-us-container mt-5">
        <Row className="justify-content-center">
          {/* Contact Form */}
          <Col md={6} className="contact-form">
            <h2>Contact Us</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>

          {/* About Us Section */}
          <Col md={3} className="about-us">
          <div>
              <h2>About Us</h2>
                <p>Welcome to The Pet Shop, your premier destination for pet adoption and comprehensive pet care services. At The Pet Shop, we understand that pets are more than just animals—they're cherished members of our families. With a deep commitment to animal welfare and responsible pet ownership, we strive to provide a nurturing environment where pets find loving forever homes.</p>
                <p>Our mission is simple: to connect adorable pets with caring individuals and families. Whether you're looking to adopt a new furry friend or seeking expert advice on pet care, The Pet Shop is here to guide you every step of the way. Our knowledgeable staff and certified pet specialists are passionate about ensuring each pet receives the best possible care and attention.</p>
                <p>Explore our wide range of adoption services, from matching you with the perfect companion to providing ongoing support and resources for pet parents. Beyond adoption, we offer a variety of premium pet products, health services, and grooming options to keep your pet healthy, happy, and thriving.</p>
                <p>At The Pet Shop, we believe in building lasting relationships—with our pets, our customers, and our community. Join us in making a difference in the lives of pets by visiting The Pet Shop today. Your journey to finding unconditional love starts here.</p>
          </div>

          </Col>

          {/* Contact Cards */}
          <Col md={3} className="contact-cards d-flex justify-content-end">
            <Row className="card-row">
              <Col md={6} className="mb-3">
                <Card className="card">
                  <Card.Img src={image1} alt="Image 1" />
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="card">
                  <Card.Img src={image2} alt="Image 2" />
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="card">
                  <Card.Img src={image3} alt="Image 3" />
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="card">
                  <Card.Img src={image4} alt="Image 4" />
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default ContactUs;
