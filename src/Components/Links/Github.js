import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    postLink,
} from '../../Actions';

class Github extends Component {
    
    renderProject(url){
        var vars = {};
        url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        },10000);
        vars.viewed_time = new Date().toLocaleString()
        postLink(vars)
        window.location = `https://github.com/jdg2384/work/blob/master/${vars.link}`;
    }

    render() {
        return (
            <div>
                {this.renderProject(window.location.href)} 
            </div>
        );
    }
}

export default Github;
