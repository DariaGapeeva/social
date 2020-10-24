import React, { useEffect } from 'react';
import BoxFriends from './BoxFriends';
import { connect } from 'react-redux';

import { getFriendsThunkcreator } from './../../../redux/usersPageReducer';

const BoxFriendsContainer = (props) => {
  useEffect(() => {
    props.getFriendsThunkcreator(props.pageSize, props.currentPage);
  }, []);

  return <BoxFriends followedUsers={props.followedUsers} />;
};

const mapStateToProps = (state) => {
  return {
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    followedUsers: state.usersPage.friends.filter((user, index) => index !== 4),
  };
};

export default connect(mapStateToProps, { getFriendsThunkcreator })(
  BoxFriendsContainer
);
