import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Card } from 'react-bootstrap'
import './About.css'
const About = () => {
    return (
        <div>
            <Header />
            <div class="bgNOoverlay">
                <div class="text-center">
                    <h2 style={{ marginTop: "1" }}>ABOUT</h2>

                </div>

            </div>
            <Card >
                <Card.Body><p>Art galleries have been providing an efficient means for sellers and buyers to connect with each other since ages. Artists, painters and sculptors can connect and get in touch with the art collectors directly, cutting down on the need of the middlemen. Traditional art galleries serve a lot of purposes.The new emerging trend being observed these days is the rise in popularity of online art galleries. As the name suggests, an online art gallery is a virtual platform to display artwork and conduct exhibition of various forms of arts. They are way more convenient than their offline counterparts and possess a lot more functionalities. The main problem with traditional art galleries and exhibitions is that a lot of them happen together and it is not possible for a common man to attend them all. People have to make time to visit them and a lot of conditions affect this. Sometimes a person is not able to visit an art gallery because of personal commitments. At times the exhibitions may not be even held in your city. People usually go to far off places to catch a glimpse of their favorite art piece. But online art galleries can be visited anytime from anywhere with just a few mouse clicks. You can immerse yourself in the beautiful world of art without leaving the comfort of your home. Internet based services are known for their convenience and user friendly nature. Online art galleries are no different. Just like traditional art galleries they fulfill their primary motive of making buyers meet the sellers and at the same time provide a lot of other utilities.</p><p>A traditional art gallery or exhibition finds it hard to accommodate more than a certain amount of art pieces. Usually paintings of well-known and critically acclaimed artists are displayed to generate crowd and attract more people to the gallery. Then there is some entry fees charged to the visitors. People move very slowly inside art galleries in order to view and admire the intricacies of the work and soak in the beauty and aura. At times this becomes quite tedious for a layman. Online art galleries allow you to browse through a huge collection of art work of different genres and styles. Many budding artists have their websites these days but they are not able to generate enough traffic on it. But at online galleries work of budding artists is displayed along with the work of renowned ones. This enables the young painters to showcase their piece of art on a global platform with the likes of famous and well known artists. Online galleries have become a good teaching tools. Students learning art can benefit a lot from the services of online art galleries. First of all, visiting web galleries is free. No money is charged from the visitor. Art can be patiently viewed, studied and scrutinized. </p>
                </Card.Body>
            </Card>
            <Footer />
        </div>
    )
}

export default About
