import React, { useEffect } from 'react';

const DeeplinkPopup = () => {
  return (
    <div className="modal fadeIn" id="popup_network_error">
      <div className="dim"></div>
      <span>Hear&here</span>
      <p>
        Hear & Hear 앱에서는 <br />더 편안하게 컨텐츠를 이용할 수 있습니다.
      </p>
      <a href="#app" onClick={() => console.log('앱')}>
        Coming Soon
      </a>
      <button type="button" onClick={() => console.log('웹')}>
        오늘은 하루 창 닫기
      </button>
    </div>
  );
};

export default DeeplinkPopup;
