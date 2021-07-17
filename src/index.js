import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import CardRepository from './service/card_repository';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';

const authService = new AuthService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();

/* const FileInput = <ImageFileInput {...props} imageUploader={imageUploader} />;
위와 같이 작성하지 않은 이유 : 컴포넌트 자체를 전달하게 되면 나중에 oncClick이라던지 다양한 prop을 전달하고 싶다면
사용하는 사람이 더이상 컴포넌트를 설정해서 다른 prop을 전달할 수가 없어 확장성이 떨어진다.
때문에 한단계 감싸는 컴포넌트로 사용자가 원하는 prop을 전달해 확장 가능한 컴포넌트로 사용할 수 있도록 작성하는 것이다.*/
/* 부모를 통해서 계속해서 전달, 전달, 전달... 하는 과정이 필요할 때 아래와 같이 작성해서 
여러 컴포넌트에서 수정하지 않고 한번만 변경해주면 모든 컴포넌트에서 반영되기 때문에 좀 더 간편하게 사용 가능하다.*/
const FileInput = (props) => <ImageFileInput {...props} imageUploader={imageUploader} />;

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
    />
    {/* 전달하는 props가 컴포넌트 props일때는 보통 첫글자 대문자로 시작한다. */}
  </React.StrictMode>,
  document.getElementById('root')
);
