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
       console.log(post)
        return (
            <div className="container-fluid" style={{paddingTop:"1rem"}}>
                <div className="container" style={{marginBottom:'-5rem'}}>
                    <div>
                        <h3>เรื่องราวใหม่</h3>
                    </div>
                    {post &&  post.recomended &&
                    <div className="row">
                        <img className="recomended-image" src={post.recomended.image.url}/>
                    </div>
                    }
                    <div className="big-label">
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
                <section className="content">
                    <div className="container">
                    <div className="row">
                       {post.list && post.list.map((item, index) => {
                             return(
                                   <div key={index} class="col-lg-3">
                                    <div className="content">
                                        <div className="row">
                                           <div className="image-feature" style={{backgroundImage:`url(${item.image.url})`,
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'noRepeat' }}>
                                           </div>
                                           <div className="col-lg-6" style={{marginTop:'1rem'}}> <div className="intro-text"> {item.title}</div></div>
                                           <div className="col-lg-6" style={{marginTop:'1rem', textAlign:'right'}}><i className="fa fa-clock"/><span>{' '}{moment(item.publishedDate).fromNow()}</span></div>
                                            <div className="col intro-text">
                                                
                                            </div>
                                        </div>
                                    </div>
                                   </div>
                             )
                       })}
                       </div>
                    </div>
                </section>
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
  