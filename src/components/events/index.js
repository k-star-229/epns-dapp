import { Moralis} from 'moralis';
import { useEffect } from 'react';
import ABI from '../../contracts/BCProtocol.json';
import { CONTRACT_ADDRESS } from '../../config';

const Events = () => {

    const getEvents = () => {
        let options = {
            chainId: "80001",
            address: CONTRACT_ADDRESS,
            
        }
    }
    useEffect(() => {

    }, [])
    Moralis.Clould.run()
    return (
        <div>

        </div>
    )
}

export default Events;