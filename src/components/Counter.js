import React, { useState } from 'react';
import { Grommet, Page, PageContent, Header, Text, Menu, Box, Avatar, Button } from 'grommet'
import { User, SubtractCircle, AddCircle } from 'grommet-icons'
import { hpe as theme } from 'grommet-theme-hpe'
import { useContext } from 'react';
import NoteContext from '../context/noteContext';

export default () =>  {
    const a = useContext(NoteContext);
    return (
       
        
                            <Box align="center" justify="center" direction="row">
                                <SubtractCircle onClick={()=>a.setCount(a.count-1)} size="large" color="active-text" />
                                <Text margin={{"left":"small","right":"small"}} size="xlarge">
                                {count}
                                </Text>
                                <AddCircle onClick={()=>a.setCount(a.count+1)} size="large" color="brand" />
                            </Box>




    )}
