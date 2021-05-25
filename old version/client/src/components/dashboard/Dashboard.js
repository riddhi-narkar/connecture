import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCurrentProfile } from '../../actions/profile';
import './Dashboard.css';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className = 'flex-container'>
        {/* <h1 className = "headDashboard">Connecture</h1> */}
        <p className = "welcomeDashboard"> Hello {user && user.name} !</p>

        {profile !== null ? (
          <Fragment>has</Fragment>
        ) : (
          <Fragment>
              <p className = "welcomeDashboard"> You've almost made it !  Quickly setup your profile and start using <span className = 'spanStyle'>Connecture</span> !</p>
              <Link to='/create-profile'>
                <div className = 'buttonDiv'>
                  
                    Create my Connecture Profile
                  
                </div>
              </Link>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
