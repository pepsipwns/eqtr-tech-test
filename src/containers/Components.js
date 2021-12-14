import Hero from '../components/Hero';

function Components() {
  return (
    <>
      <div>
        <div className="row">
          <div className="col-12 mt-3">
            <h1 className="text-center text-decoration-underline my-3">Hero</h1>
            <Hero />
          </div>
          <div className="col-12 mt-3">
            <h1 className="text-center text-decoration-underline my-3">
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
              <button type="button" className="btn btn-heat btn-hot">
                Hot
              </button>
              <button type="button" className="btn btn-heat btn-medium">
                Hot
              </button>
              <button type="button" className="btn btn-heat btn-cold">
                Hot
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Components;
