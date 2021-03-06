// NewsListCP.js (父组件)

import React from 'react';
import NewsHeader from './NewsHeaderCP.js';
import NewsItem from './NewsItemCP.js';
import './NewsListCP.css'

export default class NewsList extends React.Component {
  render() {
    // 父组件通过 props 属性传递数据给子组件
    var testData = {
      "by": "Bane",
      "descendants": 49,
      "id": 11600137,
      "kids": [11600476, 11600473, 11600501, 11600463, 11600452, 11600528, 11600421, 11600577, 11600483],
      "score": 56,
      "time": 1461985332,
      "title": "Yahoo's Marissa Mayer could get $55M in severance pay",
      "type": "story",
      "url": "http://www.latimes.com/business/technology/la-fi-0429-tn-marissa-mayer-severance-20160429-story.html"
    };//json格式数据 作为props.item属性的值

    return ( 
    	< div className = "newsList" >
	      < NewsHeader / >
	      <div className="newsList-newsItem">
            {
              (this.props.items).map(function(item, index) {
                return (
                    <NewsItem key={item.id} item={item} rank={index+1} />
                    );
              })
            }
          </div> 
	    < /div>
    );
  }
}
