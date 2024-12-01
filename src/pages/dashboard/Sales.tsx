import { Container, Text } from '@mantine/core'
import React from 'react'
import TopSale from './sales/TopSale'
import ExpenseTable from './sales/ExpenseTable'

interface Props {
    
}

const Sales: React.FC<Props> = () => {
    return (
        <Container size="lg" mt="60">
            <Text mb={40}>
                <span style={{fontWeight:'bold',fontSize: '24px',}}>Sales Revenue</span>
                <br/>
                overview of designs and automation emails and social media marketing campaign .
            </Text>
            <TopSale/>
            <ExpenseTable/>
        </Container>
    )
}

export default Sales
