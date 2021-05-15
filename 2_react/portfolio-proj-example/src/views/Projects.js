import React from 'react';
import SingleProject from '../components/SingleProject';

const Projects = () => {
    return(
        <div>
            <h4>This is the projects component</h4>
            <SingleProject name={"Window Wizard"} description={"College student window washing"}/>
            <SingleProject name={"Puppy Rescue"} description={"Find a foster family for puppies"}/>
            <SingleProject name={"Restroom Rater"} description={"Ratings for public restrooms"}/>
        </div>
    )
}

export default Projects;