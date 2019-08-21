import React from "react";
import loader from "../../Assets/loader.gif";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    const { data } = this.props.state.USER_PROFILE_REDUCER;
    this.userRepositories = data.userRepositories;
    this.userProfileInformation = data.userProfileInformation;
  }

  getStars() {
    let totalStars = 0;
    this.userRepositories.forEach(repo => {
      totalStars += repo.stargazers_count;
    });
    return totalStars;
  }

  getForks() {
    let totalForks = 0;
    this.userRepositories.forEach(repo => {
      totalForks += repo.forks_count;
    });
    return totalForks;
  }

  getLanguages() {
    let languages = [];
    this.userRepositories.forEach(repo => {
      languages.push(repo.language);
    });
    return languages
      .filter(function(elem, index, self) {
        return index == self.indexOf(elem);
      })
      .filter(Boolean);
  }

  joinDate() {
    return this.formatDate(this.userProfileInformation.created_at);
  }

  lastUpdateDate() {
    return this.formatDate(this.userProfileInformation.updated_at);
  }

  formatDate(s) {
    return new Date(s).toLocaleDateString([], {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  }

  formatTime(t) {
    return new Date(t).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  render() {
    const { isFetching } = this.props.state.USER_PROFILE_REDUCER;
    const {
      userProfileInformation
    } = this.props.state.USER_PROFILE_REDUCER.data;

    if (isFetching) {
      return (
        <div>
          <img src={loader} />
        </div>
      );
    }
    return (
      <div>
        <div className="flex flex-row pd-2em black-border">
          <div className="flex flex-col black-border pd-2em left-container">
            <div className="username-profile-picture-wrapper flex flex-row">
              <div className="profile-picture-wrapper">
                <img
                  src={userProfileInformation.avatar_url}
                  className="profile-picture"
                />
              </div>
              <div className="m-l-1em username-wrapper">
                <p className="username-txt">{userProfileInformation.name}</p>
                <p className="portfolio-txt">{userProfileInformation.blog}</p>
              </div>
            </div>
            <div className="git-statistics">
              <div className="stats-list-item">
                <h3 className="stats-list-item-heading">Followers</h3>
                <p className="stats-list-item-paragraph">
                  {userProfileInformation.followers}
                </p>
              </div>
              <div className="stats-list-item">
                <h3 className="stats-list-item-heading">Following</h3>
                <p className="stats-list-item-paragraph">
                  {userProfileInformation.following}
                </p>
              </div>
              <div className="stats-list-item">
                <h3 className="stats-list-item-heading">public Repositories</h3>
                <p className="stats-list-item-paragraph">
                  {userProfileInformation.public_repos}
                </p>
              </div>
              <div className="stats-list-item">
                <h3 className="stats-list-item-heading">Stars Received</h3>
                <p className="stats-list-item-paragraph">{this.getStars()}</p>
              </div>
              <div className="stats-list-item">
                <h3 className="stats-list-item-heading">Forks by users</h3>
                <p className="stats-list-item-paragraph">{this.getForks()}</p>
              </div>
            </div>
            <div className="user-lang-statistics">
              {this.getLanguages().map(lang => {
                return <span key={lang}>{lang}</span>;
              })}
            </div>
            <div className="geolocation-statistics">
              <div className="m-b-1em joined">
                <h4>Joined</h4>
                <p>{this.joinDate()}</p>
              </div>
              <div className="m-b-1em location">
                <h4>Location</h4>
                <p>{userProfileInformation.location}</p>
              </div>
              <span>Last Updated on {this.lastUpdateDate()}</span>
            </div>
          </div>
          <div className="flex flex-col black-border" />
        </div>
      </div>
    );
  }
}
