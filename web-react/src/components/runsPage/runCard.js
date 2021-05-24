import React, {useState, useEffect} from 'react';

import {Transition, Segment, Card, Header, Form, Button, Modal, Label, Divider, Icon, Popup, Message, Image, Grid} from 'semantic-ui-react'
import * as R from 'ramda'
// import * as RA from 'ramda-adjunct'
// import * as R_ from 'ramda-extension'

// import Marquee from 'react-marquee'
import moment from 'moment'

import { useBusinessDetailsQuery } from '../../apollo/hooks'

// import {useDispatch} from 'react-redux'
// import {useCrescentContext} from '../../../../redux/hooks'
// import {setRun} from '../../../../redux/actions/context'
// import {useCellCountsQuery} from '../../../../apollo/hooks/results'

const RunCard = ({

}) => {

const Business = useBusinessDetailsQuery()

if (R.any(R.isNil, [Business])) {
  return null
}
console.log(Business)

const {
  id,
  name,
  address,
  description,
  facebook,
  instagram,
  website

} = Business[0]

console.log(description)
//   const dispatch = useDispatch()
//   const {userID: currentUserID} = useCrescentContext()

//   const {
//     runID, name,
//     parameters: {
//       quality,
//       normalization,
//       reduction,
//       clustering,
//       expression
//     },
//     createdBy: {
//       userID: runCreatorUserID,
//       name: creatorName
//     },
//     status, hasResults, createdOn, submittedOn, completedOn,
//     datasets
//   } = run

//   const cellcount = useCellCountsQuery(runID)

  // if (R.isNil(cellcount)) {return null}

//   const color = R.prop(status, {
//     pending: 'orange',
//     submitted: 'yellow',
//     completed: 'green',
//     failed: 'red'
//   })
//   const icon = R.prop(status, {
//     pending: 'circle outline',
//     submitted: 'circle notch',
//     completed: 'circle check outline',
//     failed: 'times circle outline'
//   })
const link1 = `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/200`
const link2 = `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/200`
const link3 = `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/200`
const link4 = `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/200`

  return (
    <Card color='red'
      onClick={() => console.log('hello')}
    >
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column >
        <Image src={link1} 
            as='a'
            size='medium'
            href={link1}
            target='_blank'
        />        
        </Grid.Column>
        <Grid.Column>
        <Image src={link2} 
            as='a'
            size='medium'
            href={link2}
            target='_blank'
        />      
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={2}>
        <Grid.Column>
        <Image src={link4}
            as='a'
            size='medium'
            href={link3}
            target='_blank'
        />      
        </Grid.Column>
        <Grid.Column>
        <Image src={link4} 
            as='a'
            size='medium'
            href={link4}
            target='_blank'
        />  
        </Grid.Column>
      </Grid.Row>

    </Grid>
      <Card.Content>
        <Card.Header>
          {name}
        </Card.Header>
        <Card.Meta>
          {website}
        </Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          10 Friends
        </a>
      </Card.Content>
    </Card>
  )
}

export default RunCard
