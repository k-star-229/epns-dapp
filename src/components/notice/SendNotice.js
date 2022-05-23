// import {
//   OnSubscribeModal,
//   NotificationItem,
//   utils,
//   api,
//   channels,
//   EmbedSDK
// } from "@epnsproject/frontend-sdk-staging";
import EpnsSDK, { InfuraSettings, NetWorkSettings, EPNSSettings }from "@epnsproject/backend-sdk-staging";
import { Form, Button, Col } from 'react-bootstrap';
import { CHANNEL_PK } from "../../config";
import { useState } from "react";

  

const SendNotice = () => {

  const [ recipients, setRecipients ] = useState(""); // the recipients of the notification
  const [ pushNotificationTitle, setPushNotificationTitle] = useState(""); // push notification title
  const [ pushNotificationBody, setPushNotificationBody ] = useState(""); //push notification body
  const [ notificationTitle, setNotificationTitle ] = useState(""); // the title of the notification
  const [ notificationBody, setNotificationBody ] = useState(""); // the body of the notification
  const [ notificationType, setNotificationType ] = useState(""); // 1 - for broadcast, 3 - for direct message, 4 - for subset.
  const [ link, setLink ] = useState("");
  
  // Initialise the SDK

  const  epnsSdk = new EpnsSDK(CHANNEL_PK);
  const sendNotification = async (event) => {
    event.preventDefault();
    // get the subscribers to your channel
    const response = await epnsSdk.sendNotification(
      recipients,
      pushNotificationTitle,
      pushNotificationBody,
      notificationTitle,
      notificationBody,
      parseInt(notificationType),
      link,
    );
  }

  return (
    <div className="container">
      <div className="col-md-4 col-sm-12 m-5">
        <Form onSubmit={sendNotification}>
          <Form.Group as={Col} className="mb-1" controlId="form01">
            <Form.Label>Recipients</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="0xD623dd87131062c6C91487f721F0B23CD472B758"
              onChange={(e) => setRecipients(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-1" controlId="form02">
            <Form.Label>PushNotificationTitle</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Backend SDK Test"
              onChange={(e) => setPushNotificationTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-1" controlId="form03">
            <Form.Label>PushNotificationBody</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="This is test for EPNS Backend SDK"
              onChange={(e) => setPushNotificationBody(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-1" controlId="form04">
            <Form.Label>NotificationTitle</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Backend SDK Test"
              onChange={(e) => setNotificationTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-1" controlId="form05">
            <Form.Label>NotificationBody</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="This is test for [d:EPNS Backend SDK]"
              onChange={(e) => setNotificationBody(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-1" controlId="form06">
            <Form.Label>NotificationType</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder=""
              onChange={(e) => setNotificationType(e.target.value)}
              />
          </Form.Group>
          <Form.Group as={Col} className="mb-1" controlId="form07">
            <Form.Label>Link</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="<https://epns.io>"
              onChange={(e) => setLink(e.target.value)}
            />
          </Form.Group>
          <Button className="w-100" variant="primary" type="submit">
            Send Notification
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default SendNotice;
