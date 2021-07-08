import firebase from 'firebase';

class AuthService {
  login(providerName) {
    // provicerName 구글, 페이스북, 트위터
    const authProvider = new firebase.auth[`${providerName}AutoProvicder`]();
    return firebase.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
