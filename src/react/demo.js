import * as React from 'react';
import ReactDOM from 'react-dom';
import { CompContext, contextData, updateContextTitle } from './mobxContext';
// import { CompContext, contextData, updateContextTitle } from './reactContext'; // 非响应式
import InfoCard from './react-widget/info-card';

let defaultPropsData = {
  title: '配置来生成页面，可以减少页面开发工作量，极大提升效率。@改变前',
  comment_count: 0,
  data1: {
    t1: 111,
    t2: 222,
  },
};

class IndexDemo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: 'hello, world!',
      img_count: 1,
    };

    this.updateProps = this.updateProps.bind(this);
    this.updatePropsData = this.updatePropsData.bind(this);
    this.updateStateData = this.updateStateData.bind(this);
    this.updateContextTitle = this.updateContextTitle.bind(this);
    this.updatePropsState = this.updatePropsState.bind(this);
  }

  updateProps() {
    defaultPropsData = {
      title: '测试一下 @改变后',
      comment_count: 2025,
    };
    console.log('defaultPropsData:', defaultPropsData);
  }

  updatePropsData() {
    defaultPropsData.title = 'wibetter @改变后';
    console.log('defaultPropsData:', defaultPropsData);
  }

  updateStateData() {
    this.setState({
      title: 'wibetter!',
    });
    console.log('this.state:', this.state);
  }

  updatePropsState() {
    this.setState({
      img_count: 3,
    });
    console.log('this.state:', this.state);
  }

  updateContextTitle() {
    updateContextTitle('hello, react Context. @改变后');
  }

  render() {
    const { title, img_count } = this.state;

    console.log('Index render:', this);

    return (
      <CompContext.Provider value={contextData}>
        <button onClick={this.updatePropsData}>
          改变 Props defaultPropsData 中 title 的数据
        </button>
        <button onClick={this.updateProps}>改变 Props 1</button>
        <button onClick={this.updatePropsState}>改变 Props 2 / state</button>
        <button onClick={this.updateStateData}>改变 State</button>
        <button onClick={this.updateContextTitle}>改变 Context</button>
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <InfoCard
            {...defaultPropsData}
            defaultPropsData={defaultPropsData}
            img_count={img_count}
          />
        </div>
      </CompContext.Provider>
    );
  }
}

ReactDOM.render(<IndexDemo />, document.getElementById('root'));
