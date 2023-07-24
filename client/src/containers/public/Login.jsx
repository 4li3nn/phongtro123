/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { InputForm, Button } from "../../components";
import { useLocation, useNavigate } from "react-router-dom";
import * as actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const [isRegister, setIsRegister] = useState(location.state?.flag);
  const [invalidFields, setInvalidFields] = useState([]);
  const [payload, setPayload] = useState({
    phone: "",
    password: "",
    name: "",
  });
  useEffect(() => setIsRegister(location.state?.flag), [location.state?.flag]);
  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn]);

  const handleSubmit = async () => {
    let finalPayload = isRegister
      ? payload
      : {
          phone: payload.phone,
          password: payload.password,
        };
    let invalids = validate(finalPayload);
    if (invalids === 0) {
      isRegister
        ? dispatch(actions.register(finalPayload))
        : dispatch(actions.login(finalPayload));
    }
  };

  const validate = (payload) => {
    let invalids = 0;
    let fields = Object.entries(payload);

    fields.forEach((field) => {
      if (field[1] === "") {
        setInvalidFields((prev) => [
          ...prev,
          {
            name: field[0],
            message: "Bạn không được để trống field này",
          },
        ]);
        invalids++;
      }
    });
    fields.forEach((field) => {
      switch (field[0]) {
        case "password":
          if (field[1].length < 6) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: field[0],
                message: "Mật khẩu phải nhiều hơn 6 kí tự",
              },
            ]);
            invalids++;
          }
          break;
        case "phone":
          if (!+field[1]) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: field[0],
                message: "Số điện thoại không hợp lệ",
              },
            ]);
            invalids++;
          }
          break;

        default:
          break;
      }
    });
    return invalids;
  };

  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-md">
      <h3 className="font-semibold text-2xl">
        {isRegister ? "Đăng kí" : "Đăng nhập"}
      </h3>
      <div className="w-full flex flex-col gap-5">
        {isRegister && (
          <InputForm
            setInvalidFields={setInvalidFields}
            invalidFields={invalidFields}
            label={"HỌ VÀ TÊN"}
            value={payload.name}
            setValue={setPayload}
            type={"name"}
          />
        )}
        <InputForm
          setInvalidFields={setInvalidFields}
          invalidFields={invalidFields}
          label={"SỐ ĐIỆN THOẠI"}
          value={payload.phone}
          setValue={setPayload}
          type={"phone"}
        />
        <InputForm
          setInvalidFields={setInvalidFields}
          invalidFields={invalidFields}
          label={"MẬT KHẨU"}
          value={payload.password}
          setValue={setPayload}
          type={"password"}
        />
        <Button
          textColor={"text-white"}
          bgColor={"bg-secondary1"}
          fullWidth
          onClick={handleSubmit}
        >
          {isRegister ? "Đăng kí" : "Đăng nhập"}
        </Button>
      </div>
      <div className=" mt-7 flex flex-row items-center justify-between">
        {isRegister ? (
          <>
            <small>Bạn đã có tài khoản?</small>
            <small
              onClick={() => {
                setIsRegister(false),
                  setPayload({
                    phone: "",
                    password: "",
                    name: "",
                  });
              }}
            >
              Đăng nhập ngay
            </small>
          </>
        ) : (
          <>
            <small className="text-[blue] hover:text-[red] cursor-pointer">
              Bạn quên mật khẩu?
            </small>
            <small
              onClick={() => {
                setIsRegister(true),
                  setPayload({
                    phone: "",
                    password: "",
                    name: "",
                  });
              }}
              className="text-[blue] hover:text-[red] cursor-pointer"
            >
              Tạo tài khoản mới
            </small>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
