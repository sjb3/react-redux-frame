const initState = {
  posts: [
    {id: '1', title: 'Squirtle laid an egg', body: 'Daniel Olivav4 days ago I have been studying react and redux for weeks. I watched the 40 v'}
    , {id: '2', title: 'Redux in Action', body: 'Daniel Olivav4 days ago I have been studying react and redux for weeks. I watched the 40 v'}
    , {id: '3', title: 'Skittle laid Rainbow', body: 'Daniel Olivav4 days ago I have been studying react and redux for weeks. I watched the 40 v'}
  ]
}

const rootReducer = (state=initState, action) => {
  return state;
}

export default rootReducer;