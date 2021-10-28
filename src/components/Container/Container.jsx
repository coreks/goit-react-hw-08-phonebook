import s from '../Container/Container.module.css';

const MainContainer = ({ children }) => (
  <div className={s.container}>{children}</div>
);

export default MainContainer;
