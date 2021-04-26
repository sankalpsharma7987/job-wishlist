//SCSS Styling

import './styles/base.scss';
import './styles/header.scss';
import './styles/element.scss';
import './styles/form-modal.scss';
import './styles/job-list.scss';

//Media Queries


//Javascript

import {showFormModal,hideFormModal} from './js/showFormModal';
import {clearUI} from './js/lib/misc/clearUI';
import {generateId} from './js/lib/misc/generateId';
import {generateRandomColor} from './js/lib/misc/generateRandomColor'
import {getJobInfo} from './js/getJobInfo';
import {fetchJobList} from './js/lib/addJobList/fetchJobList';
import {postJobList} from './js/lib/addJobList/postJobList';
import {createJobList} from './js/lib/addJobList/createJobList';
import {updateJobListClass} from './js/lib/addJobList/addJobList';
import {updateJobSummary} from './js/lib/addJobList/updateJobSummary';
import {updateErrorUI} from './js/lib/error/updateErrorUI';
import {loadJobList} from './js/lib/addJobList/loadJobList';

import {removeJobList} from './js/lib/deleteJobList/removeJobList';
import {deleteJobInfo} from './js/deleteJobInfo';

export {showFormModal,hideFormModal,clearUI,generateId,generateRandomColor,updateErrorUI,getJobInfo,fetchJobList,postJobList,createJobList,updateJobListClass,updateJobSummary,
    loadJobList,removeJobList,deleteJobInfo};

