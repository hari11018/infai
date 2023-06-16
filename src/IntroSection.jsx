const IntroSection = () => {
  return (
    <>
      <div class="intro-bg">
        <div id="intro-section">
          <div class="intro-text">
            <h3>Right Influencers for the Right Brand</h3>
            <h2 class="introAI">
              India's only AI
              <br />
              powered Influencer
              <br /> Marketing Agency
              <br /> for all your needs <span class="introAfter">.</span>
            </h2>
            <div className="dots">
              <div className="dotPoint">
                <img src="./images/tick.png" alt="icon" />
                <p>vetted influencers across 50+ genres</p>
              </div>
              <div className="dotPoint">
                <img src="./images/tick.png" alt="icon" />
                <p>Unbeatable pricing on scale</p>
              </div>
              <div className="dotPoint">
                <img src="./images/tick.png" alt="icon" />
                <p>Trusted by 400+ leading Indian brands</p>
              </div>
            </div>
            <div class="introButtons">
              <a href="#brands-intro" class="button">
                I am Influencer
              </a>
              <a href="#influencers-section" class="button">
                I am Brand
              </a>
            </div>
          </div>
          <video loop autoPlay>
            <source src="./images/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default IntroSection;
