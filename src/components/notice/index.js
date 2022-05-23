import {
    OnSubscribeModal,
    NotificationItem,
    utils,
    api,
    channels,
    EmbedSDK
} from "@epnsproject/frontend-sdk-staging";
import { useEffect, useState } from "react";
import { Container, Accordion, Badge } from "react-bootstrap";
import { WALLET_ADDRESS, BASE_URL } from "../../config";


const PAGINATION_PARAMS = {
  page: 1,
  itemsPerPage: 20,
};

const Notice = () => {

    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        api
        .fetchNotifications(
            WALLET_ADDRESS,
            PAGINATION_PARAMS.itemsPerPage,
            PAGINATION_PARAMS.page,
            BASE_URL
        )
        .then((notificationsData) => {
            const { count, results } = notificationsData || {};
            const response = utils.parseApiResponse(results);
            // console.log({ parsed: response });
            setNotifications(response);
        });
    }, notifications);

    const items = notifications.map((item, index) => {
        return (
            
            <Accordion.Item eventKey={index} className="mt-5">
                <Accordion.Header>
                    {console.log(item)}
                    <div className="d-flex channel">
                        <div>
                            <img width="20" src={item.icon} alt="" />
                        </div>
                        <div className="mx-3">
                            {item.app}                                                              
                        </div>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    {item.title}
                    <br />
                    {item.message}
                </Accordion.Body>
            </Accordion.Item>
        )
    });

    return (
        <Container>
            <Accordion alwaysOpen>
            {items}
            </Accordion>
        </Container>
    );
}

export default Notice;