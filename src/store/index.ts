import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import recommendReducer from '../views/discover/c-views/recommend/store/recommend'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer
  }
})

type GetStateFnType = typeof store.getState // 获取函数的类型
type IRootState = ReturnType<GetStateFnType> //ReturnType工具具体实现原理
type DispatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export default store
