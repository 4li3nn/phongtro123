/* eslint-disable react-hooks/exhaustive-deps */
const logo = "https://phongtro123.com/images/logo-phongtro.svg";
import { useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Button from "./../../components/Button";
import icons from "./../../utils/icons";
import { path } from "./../../utils/constant";
import * as actions from "../../store/actions";
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, { state: { flag } });
  });
  return (
    <div className="w-1100">
      <div className="w-full flex items-center justify-between ">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-[240px] h-[70px] object-contain"
          />
        </Link>
        <div className="flex items-center gap-1">
          {!isLoggedIn && (
            <div className="flex items-center gap-1">
              <small>Phongtro123.com xin chào</small>
              <Button
                textColor={"text-white"}
                bgColor={"bg-[#3961fb]"}
                onClick={() => goLogin(false)}
              >
                Đăng nhập
              </Button>
              <Button
                textColor={"text-white"}
                bgColor={"bg-[#3961fb]"}
                onClick={() => goLogin(true)}
              >
                Đăng kí
              </Button>
            </div>
          )}
          {isLoggedIn && (
            <div className="flex items-center gap-1">
              <small>Alien</small>
              <Button
                textColor={"text-white"}
                bgColor={"bg-red-700"}
                onClick={() => dispatch(actions.logout())}
              >
                Đăng xuất
              </Button>
            </div>
          )}
          <Button
            textColor={"text-white"}
            bgColor={"bg-secondary2"}
            IconAfter={icons.AiOutlinePlusCircle}
          >
            Đăng kí mới
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
