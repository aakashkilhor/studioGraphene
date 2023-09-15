import React from 'react'
import Form from '../../common/Form'
import { Box } from '@mui/material'
import styles from './styles'

const ContactUs = () => {
  return (
    <Box sx={styles.container}>
      <Box>
        Get news about articles and updates in your inbox
      </Box>
    <Form/>
    </Box>
  )
}

export default ContactUs