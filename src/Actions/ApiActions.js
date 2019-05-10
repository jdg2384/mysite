import axios from 'axios';
import {
  PROJECTINFO,
  ONHOVERRENDER,
  POSTLINK
} from './types';

// const api = 'http://localhost:3001/api'
const api = 'https://floating-scrubland-96179.herokuapp.com/api'

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
    axios.post(`https://floating-scrubland-96179.herokuapp.com/gaaresume`, {
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

  

