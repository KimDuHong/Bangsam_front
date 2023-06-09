import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Text,
  Select,
  FormErrorMessage,
  VStack,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { HouseRegisterValues } from "../../services/data";
import { getDongList, getGuList } from "../../services/api";

const AddressSelectForm = ({
  setUpdatedHouse,
  setUpdatedData,
  savedGu,
  savedDong,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [guIdx, setGuIdx] = useState(1);
  const [isInit, setIsInit] = useState(true);
  const [isModify, setIsModify] = useState(false);

  const guListData = useQuery(["gulist"], getGuList);
  const dongListData = useQuery(["donglist", guIdx], getDongList);

  const guList = guListData.data?.map((gu) => ({
    label: gu.name,
    value: gu.name,
    index: gu.pk,
  }));

  const dongList = dongListData.data?.map((dong) => ({
    label: dong.name,
    value: dong.name,
    index: dong.pk,
  }));

  const handleGuSelectChange = (event) => {
    const selectedGuVal = event.currentTarget.value;
    const selectedGu = guList?.find((item) => item.value == selectedGuVal);
    setGuIdx(selectedGu?.index);
  };

  const onEnter = (data) => {
    let nextHouse = {};
    let nextData = {};
    let isChange = false;
    setUpdatedHouse((prevHouse) => {
      HouseRegisterValues.forEach((item) => {
        if (data[item.eng]) {
          if (data[item.eng] !== prevHouse[item.eng]) {
            if (item.eng === "dong") {
              const selectedDong = dongListData.data?.find(
                (d) => d.name == data[item.eng]
              );
              nextHouse["dong"] = selectedDong;
            } else {
              nextHouse["gu"] = data["gu"];
            }
            isChange = true;
          } else {
            nextHouse[item.eng] = prevHouse[item.eng];
          }
        } else {
          nextHouse[item.eng] = prevHouse[item.eng];
        }
      });
      return nextHouse;
    });

    setUpdatedData((prevData) => {
      HouseRegisterValues.forEach((item) => {
        if (data[item.eng]) {
          if (item.eng === "dong") {
            const selectedDong = dongListData.data?.find(
              (d) => d.name == data[item.eng]
            );
            nextData["dong"] = selectedDong;
          } else {
            nextData["gu"] = data["gu"];
          }
        } else if (prevData[item.eng]) {
          nextData[item.eng] = prevData[item.eng];
        }
      });
      return nextData;
    });

    if (isChange) {
      setIsModify(false);
    }
  };

  const onModify = () => {
    setIsModify(!isModify);
  };

  useEffect(() => {
    if (savedGu && isInit) {
      const selectedGu = guList?.find((item) => item.value == savedGu);
      setGuIdx(selectedGu?.index);
      setIsInit(false);
    }
  }, [guList]);

  return (
    <>
      <FormLabel marginBottom="0" fontWeight="600" w="100%">
        구 / 동
      </FormLabel>
      {isModify ? (
        <form onSubmit={handleSubmit(onEnter)}>
          <HStack w="40vw" minW="450px">
            <FormControl isInvalid={errors.gu} id="gu" my="1">
              <Select
                {...register("gu", { required: true })}
                placeholder="구를 선택해주세요"
                fontSize="14px"
                onChange={handleGuSelectChange}
              >
                {guList?.map((option) => (
                  <option
                    key={option.value}
                    index={option.index}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </Select>
              <FormErrorMessage>{`구를 선택해주세요`}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.dong} id="dong" my="1">
              <Select
                {...register("dong", { required: true })}
                placeholder="동을 선택해주세요"
                fontSize="14px"
                isDisabled={guIdx > 0 ? false : true}
              >
                {dongList?.map((option) => (
                  <option
                    key={option.value}
                    index={option.index}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </Select>
              <FormErrorMessage>{`동을 선택해주세요`}</FormErrorMessage>
            </FormControl>
            <HStack>
              <Button type="submit" w="5vw">
                입력
              </Button>
              <Button onClick={onModify} w="5vw">
                취소
              </Button>
            </HStack>
          </HStack>
        </form>
      ) : (
        <HStack justifyContent="space-between" w="100%" h="5.3vh">
          <VStack justifyContent="flex-start" w="100%">
            <Text w="100%">{`서울 ${savedGu} ${savedDong?.name}`}</Text>
          </VStack>
          <Button onClick={onModify} w="5.5vw">
            수정
          </Button>
        </HStack>
      )}
    </>
  );
};

export default AddressSelectForm;
