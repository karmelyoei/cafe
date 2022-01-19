import Body from "./components/Body";
import "./App.css";
import { Widget } from "@morphysm/react-chat-widget";


const App = ({
  websocketURL,
  audioEnabled,
  userIcon,
  closeIcon,
  sendIcon,
  widgetIcon,
}) => {
  return (
    <div className="App">
      <Body />
      <Widget
        websocketURL={websocketURL}
        audioEnabled={audioEnabled}
        userIcon={userIcon}
        closeIcon={closeIcon}
        sendIcon={sendIcon}
        widgetIcon={widgetIcon}
      />
    </div>
  );
};

export default App;
