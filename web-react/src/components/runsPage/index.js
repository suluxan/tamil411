import React from 'react'

import * as R from 'ramda'
// import * as RA from 'ramda-adjunct'

import {Header, Card, Segment, Icon, Transition} from 'semantic-ui-react'

import RunCard from './runCard'

// import {useCrescentContext, useRunsPage} from '../../../../redux/hooks'
// import {useProjectRunsQuery} from '../../../../apollo/hooks/project'

const RunsList = () => {
//   const {projectID} = useCrescentContext()
//   const projectRuns = useProjectRunsQuery(projectID)

//   const {activeRunsFilter} = useRunsPage()

//   // const filteredProjectRuns = R.compose(
//   //   isUploadedProject ? R.filter(
//   //     R.compose(
//   //       R.or(R.equals('all', runFilter)),
//   //       R.propEq('status', runFilter)
//   //     )
//   //   )
//   //   :
//   //   currentUserIsProjectCreator ? R.reject(
//   //     R.propEq('status', 'pending')
//   //   )
//   //   : R.reject(R.anyPass([
//   //       R.propEq('status', 'pending'),
//   //       R.compose(
//   //           R.not,
//   //           R.either(
//   //               R.pathEq(['createdBy', 'userID'], currentUserID),
//   //               R.pathEq(['createdBy', 'userID'], creatorUserID)
//   //           )
//   //       )
//   //   ]))
//   // )(projectRuns)

//   const filteredProjectRuns = R.compose(
//     R.filter(
//       R.compose(
//         R.or(R.equals('all', activeRunsFilter)),
//         R.propEq('status', activeRunsFilter)
//       )
//     )
//   )(projectRuns)

  return (
    // R.isEmpty(filteredProjectRuns) ?
    //   <Transition visible animation='fade up' duration={500} unmountOnHide={true} transitionOnMount={true}>
    //   <Segment basic>
    //     <Segment placeholder>
    //       <Header icon>
    //         <Icon name='exclamation' />
    //         No Runs
    //       </Header>
    //     </Segment>
    //   </Segment>
    //   </Transition>
    // :
      <Card.Group itemsPerRow={3}>
      {/* {
        R.addIndex(R.map)(
          (run, index) => (
            <RunCard key={index} {...{run}} />
          ),
          filteredProjectRuns
        )
      } */}
      <RunCard/>
      <RunCard/>
      <RunCard/>
      <RunCard/>
      <RunCard/>
      <RunCard/>

      </Card.Group>
  )
}


export default RunsList