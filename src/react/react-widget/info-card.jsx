import * as React from 'react';
import { observer } from 'mobx-react';
import { CompContext } from '../mobxContext';
import './style.scss'; // 组件内容样式

@observer
class InfoCard extends React.PureComponent {
  constructor() {
    super();
    this.agreeDataFormat = this.agreeDataFormat.bind(this);
  }

  // 方式1：在class组件中声明静态属性static，且必须是contextType，确保当前组件可以使用全局context中的数据（this.context不为空）
  static contextType = CompContext;

  agreeDataFormat(agreeData) {
    if (agreeData && agreeData <= 9999) {
      return agreeData;
    }
    if (agreeData && agreeData > 9999) {
      return `${Math.floor(agreeData / 1000) / 10}w`;
    }
  }

  render() {
    const {
      title,
      backgroundImage,
      img_count,
      comment_count,
      render,
      body,
      defaultPropsData,
    } = this.props;

    console.log('InfoCard render:', this, this.context);

    const curBackgroundImage =
      backgroundImage ||
      'https://search-operate.cdn.bcebos.com/64c279f23794a831f9a8e7a4e0b722dd.jpg';
    return (
      <div className="news-card">
        <div className="news-title">
          {this.context.title ||
            title ||
            'amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。'}
        </div>
        <div className="item-imgbox">
          <div
            className="news-img"
            style={{ backgroundImage: `url(${curBackgroundImage})` }}
          ></div>
          {img_count > 0 && <div className="img-count">{img_count}</div>}
        </div>
        <div className="news-info">
          <div className="left media-mark">爱速搭 · 低代码平台</div>
          {comment_count && comment_count > 0 && (
            <div className="cmt-num right">
              {this.agreeDataFormat(comment_count)}评
            </div>
          )}
        </div>
        {body ? render('body', body) : null}
      </div>
    );
  }
}

export default InfoCard;
