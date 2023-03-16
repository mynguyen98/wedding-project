import { configureStore } from '@reduxjs/toolkit'
import musicVid from './features/music-vid-reducer'
export const store = configureStore({
  reducer: {
    musicVid: musicVid,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
