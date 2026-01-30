import {takeEvery,put} from "redux-saga/effects"
import {ADD_MAINCATEGORY,ADD_MAINCATEGORY_RED, GET_MAINCATEGORY, GET_MAINCATEGORY_RED} from "../Constants"
import { createMaincategoryAPI,getMaincategoryAPI} from "../Service"

function* createMaincategorySaga(action) //excuter
{
    let response = yield createMaincategoryAPI(action.payload)
    yield put({ type: ADD_MAINCATEGORY_RED, data: response })
}
function* getMaincategorySaga() //excuter
{
    let response = yield getMaincategoryAPI()
    yield put({ type: GET_MAINCATEGORY_RED, data: response })
}
export function* maincategorySaga()//watcher
{
    yield takeEvery(ADD_MAINCATEGORY,createMaincategorySaga)
    yield takeEvery(GET_MAINCATEGORY,getMaincategorySaga)
  

}