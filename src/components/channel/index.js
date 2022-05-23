import {
    OnSubscribeModal,
    NotificationItem,
    utils,
    api,
    channels,
    EmbedSDK
} from "@epnsproject/frontend-sdk-staging";
import { useEffect, useState } from "react";
import { Accordion, Button, Container, Badge } from "react-bootstrap";


// const WALLET_ADDRESS = "0xB9F97B48a889e6164537A4B8E39bA2FB281B7462";
// const PAGINATION_PARAMS = {
//   page: 1,
//   itemsPerPage: 20,
// };

const BASE_URL = "https://backend-kovan.epns.io/apis";
const CHANNEL_ADDRESS = "0xB9F97B48a889e6164537A4B8E39bA2FB281B7462";

const Channel = () => {

    const [ data, setChannel ] = useState(null);
    const [ active, setActive ] = useState(false);
    useEffect(() => {
        channels
        .getChannelByAddress(CHANNEL_ADDRESS, BASE_URL)
        .then((data) => {
            setChannel(data);
            setActive(true);
        });
    }, [active]);

    return (
        <Container className="mt-5">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <div className="d-flex channel">
                            <div>
                                <img width="50" src={data && data.icon} alt="" />
                            </div>
                            <div className="channel-name mx-3">
                                <div className="d-flex">
                                    <img src="/img/people.svg" alt="" />
                                    <div className="mx-3">
                                        <Badge pill bg="info">{data && data.memberCount}</Badge>
                                    </div>
                                </div>
                                {data && data.name}                                    
                            </div>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        This is test channel
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
}

export default Channel;