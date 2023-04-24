export const addNote = (title, description) => {
  return {
    type: "add",
    payload: title,
  };
};

export const deleteNote = (id) => {
  return {
    type: "delete",
    payload: id,
  };
};

export const editdeleteNote = (id) => {
  return {
    type: "edit",
    payload: id,
  };
};

export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();    
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err });
    });
  }
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    });
  }
}
