const Mutations = {
  getFooterState (state, i) {
    state.footerList.map(function (item, index){
      item.selsect = false
      if(index === i){
          item.selsect = true
      }
    })
  }
}

export default Mutations
