import axios from 'axios';
import {
  PROJECTINFO,
  ONHOVERRENDER,
  POSTLINK
} from './types';

//const api = 'http://localhost:3001/api'
const api = 'https://peaceful-tor-89083.herokuapp.com/api'

export const projectInfo = () => {
    return (dispatch) => {
        axios.get(`${api}`)
        .then(response => response)
        .then(data => {
            dispatch({
              type: PROJECTINFO,
              payload: data.data,
            });
        })
    }
}

export const postLink = (data) => {
    axios.post(`http://localhost:3001/resume`, {
        data: data
    })
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
}

export const onHoverRender = (blah) => {
    return (dispatch) => {
        dispatch({
            type: ONHOVERRENDER,
            payload: blah,
        });
    }
}

  

