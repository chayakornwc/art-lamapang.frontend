import React, { Component } from 'react';
import { fetchPosts } from '../../stores/redux/actions/post';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import './styled.css';
import 'moment/locale/th'
var moment = require('moment')

moment.locale('th');
 class Home extends Component {
    constructor(props){
        super(props);
       
    }
    componentDidMount(){
        this.props.fetchPosts();
    }
    render() {
       const {post} = this.props
        return (
            <div className="container-fluid" style={{paddingTop:"1rem"}}>
                <div className="container">
                    <div>
                        <h3>เรื่องราวใหม่</h3>
                    </div>
                </div>
                    {post &&  post.recomended &&
                    <div className="row">
                        <img className="recomended-image" src={post.recomended.image.url}/>
                    </div>
                    }
                <div className="container big-label">
                    <div className="row">
                        <div className="col-lg-3">
                            <span><i className="fa fa-clock"/>เผยแพร่{' '}{post &&  post.recomended && moment(post.recomended.publishedDate).fromNow()}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3>{post &&  post.recomended && post.recomended.title}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {post &&  post.recomended && ReactHtmlParser(post.recomended.content.brief)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                          {post &&  post.recomended && post.recomended.content.extended && <h4>อ่านเพิ่มเติม</h4>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchPosts }, dispatch);
  };
  
 const mapStateToProps = (state) => {
    return {
        post: state.post,
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
  