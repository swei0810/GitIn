import React from 'react'; 
import { Link } from 'react-router-dom'; 


class ExperienceItemShow extends React.Component {
    componentDidMount() {
        this.props.fetchExperienceItem(this.props.match.params.experienceItemId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.experienceItem.id != this.props.match.params.experienceItemId) {
            this.props.fetchExperienceItem(this.props.match.params.experienceItemId);
        }
    }


    render() {
        const {experienceItem} = this.props; 
        return (
            <div>
               <button onClick={() => openModal('edit experience')}>Edit</button>
                <h2>{experienceItem.title}</h2>
                {/* <h3>{experienceItem.company}</h3> */}
                {/* add more here */}
                <h4>{experienceItem.location}</h4>
                <p>{experienceItem.description}</p> 
            </div> 
        )
    }



}

export default ExperienceItemShow