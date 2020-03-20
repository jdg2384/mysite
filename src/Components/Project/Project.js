import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sticky from 'react-sticky-el';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import './project.css';
import '../Common/common.css';
import hat from '../../Images/hat.svg';
import {
    projectInfo,
    onHoverRender,
} from '../../Actions';
import {
    Link,
} from "react-router-dom";

class Project extends Component {

    componentDidMount() {
        const { projectInfo, onHoverRender } = this.props;
        projectInfo()
        onHoverRender()
    }
    
    renderList=()=>{
        const { info }= this.props;
        if(!info){return <div>Loading...</div>}
        else{
            return (
                <div>
                    <div className="col-md-6 greenParent text-center curveTwo">
                        <Sticky>
                            <div className="col-md-12 text-center green curve"> 
                                <img src={hat} className=" text-center hat" alt={'hat Svg'} />
                                <h2 className="h2Backgrounds">Portfolio</h2>
                            </div>
                        </Sticky>
                    </div>
                    <div className="col-md-6 projectBorder text-center curveTwo color">
                        { info.map(item => {
                            return (
                                <div className="projectLink" key={item.id}>
                                    <Link key={item.id} to={`/projectDetail/${item.title}/${item.id}`}>
                                        <div className="projectImgParent">
                                            <div className="projectImg"
                                                style={{backgroundImage: "url(" + item.image + ")"}}
                                            >
                                            <img src={item.image_two} className=" text-center logo" alt={item.title} />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        {this.renderList()}  
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    let { info, hover } = state.projects
    return { 
       info,
       hover,
    };
};

export default connect(mapStateToProps, {
    projectInfo,
    onHoverRender
})(Project);
