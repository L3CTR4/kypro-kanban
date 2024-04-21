import Button from "../Button/Button";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <Button
              link="#popNewCard"
              text="Создать новую задачу"
              id="btnMainNew"
              className="header__btn-main-new _hover01"
            />

            <a href="#user-set-target" className="header__user _hover02">
              Ivan Ivanov
            </a>
            <div className="header__pop-user-set pop-user-set" id="user-set-target">
              {/* <!-- <a href="">x</a> --> */}
              <p className="pop-user-set__name">Ivan Ivanov</p>
              <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
              <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
              </div>
              <Button link="#popExit" text="Выйти" className="_hover03" />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;