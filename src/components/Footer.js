function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row text-center text-md-start">
            <div className="col-6 col-md-3">
              <ul className="list">
                <li>
                  <h4 className="text-yellow">Company</h4>
                </li>
                <li>
                  <a href="/">About us</a>
                </li>
                <li>
                  <a href="/">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-3">
              <ul className="list">
                <li>
                  <h4 className="text-yellow">Legal</h4>
                </li>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/">Cookie Policy</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 pt-3 pt-md-0">
              <ul className="list">
                <li>
                  <h4 className="text-yellow">Stay updated</h4>
                </li>
                <li>
                  <a href="/">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </a>
                </li>
                <li>
                  <div className="input-group has-validation pt-2">
                    <input
                      type="text"
                      className="form-control me-2"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                    <a className="btn btn-transparent btn-form valid-tooltip">
                      Subscribe
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

export default Footer;
