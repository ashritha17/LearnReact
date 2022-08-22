import React from 'react'
import { Grommet, Page, PageContent, Header, Text, Menu, Box, Avatar, Button } from 'grommet'
import { User, SubtractCircle, AddCircle } from 'grommet-icons'
import { hpe as theme } from 'grommet-theme-hpe'
import Counter from './Counter'
import NoteState from '../context/NoteState'


export default () => {
    
  return (
    <NoteState>
    <Grommet full theme={theme}>
      <Page>
        <PageContent border={{"side":"bottom"}} background={{"color":"active"}}>
          <Header align="center" direction="row" flex={false} justify="between" gap="medium">
            <Text weight="bold">
              Reewild
            </Text>
            <Menu icon={<User />} items={[{"label":"sign out"}]} />
          </Header>
        </PageContent>
        <PageContent background={{"color":"active"}}>
          <Text textAlign="center" margin={{"top":"large"}} size="xlarge" truncate={false} weight="bold">
            Select your monthly plan
          </Text>
          <Text textAlign="center" margin={{"top":"medium"}} size="large">
            Plant trees and offset your carbon
          </Text>
          <Text textAlign="center" margin={{"top":"small"}} size="large" weight="bold">
            Family Plan
          </Text>
          <PageContent>
            <Box align="center" justify="center" margin={{"top":"medium"}} height="medium" width="100%" direction="row" background={{"color":"background-front"}}>
              <Box align="center" justify="center" pad="large" width="xlarge" height="100%">
                <Box align="center" justify="center" height="xlarge" width="large">
                  <Text margin={{"bottom":"large","right":"medium"}} weight="bold" size="xlarge">
                    Create your family plan
                  </Text>
                </Box>
                <Box align="center" justify="center" direction="row" gap="medium" height="large" width="large">
                  <Box align="center" justify="center" direction="row">
                    <Avatar align="center" flex={false} justify="center" overflow="hidden" round="full" src="https://flyclipart.com/thumb2/icon-human-icon-with-png-and-vector-format-for-free-unlimited-874003.png" margin={{"left":"none","right":"small"}} size="large" />
                    <Box align="center" justify="center">
                      <Text textAlign="start" size="medium">
                        Adults
                      </Text>
                      <Text size="medium" textAlign="center">
                        €5.60 each
                      </Text>
                    </Box>
                  </Box>
                  <Counter/>
                </Box>
                <Box align="center" justify="center" direction="row" gap="medium" margin={{"top":"large"}} height="large" width="large">
                  <Box align="center" justify="center" direction="row">
                    <Avatar align="center" flex={false} justify="center" overflow="hidden" round="full" src="https://flyclipart.com/thumb2/icon-human-icon-with-png-and-vector-format-for-free-unlimited-874003.png" margin={{"left":"none","right":"small"}} size="large" />
                    <Box align="center" justify="center">
                      <Text textAlign="start" size="medium">
                        Childern
                      </Text>
                      <Text size="medium" textAlign="center">
                        €2.80 each
                      </Text>
                    </Box>
                  </Box>
                  <Counter/>
                </Box>
                <Box align="center" justify="center" direction="row" gap="medium" margin={{"top":"large"}} height="large" width="large">
                  <Box align="center" justify="center" direction="row">
                    <Avatar align="center" flex={false} justify="center" overflow="hidden" round="full" src="https://as1.ftcdn.net/v2/jpg/03/11/11/68/1000_F_311116804_SJTgvrqBPOH0cDHG1f8NLqaalxcRL8Me.jpg
" margin={{"left":"none","right":"small"}} size="large" />
                    <Box align="center" justify="center">
                      <Text textAlign="start" size="medium">
                        Pets
                      </Text>
                      <Text size="medium" textAlign="center">
                        €0.60 each
                      </Text>
                    </Box>
                  </Box>
                  <Counter/>
                </Box>
              </Box>
              <Box align="center" justify="center" width="large" height="100%" pad="medium">
                <Box align="center" justify="center" height="xlarge" width="large">
                  <Text textAlign="start" size="xlarge" weight="normal" margin={{"top":"medium"}}>
                    Your monthly donation will have this much impact:
                  </Text>
                </Box>
                <Box align="stretch" justify="start" direction="row" gap="small" background={{"color":"active"}} margin={{"top":"large"}} height="xlarge" width="large" pad="medium" alignSelf="center">
                  <Avatar align="center" flex={false} justify="center" overflow="hidden" round="full" src="https://offsetearth.imgix.net/app/uploads/20190723144709/trans-tree%402x.png?w=140&auto=format" size="medium" margin={{"bottom":"medium"}} />
                  <Box align="center" justify="center" direction="column">
                    <Text weight="bold" size="large" textAlign="start">
                      Trees planted
                    </Text>
                    <Text size="large" textAlign="start">
                      every month
                    </Text>
                  </Box>
                </Box>
                <Box align="stretch" justify="start" direction="row" gap="small" background={{"color":"active"}} margin={{"top":"large"}} height="xlarge" width="large" pad="medium">
                  <Avatar align="center" flex={false} justify="center" overflow="hidden" round="full" src="https://offsetearth.imgix.net/app/uploads/20190723144711/trans-co2%402x.png?w=140&auto=format" size="medium" />
                  <Box align="center" justify="center" direction="column">
                    <Text weight="bold" size="large" textAlign="start">
                      Tonnes CO2
                    </Text>
                    <Text size="large" textAlign="start">
                      reduced every year
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box align="center" justify="center" direction="column" pad="small" margin={{"bottom":"none"}}>
              <Box align="center" justify="center" direction="row" pad="medium" gap="large">
                <Text textAlign="center" weight="bold" size="xlarge">
                  Monthly Total
                </Text>
                <Text size="xlarge" weight="bold">
                  €0.00
                </Text>
              </Box>
              <Button label="Continue to pay" size="large" color="validation-critical" type="button" plain={false} primary />
            </Box>
          </PageContent>
        </PageContent>
      </Page>
    </Grommet>
    </NoteState>
  )
}