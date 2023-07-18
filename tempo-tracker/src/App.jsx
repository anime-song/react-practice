import { useState } from "react";
import { Text, Button, Stack } from "@chakra-ui/react";
import ClickIntervalComponent from "./ClickIntervalComponent";

function average(array) {
  return (
    array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
    array.length
  );
}
function App() {
  const [bpmList, setBpmList] = useState([]);
  const onIntervalChange = (interval) => {
    const bpm = (1 / (interval / 1000)) * 60;
    const newBpmList = [...bpmList, bpm];

    const maxLength = 20;
    if (newBpmList.length > maxLength) {
      const itemsToRemoveLength = newBpmList.length - maxLength;
      newBpmList.splice(0, itemsToRemoveLength);
    }
    setBpmList(newBpmList);
  };

  const onClickReset = () => {
    setBpmList([]);
  };

  return (
    <>
      <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
        <Text fontSize="5xl">
          {bpmList.length != 0 && average(bpmList).toFixed(1)}BPM
        </Text>
        <Stack>
          <ClickIntervalComponent onIntervalChange={onIntervalChange} />
          <Button onClick={onClickReset}>リセット</Button>
        </Stack>
      </div>
    </>
  );
}

export default App;
