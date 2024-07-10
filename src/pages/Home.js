import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "../styles/Home.css";
import image1 from "../Assets/image1.jpg";
import image2 from "../Assets/image2.jpg";
import image3 from "../Assets/image3.jpg";
import image4 from "../Assets/image4.jpg";
import rkssImage from "../Assets/rkss.jpg"; // Ensure correct import path

const images = [image1, image2, image3, image4];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div className="home-background" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
        <Container className="home-container mt-5">
          <motion.h1
            className="text-center mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Welcome to Our Pet Adoption & Care
          </motion.h1>
          <motion.h2
            className="text-center mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Find Your New Best Friend Today
          </motion.h2>
          <Row>
            {images.map((image, index) => (
              <Col md={3} key={index}>
                <motion.div
                  className="card-anim"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card className="mb-4 shadow-sm custom-card">
                    <div className="custom-card-img-wrapper">
                      <Card.Img variant="top" src={image} className="custom-card-img" />
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div className="paper">
        <Container>
          <Row>
            <Col md={6}>
              <img src={rkssImage} alt="Pet Adoption" className="img-fluid" />
            </Col>
            <Col md={6}>
              <div className="text-content">
                <h2 className="text-center mt-5 mb-4">Your Pet Adoption Journey With ThePetShop</h2>
                <div className="mt-4">
                  <h3>Search Pet</h3>
                  <p>Adopt a dog or cat who's right for you. Simply enter your city above to start your search.</p>
                </div>
                <div className="mt-4">
                  <h3>Connect</h3>
                  <p>Once you find a pet, click "show number" to get contact info for their pet parent or rescue. Contact them to learn more about how to meet and adopt the pet.</p>
                </div>
                <div className="mt-4">
                  <h3>AdoptLove</h3>
                  <p>The rescue or pet parents will walk you through their adoption process. Prepare your home for the arrival of your fur baby to help them adjust to their new family.</p>
                </div>
                <div className="mt-4">
                  <h3>Free Vet Consultation</h3>
                  <p>ThePetNest will help your pet to settle down in its new home, once you complete the Adoption journey reach out to us for free vet consultation.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="lvy">
        <Container>
          <Row>
            <Col>
              <div className="lvy-section">
                <h2 className="text-center mt-5 mb-4">Why Should You Adopt a Dog or Cat?</h2>
                <p>Did you know that over 2000 people per hour in India run a search right here looking to adopt a pet? Pet adoption is becoming the preferred way to find a new pet. Adoption will always be more convenient than buying a puppy for sale from a pet shop or finding a kitten for sale from a litter. Pet adoption brings less stress and more savings! So what are you waiting for? Go find that perfect pet for home!</p>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <div className="lvy-section">
                <h3>What is the fee to adopt a pet?</h3>
                <p>No, there is no fee for pet adoption on ThePetNest. However, if you adopt from a different city pet owner/rescuer can ask for travel charges. In case if you find someone asking for charges you can write us at support@thepetnest.com.</p>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <div className="lvy-section">
                <h3>How old do I need to be to adopt a pet?</h3>
                <p>You need to be at least 18+ years old to adopt.</p>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <div className="lvy-section">
                <h3>Can you return an adopted pet?</h3>
                <p>We understand it can be hard to get an adjusted pet in the new home and vice versa, as long as your reason for returning is reasonable, you'll be welcome to put it up for adoption again.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="whyus">
        <Container>
          <Row className="text-center">
            <Col>
              <h2 className="mt-5 mb-4">Why Choose Us?</h2>
            </Col>
          </Row>
          <Row className="text-center">
            <Col md={4}>
              <div className="whyus-box bg-primary">
                <h3>Kind To Everyone</h3>
                <p>
                  We believe that every pet deserves to be safe, loved and respected. People who are great candidates for adoption shouldn't be put off by complicated processes or one-size-fits-all rules. People who need to rehome their pets should be empowered to do so without being judged.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="whyus-box bg-info">
                <h3>Advocate Adoption</h3>
                <p>
                  This value sits at the heart of everything we do. Adoption reduces the demand for puppy farming, industrial-scale breeding, illegal pet imports and other forms of exploitation and abuse. We’re proud supporters of #AdoptDontShop.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="whyus-box bg-success">
                <h3>Responsible Rehoming</h3>
                <p>
                  We’re champions of rehoming. But not at any cost. We believe in finding the right match between adopters and pets, not taking risks or rushing. We always prioritize pet welfare. And we offer a safer, more ethical and professional alternative to online marketplaces like Preloved, Pets4Homes, Facebook and Gumtree.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="how-it-works">
        <Container>
          <Row className="text-center">
            <Col>
              <h2 className="mt-5 mb-4">How it works?</h2>
            </Col>
          </Row>
          <Row className="text-center">
            <Col md={4}>
              <h3>Search</h3>
              <p>Simply enter your city to start your search.</p>
            </Col>
            <Col md={4}>
              <h3>Meet</h3>
              <p>Schedule an appointment to meet the pet you love.</p>
            </Col>
            <Col  md={4}>
              <h3>Adopt</h3>
              <p>Finally, adopt the dog or cat you love.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Home;

