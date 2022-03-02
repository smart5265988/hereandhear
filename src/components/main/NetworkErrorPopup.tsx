import React from 'react';

const NetworkErrorPopup = () => {
  const closePop = () => {
    const pop = document.getElementById('popup_network_error');
    if (pop) {
      pop.style.display = 'none';
    }
  };

  return (
    <div className="modal" id="popup_network_error">
      <div className="modal_inner">
        <div className="modal_content">
          <div>
            <p>
              일시적인 데이터 접속장애가 발생하였습니다.
              <br />
              잠시 후 다시 실행해주세요.
            </p>
          </div>
          <div onClick={closePop}>
            <span>확인</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkErrorPopup;
