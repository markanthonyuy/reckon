import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import {
  getCurrentValueInArray,
  getHighestValueInArray,
  getLowestValueInArray,
  getStartingValueInArray,
} from '../utils/helpers'

interface SummaryItemProps {
  [key: string]: number[]
}

interface SummaryProps {
  historicalData?: SummaryItemProps
}

export const Summary: React.FC<SummaryProps> = ({ historicalData }) => {
  return (
    <Flex width="calc(100% - 300px)" flexDirection="column">
      <Heading mb="20px">Summary</Heading>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Stock</Th>
              <Th>Starting</Th>
              <Th>Lowest</Th>
              <Th>Highest</Th>
              <Th>Current</Th>
            </Tr>
          </Thead>
          <Tbody>
            {historicalData &&
              Object.entries(historicalData)?.map(([stockName, price], i) => {
                return (
                  <Tr key={`{stockName}-${i}`}>
                    <Td>{stockName}</Td>
                    <Td>{getStartingValueInArray(price)}</Td>
                    <Td>{getLowestValueInArray(price)}</Td>
                    <Td>{getHighestValueInArray(price)}</Td>
                    <Td>{getCurrentValueInArray(price)}</Td>
                  </Tr>
                )
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  )
}
