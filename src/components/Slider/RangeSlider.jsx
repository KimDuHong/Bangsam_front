import { useEffect, useState } from "react";
import { options } from "../../services/data";
import { getPriceRange } from "../../utils/getPriceRange";

import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderMark,
  Text,
  Box,
  Highlight,
  Flex,
} from "@chakra-ui/react";
import { getPrices } from "../../utils/getPrices";

function OptionRangeSlider({ idx, names, onUpdate }) {
  //   const [values, setValues] = useState(moneyDefaults[name]);
  const [values, setValues] = useState([0, 10]);
  const [range, setRange] = useState("");

  const moneyRange = options[names.eng].values;
  const labels = options[names.eng].labels;

  const handleChange = (newValues) => {
    setValues(newValues);
  };

  useEffect(() => {
    setRange(getPriceRange(values, options[names.eng].steps));
  }, [values]);

  useEffect(() => {
    onUpdate((prices) => {
      const newPrices = prices.map((price, _idx) => {
        if (_idx == idx) {
          return getPrices(range);
        } else {
          return price;
        }
      });
      return newPrices;
    });
  }, [range]);

  return (
    <Box my="20px">
      <Text fontWeight="bold" mb="10px" ml="-10px" fontSize="17px">
        {names.kor}
        <Highlight
          query={range}
          styles={
            names.kor.length < 3
              ? {
                  ml: "36px",
                  px: "3",
                  py: "2",
                  rounded: "full",
                  bg: "blue.700",
                  color: "white",
                  fontSize: "15px",
                }
              : {
                  ml: "20px",
                  px: "3",
                  py: "2",
                  rounded: "full",
                  bg: "blue.700",
                  color: "white",
                  fontSize: "15px",
                }
          }
        >
          {range}
        </Highlight>
      </Text>
      <RangeSlider
        mt="10px"
        mx="10px"
        defaultValue={values}
        min={0}
        max={30}
        step={1}
        w="480px"
        onChange={handleChange}
        position="relative"
      >
        {" "}
        {labels.map((item, idx) => {
          return (
            <RangeSliderMark key={idx} value={idx * 10} mt="16px" w="100%">
              {item}
            </RangeSliderMark>
          );
        })}
        <RangeSliderTrack bg="blue.100">
          <RangeSliderFilledTrack bg="blue.700" ml="10px" />
        </RangeSliderTrack>
        <RangeSliderThumb
          max={values[0] - 10}
          boxSize={8}
          index={0}
          border="2px solid black"
          ml={`11px`}
        >
          <Box color="blue.700" position="absolute" left={0} fontWeight="600">
            min
          </Box>
        </RangeSliderThumb>
        <RangeSliderThumb
          min={values[1] + 10}
          boxSize={8}
          index={1}
          border="2px solid black"
          ml={`20px`}
        >
          <Box color="blue.700" position="absolute" left={0} fontWeight="600">
            max
          </Box>
        </RangeSliderThumb>
      </RangeSlider>
    </Box>
  );
}
export default OptionRangeSlider;