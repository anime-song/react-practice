import { Button } from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";

const ClickIntervalComponent = (props) => {
  const [lastClickTime, setLastClickTime] = useState(null);

  const onClick = () => {
    const currentTime = performance.now();
    if (lastClickTime) {
      const interval = currentTime - lastClickTime;
      props.onIntervalChange(interval);
    }
    setLastClickTime(currentTime);
  };

  return <Button onClick={onClick}>クリック</Button>;
};

ClickIntervalComponent.propTypes = {
  onIntervalChange: PropTypes.func.isRequired,
};

export default ClickIntervalComponent;
