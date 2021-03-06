import React from 'react';
import { Text, Box, Link } from '@chakra-ui/core';
import { shortEther } from 'utils';
import CountDown from './CountDown';
import { DappMetaData } from 'types';

interface IStartTimer {
  startTime: number;
  accessTime: number;
  stakingLid: string;
  meta: DappMetaData;
}

const StartTimer: React.FC<IStartTimer> = ({
  startTime,
  accessTime,
  stakingLid,
  meta
}) => {
  return (
    <Box
      display="block"
      w="100%"
      mt="40px"
      mb="40px"
      px={['20px', '20px', 0]}
      maxW="1200px"
      ml="auto"
      mr="auto"
      textAlign="center"
    >
      <Text fontSize={['28px', '36px']} fontWeight="bold">
        {`Your ${meta.tokenSymbol} Access Starts In:`}
      </Text>
      <CountDown expiryTimestamp={accessTime} />
      <Text>
        Stake more LID at{' '}
        <Link color="lid.brand" href="https://stake.lid.sh">
          stake.lid.sh
        </Link>{' '}
        to get access sooner.
      </Text>
      <Text>
        Your {shortEther(stakingLid)} staked LID gets you access{' '}
        {((startTime + 960000 - accessTime) / 60000).toFixed(0)} minutes early.
      </Text>
    </Box>
  );
};

export default StartTimer;
