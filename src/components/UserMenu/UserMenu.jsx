import s from 'components/UserMenu/UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={s.container}>
      <img
        src="http://simpleicon.com/wp-content/uploads/user1.png"
        alt="user-avatar"
        width="32"
        className={s.avatar}
      />
      <span className={s.text}>Welcome, {name}</span>
      <button
        type="button"
        className={s.button}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </button>
    </div>
  );
}

export default UserMenu;
