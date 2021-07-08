import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
  login(providerName) {
    // provicerName 구글, 페이스북, 트위터
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
  logout() {
    firebase.auth().signOut();
  }
  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
