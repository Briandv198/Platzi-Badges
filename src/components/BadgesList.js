import React from "react";
import { Link } from "react-router-dom";

import Gravatar from "./Gravatar";

import "./styles/badgesList.css";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");

  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const results = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLocaleLowerCase());
    });

    setFilteredBadges(results);
  }, [badges, query]);

  return { setQuery, filteredBadges, query };
}

function BadgesList(props) {
  const badges = props.badges;

  const { setQuery, filteredBadges, query } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <h3>No encontramos nungun Badge</h3>
      </div>
    );
  }

  return (
    <div className="badges__list">
      <div className="filter">
        <label>Filter Badges</label>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul>
        {filteredBadges
          .map((badge) => {
            return (
              <Link to={`/badges/${badge.id}`}>
                <li key={badge.id}>
                  <Gravatar email={badge.email} alt="avatar" />
                  <div className="info">
                    <p className="list-name">
                      <span className="text-light">{badge.firstName} </span>
                      <span className="text-bold">{badge.lastName}</span>
                    </p>
                    <p className="list-social">
                      <span className="twitter"></span>@{badge.twitter}
                    </p>
                    <p className="job-title">{badge.jobTitle}</p>
                  </div>
                </li>
              </Link>
            );
          })
          .reverse()}
      </ul>
    </div>
  );
}

export default BadgesList;
