import React from 'react';
import Logo from '../Logo';

export default () => {
  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
        lineHeight: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ filter: 'grayscale(100%)', opacity: 0.3 }}>
        <Logo isDark />
      </div>
      <div
        style={{
          color: '#999',
          lineHeight: 1.5,
          fontSize: 12,
          textAlign: 'right',
        }}
      >
        上海青城信息科技有限公司
        <br />
        All Rights Reserved © 2018 版权所有
        <br />
        <a href="http://www.miitbeian.gov.cn/state/outPortal/loginPortal.action;jsessionid=S29tWKXsuIa6G9K-ktpSuRjkGF5ELNvXPcHLTNvBkbECSeYhgIxc!495133832">沪ICP备18008337号</a>
      </div>
    </div>
  );
};
