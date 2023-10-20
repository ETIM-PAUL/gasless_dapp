import { useContract, useContractRead } from '@thirdweb-dev/react';
import React, { useEffect, useState } from 'react'
import counterABI from './abi';
import { contractAddress } from './utils';

const Caller = () => {
  const [caller, setCaller] = useState(0)

  const { contract } = useContract(contractAddress, counterABI);
  const { data, isLoading, error } = useContractRead(contract, "lastCaller", []);
  useEffect(() => {
    setCaller(data)
  }, [data])

  return (
    <button>
      Last account to change counter -  {isLoading ? "Loading" : caller}
    </button>
  )
}

export default Caller