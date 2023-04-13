/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import PersInfoPrint from './PersInfoPrint';
import EduPrint from './EduPrint';
import WorkSecPrint from './WorkSecPrint';
import SkillPrint from './SkillPrint';
import ProjSectPrint from './ProjSectPrint';

class MainPrint extends Component {
  render() {
    const { applications, state } = this.props;

    return (
      <div className="main-print">
        { applications.map((application) => {
          if (application.id === state.selectedApplication) {
            return (
              <div 
                className='container'
                key={(application.id)}>
                  <PersInfoPrint application={application} />
                  <EduPrint application={application} />
                  <WorkSecPrint application={application} />
                  <SkillPrint application={application} />
                  <ProjSectPrint application={application} />
              </div>
            )
          }
        })}
      </div>
    );
  }
}

export default MainPrint;
