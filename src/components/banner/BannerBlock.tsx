import React from 'react';

interface Data {
  bannerType: string;
}
const BannerBlock = (props: Data) => {
  return (
    <div className="sec_wrapper">
      {props.bannerType === 'image' ? (
        <div>
          <div className="banner img">
            <div>
              <b>Here & Hear</b> <br />
              오늘은 어디로 떠나볼까요?
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="banner text">
            <div className="bannerLogo"></div>
            <p>Lorem ipsum dolor tur adipisicing elit.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerBlock;
