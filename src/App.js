import React from "react";

import Collapsible from "./components/Collapsible/Collapsible.js";
import Header from "./components/Collapsible/Header.js";
import Body from "./components/Collapsible/Body.js";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>App component</h1>
                <Collapsible>
                    <Header>Header section</Header>
                    <Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nam bibendum massa sed justo molestie vestibulum. Ut ac lacus lacus. 
                    Praesent hendrerit placerat ullamcorper. Mauris gravida, metus 
                    in hendrerit lobortis, mauris nunc volutpat ante, at venenatis q
                    uam libero ut dolor. Vestibulum feugiat, dui a sagittis vulputate, 
                    felis neque sagittis eros, vitae condimentum massa ex ut augue. 
                    Quisque et enim purus. Maecenas id dignissim ex. Pellentesque 
                    quis purus in augue faucibus volutpat posuere eget felis. Aliquam 
                    sed ligula nec mi ultrices consequat. Nunc velit est, condimentum 
                    eget ullamcorper a, malesuada vel ligula. Duis sit amet quam 
                    commodo, vulputate quam sit amet, tincidunt augue. Cras 
                    faucibus feugiat scelerisque. Integer consequat nibh sit amet 
                    nunc congue, ac iaculis risus ullamcorper. Proin rhoncus neque 
                    leo, ac porta purus egestas eget. Mauris ullamcorper cursus 
                    magna, at pulvinar orci convallis at.
                    </Body>
                </Collapsible>
            </div>
        );
    }
}

React.render(<App/>, document.body);