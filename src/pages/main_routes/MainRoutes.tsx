import {Switch, Route, Redirect} from "react-router-dom";
import Chat from "../chat/Chat";


const MainRoutes = ({socket}:any) => {
  return (
    <>
      <Switch>
        <Route path="/chat">
          <Chat/>
        </Route>
        <Route path="/">
          <Redirect push to="/chat" />
        </Route>
      </Switch>
    </>
  )
}

export default MainRoutes