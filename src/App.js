import "./App.css"
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed/ChatFeed";
import Login from "./components/Login/Login";

const App = () => {

      // if(!localStorage.getItem("username")) return <Login/>

    return (
        <ChatEngine
        height="100vh"
        projectID='f00843a7-f6b1-4261-911b-c4a361524ef5'
        userName='admin'
        userSecret='1234'
        renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} /> }
        onNewMessage = { ()=> new Audio("https://chat-engine-assets.s3.amazonaws.com/click.mp3").play() }
      />
    );
};

export default App;