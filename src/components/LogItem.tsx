import React from 'react'
import { Box, Text } from '@chakra-ui/react'

export interface LogItem {
  code: string
  price: number
}

export interface LogItemContainerProps {
  updatedAt?: Date
  logs?: LogItem[]
}

export const LogItem: React.FC<LogItemContainerProps> = ({
  logs,
  updatedAt,
}) => {
  return (
    <Box marginY="10px" paddingX="10px">
      <Text fontSize="12px">
        Updates for {updatedAt?.toLocaleString()?.replaceAll('/', '-')}
      </Text>
      {!!logs?.length &&
        logs?.map(({ code, price }, i) => (
          <Text fontSize="12px" key={`log-item-${updatedAt?.getTime()}-${i}`}>
            {code}: {price}
          </Text>
        ))}
    </Box>
  )
}
