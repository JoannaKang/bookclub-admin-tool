import * as React from 'react'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'

import { CreateReviewForm } from './Component/CreateReview'

import { LoginContext } from '../../App'

export const Review: React.FC<any> = (): JSX.Element => {
  const [viewmode, setViewmode] = React.useState('')

  return (
    <LoginContext.Consumer>
      {loginInfo => (
        <>
          {console.log(viewmode)}

          {viewmode === 'EDIT' && (
            <CreateReviewForm loginInfo={loginInfo} setViewmode={setViewmode} />
          )}
          {viewmode === '' && (
            <Button variant="contained" onClick={() => setViewmode('EDIT')}>
              Create new review
            </Button>
          )}
        </>
      )}
    </LoginContext.Consumer>
  )
}
