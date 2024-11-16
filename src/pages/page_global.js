import nav from '../features/nav'
import pageTransitions from '../features/pageTransitions'

function pageGlobal() {
  console.log('Global - Loaded')

  nav()
  pageTransitions()
}

export default pageGlobal
