import React from 'react';

function RecentPosts({ front_txt, behind_txt }) {
  return (
    <li className="recent-post">
      <div>
        <span>{front_txt}</span> {behind_txt}
      </div>
    </li>
  );
}

export default RecentPosts;
