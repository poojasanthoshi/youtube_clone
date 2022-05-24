import axios from 'axios'

export default axios.create(
    {
        BaseURL: 'https://www.googleapis.com/youtube/v3',
       
    }
);