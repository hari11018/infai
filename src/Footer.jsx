import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="site-footer" id="aboutUs">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                InfluencerAI is a data driven influencer networking platform
                focussed on high quality campaigns suitable for growing business
                through social media networking platforms Through InfuenceAI we
                are creating a win-win-win situation for brands ,influencers &
                customers . Web Stories
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Influencer Marketing Solutions</h6>
              <ul className="footer-links">
                <li>
                  <a href="">Youtube Marketing</a>
                </li>
                <li>
                  <a href="">Instagram marketing</a>
                </li>
                <li>
                  <a href="">Java</a>
                </li>
                <li>
                  <a href="">Android</a>
                </li>
                <li>
                  <a href="">Does Influencer Marketing Really pay ?</a>
                </li>
                <li>
                  <a href="">Celebrity Marketing</a>
                </li>
                <li>
                  <a href="">Meme Marketing</a>
                </li>
                <li>
                  <a href="">Micro Influencer</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Resources</h6>
              <ul className="footer-links">
                <li>
                  <a href="">Top 10 Global Instagram Influencers</a>
                </li>
                <li>
                  <a href="">
                    why should Fintech Brand Invests in Influencer Marketing ?
                  </a>
                </li>
                <li>
                  <a href="">Youtube SEO - Things you should know</a>
                </li>
                <li>
                  <a href="">Does Influencer Marketing Really pay ?</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2023 All Rights Reserved by
                <a href="#">InfluenceAI</a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
