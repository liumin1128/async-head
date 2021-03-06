import React, { PureComponent, Fragment } from 'react';
import ReactPlayer from 'react-player'
import { Player } from 'video-react';
import logo from './logo.svg';
import { loadHeadFile } from './utils'
import "video-react/dist/video-react.css"; // import css
class App extends PureComponent {
  componentDidMount() {
    this.loadQiniuPlayer()
  }
  loadQiniuPlayer = async () => {
    await loadHeadFile([
      'http://localhost:3000/qiniu/qiniuplayer.min.js',
      'http://localhost:3000/qiniu/qiniuplayer.min.css'
    ])
    await this.initQiniuPlayer()
  }
  initQiniuPlayer = () => {
    const options = {
      controls: true,
      url: 'https://imgs.huarenhouse.com/APP%E4%BB%8B%E7%BB%8DV3.mov?avvod/m3u8/s/960x640/vb/1000k',
      // url: 'http://og9dz2jqu.cvoda.com/Zmlyc3R2b2RiOm9jZWFucy0xLm1wNA==_q00000001.m3u8',
      type: 'hls',
      preload: true,
      autoplay: false, // 如为 true，则视频将会自动播放
    };
    const player = new window.QiniuPlayer('demo-video', options);
  }
  render() {
    return (
      <Fragment>
        <video id="demo-video" className="video-js vjs-big-play-centered"></video>
        <hr/>
        <ReactPlayer url='https://imgs.huarenhouse.com/APP%E4%BB%8B%E7%BB%8DV3.mov' />
        <hr/>
        <Player>
          <source src="https://imgs.huarenhouse.com/APP%E4%BB%8B%E7%BB%8DV3.mov" />
        </Player>
      </Fragment>
    );
  }
}

export default App;
