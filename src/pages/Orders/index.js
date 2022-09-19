import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Stack,
  SelectBox,
  Button,
  ReactTable,
  List,
  CheckBox,
} from "components";
import { postBatchretrieve } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrdersPage = () => {
  const [apiData, setapiData] = React.useState();
  React.useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    const req = {};

    postBatchretrieve(req)
      .then((res) => {
        setapiData(res);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error integrating API!");
      });
  }

  const tabledata = [];
  const tablecolumns = [
    {
      id: "Rowid",
      className: "w-[40%]",
      tdClassName: "",
      Header: () => {
        return (
          <>
            <Row
              className="items-center justify-center lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px]"
              compid="12"
              comptype="Row"
            >
              <Text
                className="mb-[1px] lg:ml-[52px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] lg:mr-[199px] xl:mr-[228px] 2xl:mr-[257px] 3xl:mr-[308px] text-bluegray_600 w-[auto]"
                compid="5831:11381"
                as="h3"
                variant="h3"
                comptype="Text"
              >
                Id
              </Text>
            </Row>
          </>
        );
      },
      Cell: ({ row }) => {
        const data = row.original;
        return <></>;
      },
    },
    {
      id: "Rowname",
      className: "w-[18%]",
      tdClassName: "",
      Header: () => {
        return (
          <>
            <Row
              className="items-center justify-center lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px]"
              compid="13"
              comptype="Row"
            >
              <Text
                className="mb-[1px] ml-[3px] lg:mr-[58px] xl:mr-[66px] 2xl:mr-[75px] 3xl:mr-[90px] text-bluegray_600 w-[auto]"
                compid="5831:11382"
                as="h3"
                variant="h3"
                comptype="Text"
              >
                Name
              </Text>
            </Row>
          </>
        );
      },
      Cell: ({ row }) => {
        const data = row.original;
        return <></>;
      },
    },
    {
      id: "Rowquantity",
      className: "w-[15%]",
      tdClassName: "",
      Header: () => {
        return (
          <>
            <Row
              className="items-center justify-center xl:pr-[10px] 2xl:pr-[12px] 3xl:pr-[14px] lg:pr-[9px] xl:py-[10px] 2xl:py-[12px] 3xl:py-[14px] lg:py-[9px]"
              compid="14"
              comptype="Row"
            >
              <Text
                className="lg:mr-[38px] xl:mr-[43px] 2xl:mr-[49px] 3xl:mr-[58px] mt-[3px] text-bluegray_600 w-[auto]"
                compid="5831:11383"
                as="h3"
                variant="h3"
                comptype="Text"
              >
                Quantity
              </Text>
            </Row>
          </>
        );
      },
      Cell: ({ row }) => {
        const data = row.original;
        return <></>;
      },
    },
    {
      id: "Rowbaseprice",
      className: "w-[16%]",
      tdClassName: "",
      Header: () => {
        return (
          <>
            <Row
              className="items-center justify-center lg:pr-[10px] xl:pr-[11px] 2xl:pr-[13px] 3xl:pr-[15px] lg:py-[10px] xl:py-[11px] 2xl:py-[13px] 3xl:py-[15px]"
              compid="15"
              comptype="Row"
            >
              <Text
                className="mb-[1px] lg:mr-[31px] xl:mr-[35px] 2xl:mr-[40px] 3xl:mr-[48px] text-bluegray_600 w-[auto]"
                compid="5831:11384"
                as="h3"
                variant="h3"
                comptype="Text"
              >
                Base Price
              </Text>
            </Row>
          </>
        );
      },
      Cell: ({ row }) => {
        const data = row.original;
        return <></>;
      },
    },
    {
      id: "Rowtotalprice",
      className: "w-[10%]",
      tdClassName: "",
      Header: () => {
        return (
          <>
            <Row
              className="items-center justify-center lg:py-[10px] xl:py-[11px] 2xl:py-[13px] 3xl:py-[15px]"
              compid="16"
              comptype="Row"
            >
              <Text
                className="mb-[1px] text-bluegray_600 w-[auto]"
                compid="5831:11385"
                as="h3"
                variant="h3"
                comptype="Text"
              >
                Total Price
              </Text>
            </Row>
          </>
        );
      },
      Cell: ({ row }) => {
        const data = row.original;
        return <></>;
      },
    },
  ];

  return (
    <>
      <Column
        className="bg-white_A700 font-poppins items-center mx-[auto] lg:p-[24px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] w-[100%]"
        compid="5828:11437"
        comptype="Column"
      >
        <Row
          className="items-center justify-between w-[92%]"
          compid="5828:11557"
          comptype="Row"
        >
          <Text
            className="font-medium text-bluegray_900 w-[auto]"
            compid="5828:11558"
            as="h2"
            variant="h2"
            comptype="Text"
          >
            Orders
          </Text>
          <Column
            className="border border-blue_A700 border-solid lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center px-[4px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
            compid="5828:11566"
            comptype="Column"
          >
            <Img
              src="images/img_profileimglarg.png"
              className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
              compid="I5828:11566;139:681"
              comptype="CircleImage"
              alt="ProfileImgLarg"
            />
          </Column>
        </Row>
        <Stack
          className="font-opensans 3xl:h-[1023px] lg:h-[663px] xl:h-[758px] 2xl:h-[853px] mb-[4px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[91%]"
          compid="10"
          comptype="Stack"
        >
          <Img
            src="images/img_group1.svg"
            className="absolute bottom-[0] lg:h-[546px] xl:h-[625px] 2xl:h-[703px] 3xl:h-[843px] inset-x-[0] w-[100%]"
            compid="5828:11459"
            comptype="Image"
            alt="GroupOne"
          />
          <Stack
            className="absolute lg:h-[400px] xl:h-[458px] 2xl:h-[515px] 3xl:h-[618px] right-[0] top-[0] w-[91%]"
            compid="5831:12040"
            comptype="Stack"
          >
            <Row
              className="absolute bg-white_A700 justify-center left-[3%] lg:p-[21px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] rounded-radius8 w-[97%]"
              compid="5831:12039"
              comptype="Row"
            >
              <SelectBox
                className="font-semibold lg:mb-[328px] xl:mb-[375px] 2xl:mb-[422px] 3xl:mb-[506px] lg:ml-[554px] xl:ml-[634px] 2xl:ml-[713px] 3xl:ml-[856px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[10%]"
                compid="5831:11916"
                comptype="Dropdown"
                placeholderClassName="text-bluegray_600"
                name="Group10989"
                placeholder="Filter"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown.svg"
                    className="lg:w-[8px] lg:h-[4px] lg:mr-[9px] xl:w-[9px] xl:h-[5px] xl:mr-[10px] 2xl:w-[11px] 2xl:h-[6px] 2xl:mr-[12px] 3xl:w-[13px] 3xl:h-[7px] 3xl:mr-[14px]"
                    compid="I5831:11920;2780:34749"
                    comptype="Image"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
              <Button
                className="2xl:mb-[422px] 2xl:ml-[10px] 2xl:mr-[88px] 3xl:mb-[506px] 3xl:ml-[12px] 3xl:mr-[105px] flex items-center justify-center lg:mb-[328px] lg:ml-[7px] lg:mr-[68px] text-center w-[13%] xl:mb-[375px] xl:ml-[8px] xl:mr-[78px]"
                compid="5831:11930"
                comptype="Button"
                rightIcon={
                  <Img
                    src="images/img_vector.svg"
                    className="text-center lg:w-[12px] lg:h-[13px] lg:ml-[7px] xl:w-[14px] xl:h-[15px] xl:ml-[8px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[9px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[10px]"
                    compid="I5831:11926;120:4525"
                    comptype="Image"
                    alt="Vector"
                  />
                }
              >
                <div className="bg-transparent font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                  Export as PDF{" "}
                </div>
              </Button>
            </Row>
            <div className="table-wrap">
              <ReactTable
                data={tabledata}
                columns={tablecolumns}
                headerClass="bg-gray_50 items-center justify-end lg:px-[45px] xl:px-[51px] 2xl:px-[58px] 3xl:px-[69px] w-[100%]"
              ></ReactTable>
            </div>
          </Stack>
        </Stack>
      </Column>

      <ToastContainer />
    </>
  );
};

export default OrdersPage;
