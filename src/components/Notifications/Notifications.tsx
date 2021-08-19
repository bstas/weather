// @ts-ignore
import { NotificationManager } from "react-notifications";

const Notifications = (status: string): void => {
  switch (status) {
    case "success":
      NotificationManager.success("Search success", null, 3000);
      break;
    case "error":
      NotificationManager.error("Your city is not available", "Error", 3000);
      break;
    default:
      break;
  }
};

export default Notifications;
