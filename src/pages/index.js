import styles from './index.css';
import React from 'react';
import { Button, Modal } from 'antd';
import TweenOne from 'rc-tween-one';
import { connect } from 'dva';


const Index = function(props) {
  const p0 = 'M0,100 L25,100 C34,20 40,0 100,0';
  const p1 = 'M0,100 C5,120 25,130 25,100 C30,60 40,75 58,90 C69,98.5 83,99.5 100,100';
  const ease0 = TweenOne.easing.path(p0);
  const ease1 = TweenOne.easing.path(p1);

  console.log(props);

  const onClick = (e) => {
    e.preventDefault();
    const { dispatch } = props;


    dispatch({
      type: 'products/getUser',
      payload: { id: 1 },
    });

  };
  const animation = [
    {
      repeatDelay: 500,
      y: -70,
      repeat: -1,
      yoyo: true,
      ease: ease0,
      duration: 1000,
    },
    {
      repeatDelay: 500,
      appearTo: 0,
      scaleX: 0,
      scaleY: 2,
      repeat: -1,
      yoyo: true,
      ease: ease1,
      duration: 1000,
    },
  ];
  return (
    <div className={styles.normal}>
      <div className={styles.welcome}/>
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li><a href="https://umijs.org/guide/getting-started.html">Getting Started</a></li>
      </ul>
      <TweenOne
        animation={{
          x: 80,
          scale: 0.5,
          rotate: 120,
          // yoyo: true, // demo 演示需要
          // repeat: -1, // demo 演示需要
          duration: 1000,
        }}
        paused={props.paused}
        style={{ transform: 'translateX(-80px)' }}
        className="code-box-shape"
      >
        <div style={{ backgroundColor: '#cc5a51', height: '100px', width: '100px', dispay: 'inline' }}></div>
      </TweenOne>

      <TweenOne
        animation={animation}
        className="code-box-shape"
        style={{
          position: 'absolute',
          transformOrigin: 'center bottom',
        }}
      >
        <div style={{ backgroundColor: '#cc5a51', height: '100px', width: '100px', dispay: 'inline' }}></div>

      </TweenOne>
      <Button type="primary" onClick={onClick}>年覅岁的</Button>
      <Modal>
        ff
      </Modal>
    </div>
  );
};

export default connect(({ products }) => ({
  products,
}))(Index);
