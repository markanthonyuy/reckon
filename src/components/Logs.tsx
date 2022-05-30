import React from 'react'
import { Box, Flex, Heading, Button } from '@chakra-ui/react'
import { API_REFETCH_INTERVAL } from '../constatns/api'
import { LogItem, LogItemContainerProps } from './LogItem'

export type IntervalProp = number | null
export interface LogProps {
  interval: IntervalProp
  setInterval: (val: IntervalProp) => void
  logs: LogItemContainerProps[]
}

export const Logs: React.FC<LogProps> = ({ interval, setInterval, logs }) => {
  return (
    <Box width="300px" mr="20px">
      <Flex
        pl="10px"
        mb="10px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading>Log</Heading>
        <Button
          onClick={() => setInterval(interval ? null : API_REFETCH_INTERVAL)}
        >
          {interval ? 'Pause' : 'Resume'} Log
        </Button>
      </Flex>
      <Flex direction="column" h="80vh" overflowY="auto">
        {logs?.map((data, i) => (
          <LogItem
            updatedAt={data.updatedAt}
            logs={data.logs}
            key={`log-${i}`}
          />
        ))}
      </Flex>
    </Box>
  )
}
