    
import React from "react"
import { withRouter } from 'react-router-dom'; 
import ExperienceItemIndex from "../experience_items/experience_item_index";

class Profile extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <>
                <ExperienceItemIndex />
            </>
        )
    }
}
export default withRouter(Profile)