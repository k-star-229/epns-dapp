import { channels } from "@epnsproject/frontend-sdk-staging";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import ALL_CHANNEL from './data.json';
import { BASE_URL, WALLET_ADDRESS } from "../../config";
import { Badge, Spinner } from "react-bootstrap";

const Channels = () => {

    const { library, active, account, chainId } = useWeb3React();

    const [isSubscribed, setIsSubscribed] = useState(false);
    const [items, setItems] = useState([]);

    const getChannel = async () => {
        let temp = []
        for (let channel of ALL_CHANNEL) {
            temp.push(await channels.getChannelByAddress(channel, BASE_URL))
        }
        console.log(temp);
        return temp;
    }

    useEffect(async () => {
       setItems(await getChannel())
    },[items.length])
    
    return (
        <div className="container mt-5">
            <div className="scroller">
            {items.length ? items.map(item => 
            <div className="channel">
                <div className="d-flex">
                    <div>
                        <img width="100" src={item.icon} alt="" />
                    </div>
                    <div className="mx-3">
                        <div>
                            <div className="channel-name mb-5">
                                {item.name}
                            </div>
                            <div className="d-flex">
                                <img src="/img/people.svg" alt="" />
                                <div className="mx-3">
                                    <Badge pill bg="info">{ item.memberCount}</Badge>
                                </div>
                                <div className="mx-5">
                                    <Badge pill bg="info">{ item.channel }</Badge>
                                </div>
                                <button id={item.channel}
                                    className="btn btn-danger mx-5"
                                    onClick={() => {
                                        isSubscribed
                                        ? channels.optOut(
                                            library.getSigner(WALLET_ADDRESS),
                                            item.channel,
                                            "80001",
                                            WALLET_ADDRESS,
                                            {baseApiUrl: BASE_URL}
                                            )
                                        : channels.optIn(
                                            library.getSigner(WALLET_ADDRESS),
                                            item.addr,
                                            "80001",
                                            WALLET_ADDRESS,
                                            {baseApiUrl: BASE_URL, onSuccess: console.log("success")}
                                            );
                                    }}
                                >
                                    {!isSubscribed ? "Opt In" : "Opt Out"}
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>) : <Spinner animation="border" variant="info" />}
            </div>
        </div>
        
    )
}

export default Channels;