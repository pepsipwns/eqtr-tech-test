import Card from '../components/Card';
import Hero from '../components/Hero';
import VideoPlayer from '../components/VideoPlayer';

function Components() {
  return (
    <>
      <div>
        <div className="row bg-dark-grey pb-5">
          {/* Hero */}
          <div className="col-12">
            <h1 className="text-center text-decoration-underline my-4">Hero</h1>
            <Hero
              title="Explore our sectors"
              caption="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis aspernatur excepturi, enim commodi sunt quo molestiae
                  atque provident!"
            />
          </div>
          {/* Buttons */}
          <div className="col-12 mt-3">
            <h1 className="text-center text-decoration-underline my-4">
              Buttons
            </h1>
            <div className="d-flex w-100 justify-content-evenly">
              <button type="button" className="btn btn-primary">
                Primary
              </button>
              <button type="button" className="btn btn-secondary">
                Secondary
              </button>
              <button type="button" className="btn btn-transparent">
                Transparent
              </button>
            </div>
          </div>
          {/* Badges */}
          <div className="col-12 mt-3">
            <h1 className="text-center text-decoration-underline my-4">
              Badges
            </h1>
            <div className="d-flex w-100 justify-content-evenly">
              <span className="badge badge-heat badge-hot">Hot</span>
              <span className="badge badge-heat badge-medium">Med</span>
              <span className="badge badge-heat badge-cold">Cold</span>
            </div>
          </div>
          {/* Cards */}
          <div className="col-12 mt-3">
            <h1 className="text-center text-decoration-underline my-4">
              Cards
            </h1>
            <div className="container">
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
              </div>
            </div>
          </div>

          {/* Video Player */}
          <div className="col-12 mt-3">
            <h1 className="text-center text-decoration-underline my-4">
              Video Player
            </h1>
            <VideoPlayer
              src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
              caption="Video caption here"
            />
          </div>

          {/* Form Inputs */}
          <div className="col-12 mt-3">
            <h1 className="text-center text-decoration-underline my-4">
              Form Inputs
            </h1>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-4">
                  <h3 className="pb-2">Select</h3>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-4">
                  <h3 className="pb-2">Input</h3>
                  <input
                    type="text"
                    className="form-control me-2"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Components;
