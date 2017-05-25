import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';
import './style.css';

const UsedByBg = ({ color }) => (
  <div className="used-by-bg">
    <svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 1440 380"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="Canvas" transform="translate(618 -3261)">
        <use
          xlinkHref="#path0_fill"
          transform="translate(-618 3261.5)"
          fill={color}
          id="used-by-bg"
        />
      </g>
      <defs>
        <path id="path0_fill" d="M 43.5 300.5L 0 35L 1440 0L 1371.5 379.5L 43.5 300.5Z" />
      </defs>
    </svg>
  </div>
);

const User = ({ logo, demo, site, title }) => (
  <a className="used-by-user" href={demo || site} target="_blank" rel="nofollow">
    <img className="used-by-user-image" src={logo} alt={title} />
  </a>
);

const UsedBy = ({ users }) => (
  <div className="used-by-wrapper">
    <div className="used-by">
      <UsedByBg color="#E7F6D8" />
      <div className="used-by-contents">
        <h2 className="used-by-title">Used by these fine folks:</h2>
        <div className="used-by-users">
          {users.map((user, idx) => <User key={idx} {...user} />)}
        </div>
      </div>
    </div>
    <Link to="/examples/" className="used-by-more-examples">
      See more examples…
    </Link>
  </div>
);

UsedBy.propTypes = {
  users: PropTypes.array,
};

export default UsedBy;
