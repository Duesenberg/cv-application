/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import TitleSection from './TitleSection';
import PersInfoSection from './PersInfoSection';
import EduSection from './EduSection';
import WorkSection from './WorkSection';
import SkillSection from './SkillSection';
import '../styles/Main.css';

class Main extends Component {
  render() {
    const { applications } = this.props;

    return (
      <div className="main">
        { applications.filter((application) => {
          if (application.id === application.selectedApplication) {
            return (
              <div className='container'>
                <TitleSection application={application} />
                <PersInfoSection application={application} />
                <EduSection application={application} />
                <WorkSection application={application} />
                <SkillSection skills={application.skills} />
              </div>
            )
          }
        })}
      </div>
    );
  }
}

export default Main;
