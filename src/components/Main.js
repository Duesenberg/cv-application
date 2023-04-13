/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import TitleSection from './TitleSection';
import PersInfoSection from './PersInfoSection';
import EduSection from './EduSection';
import WorkSection from './WorkSection';
import SkillSection from './SkillSection';
import ProjectsSection from './ProjectsSection';
import ReactToPrint from 'react-to-print';
import MainPrint from './print/MainPrint';
import '../styles/Main.css';
import '../styles/MainPrint.css';

class Main extends Component {
  render() {
    const { applications, state, editCVTitle, editPersonalInfo,
      addDegree, editDegree, addDegreeInfo, deleteDegree, addWork, 
      addWorkInfo, deleteWork, editWork, detailAdd, 
      addDetailInfo, detailEdit, deleteDetail, addSkill, 
      addSkillInfo, editSkill, deleteSkill, addProject, 
      addProjectInfo, editProject, deleteProject, toLocalStorage } = this.props;

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
                    addDetailInfo={addDetailInfo} detailEdit={detailEdit}
                    deleteDetail={deleteDetail} />
                  <SkillSection 
                    application={application} addSkill={addSkill} 
                    addSkillInfo={addSkillInfo} editSkill={editSkill}
                    deleteSkill={deleteSkill} />
                  <ProjectsSection 
                    application={application} addProject={addProject} 
                    addProjectInfo={addProjectInfo} editProject={editProject}
                    deleteProject={deleteProject} />
                  <div className='actions-buttons'>
                    <button 
                      className='save' onClick={toLocalStorage}>Save</button>
                    <div>
                      <ReactToPrint
                        trigger={() => {
                          // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                          // to the root node of the returned component as it will be overwritten.
                          return <button className='print'>Print</button>;
                        }}
                        content={() => this.componentRef}
                      />
                      <div 
                        className='print-comp' 
                        ref={el => (this.componentRef = el)}>
                          <MainPrint applications={applications} state={state} />
                      </div>
                    </div>
                  </div>
              </div>
            )
          }
        })}
      </div>
    );
  }
}

export default Main;
