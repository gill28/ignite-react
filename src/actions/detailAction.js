import axios from 'axios';
import { gameDetailsURL, gameScreenshotsURL } from '../api'

const loadDetail = (id) => async (dispatch) => {
    dispatch({

    })
    const detailData = await axios.get(gameDetailsURL(id))
    const screenShotData = await axios.get(gameScreenshotsURL(id))

    dispatch({
        case: 'GET_DETAIL',
        payload: {
            game: detailData.data,
            screen: screenShotData.data
        }
    })
}

export default loadDetail;


