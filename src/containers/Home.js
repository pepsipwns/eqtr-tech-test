import React from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import VideoPlayer from '../components/VideoPlayer';

function Home() {
  return (
    <>
      <Hero
        title="Explore our sectors"
        caption="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis aspernatur excepturi, enim commodi sunt quo molestiae
                  atque provident!"
      />
      <div className="bg-grey">
        <div className="container py-5 mt-2">
          <div className="col-4">
            <select
              className="form-select mb-5"
              aria-label="Default select example"
            >
              <option selected>Show all</option>
              <option value="1">Hot</option>
              <option value="2">Medium</option>
              <option value="3">Cold</option>
            </select>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 py-2">
              <Card
                title="Industrial Manufacturing"
                temperature="hot"
                text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
            reiciendis. Porro, perferendis corporis illum fugiat veritatis
            dolorem dolores harum itaque incidunt iste, esse debitis delectus
            vitae asperiores odio sapiente est."
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 py-2">
              <Card
                title="Mining & Metals"
                temperature="medium"
                text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
            reiciendis."
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 py-2">
              <Card
                title="Civil Aviation"
                temperature="cold"
                text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
            reiciendis. Porro, perferendis corporis illum fugiat veritatis
            dolorem dolores harum itaque incidunt iste, esse debitis delectus
            vitae asperiores odio sapiente est."
              />
            </div>

            <div className="col-12 col-md-6 col-lg-4 py-2">
              <Card
                title="Industrial Manufacturing"
                temperature="hot"
                text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
            reiciendis. Porro, perferendis corporis illum fugiat veritatis
            dolorem dolores harum itaque incidunt iste, esse debitis delectus
            vitae asperiores odio sapiente est."
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 py-2">
              <Card
                title="Mining & Metals"
                temperature="medium"
                text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
            reiciendis."
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 py-2">
              <Card
                title="Civil Aviation"
                temperature="cold"
                text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
            reiciendis. Porro, perferendis corporis illum fugiat veritatis
            dolorem dolores harum itaque incidunt iste, esse debitis delectus
            vitae asperiores odio sapiente est."
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 py-2">
              <Card
                title="Industrial Manufacturing"
                temperature="hot"
                text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
            reiciendis. Porro, perferendis corporis illum fugiat veritatis
            dolorem dolores harum itaque incidunt iste, esse debitis delectus
            vitae asperiores odio sapiente est."
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 py-2">
              <Card
                title="Mining & Metals"
                temperature="medium"
                text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
            reiciendis."
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 py-2">
              <Card
                title="Civil Aviation"
                temperature="cold"
                text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
            reiciendis. Porro, perferendis corporis illum fugiat veritatis
            dolorem dolores harum itaque incidunt iste, esse debitis delectus
            vitae asperiores odio sapiente est."
              />
            </div>
          </div>
          <div className="container container-small text-center pt-5">
            <h5>Can&apos;t find what you&apos;re looking for? Let us help.</h5>
            <a href="/" className="btn btn-secondary mt-2">
              Book a Meeting
            </a>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="container container-small">
          <h2>Content title</h2>
          <p className="pt-2 pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            blanditiis ullam optio explicabo, totam reprehenderit quos officia
            animi esse nihil accusamus inventore, consequuntur cupiditate quia
            perspiciatis voluptatum adipisci quae consectetur? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Omnis blanditiis ullam optio
            explicabo, totam reprehenderit quos officia animi esse nihil
            accusamus inventore, consequuntur cupiditate quia perspiciatis
            voluptatum adipisci quae consectetur? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Omnis blanditiis ullam optio
            explicabo, totam reprehenderit quos officia animi esse nihil
            accusamus inventore, consequuntur cupiditate quia perspiciatis
            voluptatum adipisci quae consectetur?
          </p>
        </div>
        <VideoPlayer
          src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
          caption="Video caption here"
        />
      </div>
    </>
  );
}

export default Home;
