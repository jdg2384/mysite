// Redux Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
// CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import './projectDetail.css';
import '../Common/common.css';
//Component
import Footer from '../Footer/Footer';
// Actions
import {
    projectInfo,
} from '../../Actions';
// Router


class ProjectDetail extends Component {
    componentDidMount() {
        this.scrollerHandler()
        this.props.projectInfo()
    }
    scrollerHandler(){
        window.scrollTo(0,0)
    }
    renderProject =()=>{
        let projectId = Number(this.props.location.pathname.match(/[0-9]/gi)[0]);
        let projects = this.props.info;
        if(!projects){
            return <h1>...Loading</h1>
        }
        return(
            this.props.info.map(item => {
                if(projectId===item.id){
                    return(
                        <div key={item.id}>
                            <div className="container-fluid ">
                                <div className="row">
                                    <div className="col-lg-12 noPadding">
                                        <img src={item.image} style={{backgroundImage: "url(" + item.image + ")", height:'70vh', width: '100%'}} className="text-center" alt={item.title}/>
                                    </div>
                                    <div className="col-lg-12 title littlePadding">
                                        <h1>{item.title}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid ">
                                <div className="row">
                                    <div className="col-lg-6 description">
                                        <h2 style={{color:'#fff',}}>Description</h2>
                                        <h3 style={{color:'#fff',}}>{item.description}</h3>
                                    </div>
                                    <div className="col-lg-6 bullets">
                                        <h2 style={{color:'#585858',}}>Tech Used</h2>
                                        <h3>{item.tech}</h3>
                                    </div>    
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6 gitHubBack">
                                        <h2>Github</h2>
                                        <a target='blank' href={item.url}>
                                            <i className="fab fa-github-square"></i>
                                        </a>
                                    </div>
                                    <div className="col-lg-6 descriptionTwo"
                                    style={{backgroundImage: "url(" + item.image + ")"}}
                                    >
                                    </div>    
                                </div>
                            </div>
                            <div className="container-fluid ">
                                <div className="row">
                                    <div className="col-lg-12 noPadding">
                                        <img src={item.image_three} style={{backgroundImage: "url(" + item.image + ")", height:'70vh', width: '100%'}} className="text-center" alt={item.title}/>
                                    </div>
                                </div>
                            </div>
                            {/* <Footer/> */}
                        </div>
                    ) 
                }
            })  
        ) 
        

    }
    render() {
        return (
            <div>
                {this.renderProject()}  
            </div>
        );
    }
}
const mapStateToProps = state => {
    let { info } = state.projects
    return { 
       info,
    };
};
export default connect(mapStateToProps, {
    projectInfo,
})(ProjectDetail);
