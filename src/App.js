import Image from "./components/layout/image";
import Flex from "./components/layout/Flex";
import "./index.css";
import List from "./components/layout/List";
import ListItem from "./components/layout/ListItem";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="max-w-container mx-auto bg-red-500">
          <Flex>
            <div className="w-3/12">
              <Image imagesrc="./assets/logo.png" />
            </div>
            <div className="w-9/12">
              <List className="flex gap-2">
                <ListItem itemname="Home" />
                <ListItem itemname="About" />
                <ListItem itemname="Service" />
                <ListItem itemname="Contact" />
              </List>
            </div>
          </Flex>
        </div>
      </nav>
    </div>
  );
}

export default App;
