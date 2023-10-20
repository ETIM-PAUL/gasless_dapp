import { useContract, useContractRead } from '@thirdweb-dev/react';
import React, { useEffect, useState } from 'react'
import counterABI from './abi';
import { contractAddress } from './utils';

const Counter = () => {
  const [count, setCount] = useState(0)
  const { contract } = useContract(contractAddress, counterABI);
  const { data, isLoading, error } = useContractRead(contract, "count", []);
  useEffect(() => {
    setCount(Number(data && data?._hex))
  }, [data])

  return (
    <button>
      counter is {count}
    </button>
  )
}

export default Counter