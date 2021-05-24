import {useState} from 'react'
import { useQuery, gql } from '@apollo/client'

import * as R from 'ramda'
import * as RA from 'ramda-adjunct'

export default function useBusinessDetailsQuery() {
  const [Business, setBusiness] = useState(null)
  const {loading, data, error} = useQuery(gql`
    query BusinessDetails {
      Business {
        id
        name
        address
        description
        facebook
        instagram
        website
      }
    }
  `, {
    fetchPolicy: 'cache-and-network',
    onCompleted: ({Business}) => {
      // if (RA.isNotNil(Business)) {
        setBusiness(Business)
      // }
    }
  })

  return Business
}