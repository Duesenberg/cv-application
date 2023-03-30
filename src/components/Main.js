/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import TitleSection from './TitleSection';
import PersInfoSection from './PersInfoSection';
import EduSection from './EduSection';
import WorkSection from './WorkSection';
import SkillSection from './SkillSection';
import ProjectsSection from './ProjectsSection';
import LeadershipSection from './LeadershipSection';
import AchievementSection from './AchievementSection';
import '../styles/Main.css';

class Main extends Component {
  render() {
    const { applications, state, editCVTitle, editPersonalInfo,
      addDegree, editDegree, addDegreeInfo, deleteDegree, addWork, 
      addWorkInfo, deleteWork, editWork, detailAdd, 
      addDetailInfo } = this.props;

    return (
      <div className="main">
        { applications.map((application) => {
          if (application.id === state.selectedApplication) {
            return (
              <div 
                className='container'
                key={(application.id)}>
                  <TitleSection 
                    application={application}
                    editCVTitle={editCVTitle} />
                  <PersInfoSection 
                    application={application} editPersonalInfo={editPersonalInfo} />
                  <EduSection 
                    application={application} addDegree={addDegree} 
                    editDegree={editDegree} addDegreeInfo={addDegreeInfo}
                    deleteDegree={deleteDegree} />
                  <WorkSection 
                    application={application} addWork={addWork} 
                    addWorkInfo={addWorkInfo} deleteWork={deleteWork}
                    editWork={editWork} detailAdd={detailAdd}
                    addDetailInfo={addDetailInfo} />
                  <SkillSection skills={application.skills} />
                  <ProjectsSection projects={application.projects} />
                  <LeadershipSection leadership={application.leadership} />
                  <AchievementSection achievements={application.achievements} />
              </div>
            )
          }
        })}
      </div>
    );
  }
}

export default Main;
