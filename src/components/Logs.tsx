import React, { useCallback } from 'react'
import { Box, Flex, Heading, Button, ControlBox } from '@chakra-ui/react'
import { API_REFETCH_INTERVAL } from '../constatns/api'
import { LogItem, LogItemContainerProps } from './LogItem'
import { ControlButton } from './ControlButton'

export type IntervalProp = number | null
export interface LogProps {
  interval: IntervalProp
  setInterval: (val: IntervalProp) => void
  logs: LogItemContainerProps[]
}

export const Logs: React.FC<LogProps> = ({ interval, setInterval, logs }) => {
  const onClickHandler = useCallback(() => {
    setInterval(interval ? null : API_REFETCH_INTERVAL)
  }, [setInterval, interval])

  return (
    <Box width="300px" mr="20px">
      <Flex
        pl="10px"
        mb="10px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading>Log</Heading>
        <ControlButton onClickHandler={onClickHandler} interval={interval} />
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
