//SCSS Styling

import './styles/base.scss';
import './styles/header.scss';
import './styles/element.scss';
import './styles/form-modal.scss';
import './styles/job-list.scss';
import './styles/delete-button.scss';

//Media Queries


//Javascript

import {showFormModal,hideFormModal} from './js/lib/addJobList/formAddModalBehavior';
import {showDeleteFormModal,hideDeleteFormModal} from './js/lib/deleteJobList/formDeleteModalBehavior';
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
import {deleteJobList} from './js/lib/deleteJobList/deleteJobList';
import {deleteJobInfo} from './js/deleteJobInfo';

export {showFormModal,hideFormModal,showDeleteFormModal,hideDeleteFormModal,clearUI,generateId,generateRandomColor,updateErrorUI,getJobInfo,fetchJobList,postJobList,createJobList,updateJobListClass,updateJobSummary,
    loadJobList,removeJobList,deleteJobList,deleteJobInfo};

