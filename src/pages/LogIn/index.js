import React from "react";

import { Column, Text, Stack, Img, Input, Button } from "components";
import * as yup from "yup";
import { postLogin } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import useForm from "hooks/useForm";

const LogInPage = () => {
  const [apiData1, setapiData1] = React.useState();
  const formValidationSchema = yup
    .object()
    .shape({
      username: yup
        .string()
        .required("Username is required")
        .email("Please enter valid email"),
      password: yup.string().required("Password is required"),
    });
  const form = useForm(
    { username: "", password: "" },
    {
      validate: true,
      validateSchema: formValidationSchema,
      validationOnChange: true,
    }
  );
  const navigate = useNavigate();

  function callApi1(data) {
    const req = { data: { ...data } };

    postLogin(req)
      .then((res) => {
        setapiData1(res);

        navigate("/orders");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Please enter valid credentials!");
      });
  }

  return (
    <>
      <Column
        className="bg-white_A700 font-poppins items-center justify-end mx-[auto] lg:p-[28px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] w-[100%]"
        compid="5828:11383"
        comptype="Column"
      >
        <Text
          className="lg:mt-[60px] xl:mt-[69px] 2xl:mt-[78px] 3xl:mt-[93px] text-bluegray_900 w-[auto]"
          compid="5828:11384"
          as="h1"
          variant="h1"
          comptype="Text"
        >
          Order management Portal
        </Text>
        <Stack
          className="font-gilroy lg:h-[600px] xl:h-[686px] 2xl:h-[772px] 3xl:h-[926px] lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] w-[92%]"
          compid="57"
          comptype="Stack"
        >
          <Img
            src="images/img_group1.svg"
            className="absolute bottom-[0] lg:h-[546px] xl:h-[625px] 2xl:h-[703px] 3xl:h-[843px] w-[100%]"
            compid="5828:11389"
            comptype="Image"
            alt="GroupOne"
          />
          <Column
            className="absolute bg-white_A700 items-center justify-end left-[22%] lg:p-[24px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius16 top-[0] w-[47%]"
            compid="5831:12051"
            comptype="Column"
          >
            <Text
              className="font-semibold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] text-bluegray_900 w-[auto]"
              compid="5828:11395"
              as="h2"
              variant="h2"
              comptype="Text"
            >
              Sign in{" "}
            </Text>
            <Column
              className="lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]"
              compid="58"
              comptype="Column"
            >
              <Column
                className="rounded-radius8 w-[100%]"
                compid="5828:11396"
                comptype="Column"
              >
                <Text
                  className="text-bluegray_900 w-[auto]"
                  compid="5828:11397"
                  as="h3"
                  variant="h3"
                  comptype="Text"
                >
                  Email
                </Text>
                <Input
                  className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_300 text-bluegray_300 w-[100%]"
                  wrapClassName="2xl:mt-[6px] 3xl:mt-[7px] lg:mt-[4px] w-[100%] xl:mt-[5px]"
                  compid="5828:11398"
                  type="email"
                  comptype="EditText"
                  onChange={(e) => {
                    form.handleChange("username", e.target.value);
                  }}
                  errors={form?.errors?.username}
                  value={form?.values?.username}
                  name="email"
                  placeholder="jane@gmail.com"
                ></Input>
              </Column>
              <Column
                className="lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius8 w-[100%]"
                compid="5828:11401"
                comptype="Column"
              >
                <Text
                  className="text-bluegray_900 w-[auto]"
                  compid="5828:11402"
                  as="h3"
                  variant="h3"
                  comptype="Text"
                >
                  Password
                </Text>
                <Input
                  className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                  wrapClassName="2xl:mt-[6px] 3xl:mt-[7px] lg:mt-[4px] w-[100%] xl:mt-[5px]"
                  compid="5828:11403"
                  type="password"
                  comptype="EditText"
                  onChange={(e) => {
                    form.handleChange("password", e.target.value);
                  }}
                  errors={form?.errors?.password}
                  value={form?.values?.password}
                  name="Group10198"
                  placeholder="Enter Password"
                ></Input>
              </Column>
              <Text
                className="lg:ml-[296px] xl:ml-[338px] 2xl:ml-[381px] 3xl:ml-[457px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] text-blue_A701 w-[auto]"
                compid="5828:11427"
                as="h3"
                variant="h3"
                comptype="Text"
              >
                Forgot Password?
              </Text>
              <Button
                className="common-pointer font-medium lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                compid="5828:11406"
                comptype="Button"
                onClick={() => {
                  form.handleSubmit(callApi1);
                }}
                size="md"
              >
                Sign in
              </Button>
            </Column>
          </Column>
        </Stack>
      </Column>

      <ToastContainer />
    </>
  );
};

export default LogInPage;
